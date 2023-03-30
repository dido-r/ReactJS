import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Checkout.module.css';
import { get, put, post } from '../../services/api';
import { useSessionContext } from '../../context/sessionContext';
import { Modal } from '../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export function Checkout() {

    const navigate = useNavigate();
    const { basket, setBasket, user } = useSessionContext();
    const [isLoading, setIsloading] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {

        async function fetchData() {

            try {

                const response = await get(`classes/Baskets/${user.basketId}`);
                setBasket(response.items);

            } catch {

                setModalMessage('Could not load your basket. Please try again later or contact support.')
                setModal(true);
                return
            }
        }
        fetchData();

    }, [setBasket, user.basketId]);

    const onItemRemove = async (id) => {

        try {

            let obj = [...basket].filter(z => (z.productId + z.selectedSize) !== id);
            await put(`classes/Baskets/${user.basketId}`, { userId: user.userId, items: obj });
            setBasket(x => x.filter(z => (z.productId + z.selectedSize) !== id));

        } catch {

            setModalMessage('Could not remove this item. Please try again later or contact support.')
            setModal(true);
            return
        }
    }

    async function fetchData(x) {

        try {

            await post(`classes/Orders`, { ...x, userId: user.userId });

        } catch {

            setModalMessage('Bad order request. Please try again later or contact support.')
            setModal(true);
            return
        }
    }

    const onOrderSubmit = () => {

        if (basket.length === 0) {

            setModalMessage('Your basket is empty.')
            setModal(true);
            return;
        }

        setIsloading(true);
        setModalMessage('Loading...');
        setModal(true);

        basket.map(x => fetchData(x));
        setBasket([]);

        try {

            put(`classes/Baskets/${user.basketId}`, { items: [] });

        } catch {

            setModalMessage('Could not empty your basket. Please contact support.')
            setModal(true);
            return;
        }

        setIsloading(false);
        setModal(false);
        navigate('/successful-order');
    }

    const onQuantityChange = (e, id) => {

        setBasket(x => x.map(z => (z.productId + z.selectedSize) === id ? ({ ...z, quantity: e.target.value }) : z));
    }

    return (
        <>
            {modal && <Modal modal={modal} setModal={setModal} message={modalMessage} isLoading={isLoading} />}
            <h2 className={styles['check-head']}>Checkout</h2>
            <div className={styles['container']}>
                <table className={styles['check-table']}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map(x =>
                            <tr key={x.productId + x.selectedSize}>
                                <td><Link to={"details/" + x.productId}>{x.productName}</Link></td>
                                <td>${x.productPrice}</td>
                                <td>{x.selectedSize}</td>
                                <td><input type="number" min={1} defaultValue={x.quantity} onChange={(e) => onQuantityChange(e, x.productId + x.selectedSize)} /></td>
                                <td>${x.productPrice * x.quantity}</td>
                                <td><button className={styles['btn-rem']} onClick={() => onItemRemove(x.productId + x.selectedSize)}><FontAwesomeIcon className={styles['trash']} icon={faTrashCan} /></button></td>
                            </tr>

                        )}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>${basket.reduce((init, x) => init + x.productPrice * x.quantity, 0)}</td>
                        </tr>
                    </tfoot>
                </table>

                <div>
                    <div className={styles['check-container']}>
                        <form className={styles['customer-info']}>
                            <h3 className={styles['cust-head']}>Billing details</h3>
                            <div>
                                <div className={styles['billing-fields']}>
                                    <label>First name</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label>Last Name</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label>Country</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label>Address</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input defaultValue={user.userFirstName} />
                                </div>
                                <div>
                                    <input defaultValue={user.userLastName} />
                                </div>
                                <div>
                                    <select>
                                        <option value=""> --- Please Select --- </option>
                                        <option value="244">Aaland Islands</option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">American Samoa</option>
                                        <option value="5">Andorra</option>
                                        <option value="6">Angola</option>
                                    </select>
                                </div>
                                <div>
                                    <input></input>
                                </div>
                            </div>
                        </form>

                        <div className={styles['customer-info']}>
                            <h3 className={styles['cust-head']}>Payment Information</h3>
                            <div>
                                <div className={styles['billing-fields']}>
                                    <label>Card Name </label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label>Credit Card Type</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label>Card Number</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label>CVV</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label>Expiration Date</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input placeholder="Card Name" />
                                </div>
                                <div>
                                    <select>
                                        <option value=""> --- Please Select --- </option>
                                        <option value="1">American Express</option>
                                        <option value="2">Visa Card</option>
                                        <option value="3">Master Card</option>
                                        <option value="4">Discover Card</option>
                                    </select>
                                </div>
                                <div>
                                    <input placeholder="Credit Card Number" />
                                </div>
                                <div>
                                    <input placeholder="CVV" />
                                </div>
                                <div>
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['order-button-center']}>
                    <button className={styles['order-button-payment-btn']} value="Place order" type="button" onClick={onOrderSubmit}>Place order</button>
                </div>
            </div>
        </>
    );
}