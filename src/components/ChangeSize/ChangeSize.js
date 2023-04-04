import styles from './ChangeSize.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { put, get } from '../../services/api';
import { Modal } from '../Modal/Modal';
import { useForm } from '../../hooks/useForm';
import { MoreDetails } from '../Details/MoreDetails/MoreDetails';

export function ChangeSize() {

    const [details, setDetails] = useState(false);
    const [sizeChart, setSizeChart] = useState(false);
    const [currentItem, setCurrentItem] = useState({ size: [] });
    const [currentorder, setCurrentOrder] = useState({ size: [] });
    const { orderId, itemId } = useParams();
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(false);
    const { values, onChangeHandler } = useForm({
        selectedSize: ''
    });
    const navigate = useNavigate();

    function showSizeChart() {
        setSizeChart(!sizeChart);
    }

    function showMoreDetails() {
        setDetails(!details);
    }

    const onSizechange = async () => {

        getCurrentOrder();

        try {

            await put(`/classes/Orders/${orderId}`, { ...currentorder, selectedSize: values.selectedSize });

        } catch {

            setModalMessage('Bad request. Please try again later or contact support.')
            setModal(true);
            return;
        }

        navigate('/successful-order');
    }

    const getCurrentOrder = async () => {

        try {

            let response = await get(`/classes/Orders?where=%7B%20%22objectId%22%3A%20%22${orderId}%22%7D`);
            setCurrentOrder(...response.results);

        } catch{

            setModalMessage('Could not load current order. Please try again later or contact support.')
            setModal(true);
            return;
        }
    }

    useEffect(() => {

        async function fetchData() {

            try {

                const response = await get(`/classes/Products?where=%7B%20%22objectId%22%3A%20%22${itemId}%22%7D`);
                setCurrentItem(...response.results)

            } catch {

                setModalMessage('Could not load current order. Please try again later or contact support.')
                setModal(true);
                return;
            }
        }
        fetchData();

    }, [itemId]);

    return (

        <div className={styles['product-template-container']}>
            {modal && <Modal setModal={setModal} message={modalMessage} />}
            <div className={styles['img-container']}>
                <img className={styles['product-image']} src={currentItem.imgUrl} alt="" />
            </div>

            <div className={styles['product-details']}>
                <h2 className={styles['product-name']}>{currentItem.name}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of
                    type and scrambled it to make a type specimen book.</p>
                <h4>Choose a new size:</h4>
                <form>
                    <div className={styles['product-size']} >
                        {currentItem.size.map(x =>
                            <div key={x} className={styles['swatch-element']}>
                            <label style={values.selectedSize === x ? { border: "1px solid" } : { border: "none" }} htmlFor={x} className={styles['product-form-label']}>{x}<input className={styles['swatch-input']} id={x} type='radio' name="selectedSize"
                                value={x} onChange={(e) => onChangeHandler(e)} /></label>
                        </div>
                        )}
                    </div>
                    <div className={styles['product-form-item-submit']}>
                        <button type="button" name="add" className={styles['product-form-item-submit-btn']} onClick={onSizechange}>Confirm size change</button>
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
            </div>
        </div>
    );
}