import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import styles from './Details.module.css';
import { put, get } from '../../services/api';
import { MoreDetails } from './MoreDetails/MoreDetails';
import { Rating } from './Rating/Rating';

export function Details(
    {
        setBasket,
        basket,
        user
    }
) {

    const [modal, setModal] = useState(false);
    const [details, setDetails] = useState(false);
    const [sizeChart, setSizeChart] = useState(false);
    const [review, setReview] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [currentItem, setCurrentItem] = useState({ size: [] });
    const { itemId } = useParams();
    const navigate = useNavigate();

    const onAddToCard = async () => {

        if (user === null) {

            navigate('/login');
            return;
        }

        if (selectedSize === "") {
            setModalMessage('Please select a size!');
            return setModal(true);
        }

        let isOrdered = basket.find(x => x.currentItem.objectId === itemId);
        let obj = [...basket];

        if (isOrdered !== undefined && isOrdered.selectedSize === selectedSize) {

            obj.map(z => z.currentItem.objectId === itemId ? {
                ...z,
                quantity: z.quantity + quantity
            } : z);

            setBasket(x => x.map(z => z.currentItem.objectId === itemId ? {
                ...z,
                quantity: z.quantity + quantity
            } : z))

        } else {

            obj.push({
                currentItem,
                quantity,
                selectedSize
            });

            setBasket(x => [...x, {
                currentItem,
                quantity,
                selectedSize
            }]);
        }

        try {

            await put(`classes/Baskets/${user.basketId}`, { userId: user.userId, items: obj });

        } catch (err) {

            return alert(err.message)
        }

        setModalMessage('Successfully added to your basket');
        setModal(true);
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

    function increaseQty() {

        setQuantity(quantity + 1);
    }

    function decreaseQty() {
        setQuantity(quantity === 1 ? 1 : quantity - 1);
    }

    const onSizeSelect = (e) => {
        setSelectedSize(e.target.value);
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
            {modal && <Modal modal={modal} setModal={setModal} message={modalMessage} />}

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
                                <label style={selectedSize === x ? { border: "1px solid" } : { border: "none" }} htmlFor={x} className={styles['product-form-label']}>{x}<input className={styles['swatch-input']} id={x} type='radio' name="option-size"
                                    value={x} onChange={onSizeSelect} /></label>
                            </div>
                        )}
                    </div>
                    <div className={styles['wrapQtyBtn']}>
                        <div className={styles['qtyField']}>
                            <Link className={styles['qtyBtn']} onClick={() => decreaseQty()}><i className={styles['fa']} aria-hidden="true">-</i></Link>
                            <input type="text" id="Quantity" name="quantity" value={quantity} className={styles['qty']} onChange={() => { }} />
                            <Link className={styles['qtyBtn']} onClick={() => increaseQty()}><i className={styles['fa']} aria-hidden="true">+</i></Link>
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