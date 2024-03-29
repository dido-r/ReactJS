import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import styles from './Details.module.css';
import { put, get } from '../../services/api';
import { MoreDetails } from './MoreDetails/MoreDetails';
import { Rating } from './Rating/Rating';
import { useSessionContext } from '../../context/sessionContext';
import { useForm } from '../../hooks/useForm';

export function Details() {

    const [modal, setModal] = useState(false);
    const [details, setDetails] = useState(false);
    const [sizeChart, setSizeChart] = useState(false);
    const [review, setReview] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [currentItem, setCurrentItem] = useState({ size: [] });
    const [isLoading, setIsloading] = useState(false);
    const { itemId } = useParams();
    const { setBasket, basket, user } = useSessionContext();
    const navigate = useNavigate();
    const { values, onChangeHandler } = useForm({
        quantity: 1,
        selectedSize: ''
    });

    const onAddToCard = () => {

        if (user === null) {

            navigate('/login');
            return;
        }

        if (values.selectedSize === "") {
            setModalMessage('Please select a size!');
            return setModal(true);
        }

        setIsloading(true);
        setModalMessage('Successfully added to your basket');
        setModal(true);

        let isOrdered = basket.find(x => x.productId === itemId && x.selectedSize === values.selectedSize);
        let obj = Array.from(basket);
       

        if (isOrdered !== undefined) {
            
            isOrdered.quantity += values.quantity;

        } else {
            
            obj.push({
                productId: currentItem.objectId,
                productName: currentItem.name,
                productPrice: currentItem.price,
                productImg: currentItem.imgUrl,
                quantity: values.quantity,
                selectedSize: values.selectedSize
            })

            setBasket(obj);
        }

        try {

            put(`classes/Baskets/${user.basketId}`, { items: obj });
            
        } catch (err) {

            return alert(err.message)
        }

       setIsloading(false);
    }

    function showSizeChart() {

        setSizeChart(!sizeChart);
    }

    function showMoreDetails() {
        setDetails(!details);
    }

    function showReview() {
        setReview(!review);
    }

    useEffect(() => {

        async function fetchData() {

            const response = await get(`classes/Products?where=%7B%20%22objectId%22%3A%20%22${itemId}%22%7D`);
            setCurrentItem(...response.results);
        }
        fetchData();

    }, [itemId]);


    return (

        <div className={styles['product-template-container']}>
            {modal && <Modal setModal={setModal} message={modalMessage} isLoading={isLoading}/>}

            <div className={styles['img-container']}>
                <img className={styles['product-image']} src={currentItem.imgUrl} alt="" />
            </div>

            <div className={styles['product-details']}>
                <h2 className={styles['product-name']}>{currentItem.name}</h2>
                <p className={styles['product-price']}>${currentItem.price}</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of
                    type and scrambled it to make a type specimen book.</p>

                <form>
                    <div className={styles['product-size']} >
                        {currentItem.size.map(x =>
                            <div key={x} className={styles['swatch-element']}>
                                <label style={values.selectedSize === x ? { border: "1px solid" } : { border: "none" }} htmlFor={x} className={styles['product-form-label']}>{x}<input className={styles['swatch-input']} id={x} type='radio' name="selectedSize"
                                    value={x} onChange={(e) => onChangeHandler(e)} /></label>
                            </div>
                        )}
                    </div>
                    <div className={styles['wrapQtyBtn']}>
                        <div className={styles['qtyField']}>
                            <Link className={styles['qtyBtn']} onClick={() => onChangeHandler('-')}><i className={styles['fa']} aria-hidden="true">-</i></Link>
                            <input type="text" id="Quantity" name="quantity" value={values.quantity} className={styles['qty']} onChange={() => { }} />
                            <Link className={styles['qtyBtn']} onClick={() => onChangeHandler('+')}><i className={styles['fa']} aria-hidden="true">+</i></Link>
                        </div>
                    </div>
                    <div className={styles['product-form-item-submit']}>
                        <button type="button" name="add" className={styles['product-form-item-submit-btn']} onClick={onAddToCard}>Add to cart</button>
                    </div>
                </form>
                <div className={styles['tab-container']}>
                    <p className={styles['acor-ttl']} onClick={() => showMoreDetails()}>Product Details</p>
                    {details && <MoreDetails prop={'details'} />}
                </div>
                <div className={styles['tab-container']}>
                    <p className={styles['acor-ttl']} onClick={() => showSizeChart()}>Size Chart</p>
                    {sizeChart && <MoreDetails prop={'sizeChart'} />}
                </div>
                <div className={styles['tab-container']}>
                    <p className={styles['acor-ttl']} onClick={() => showReview()}>Reviews</p>
                    {review && <Rating user={user} objectId={currentItem.objectId} />}
                </div>
            </div>
        </div>
    );
}