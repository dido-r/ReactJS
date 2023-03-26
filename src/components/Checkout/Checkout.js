import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.css';
import { get, put, post } from '../../services/api';

export function Checkout({
    basket,
    setBasket,
    user
}) {

    const navigate = useNavigate();

    useEffect(() => {

        async function fetchData() {

            const response = await get(`classes/Baskets/${user.basketId}`);
            setBasket(response.items);
        }
        fetchData();

    }, [ setBasket, user.basketId]);

    const onItemRemove = async (id) => {
        
        let obj = [...basket].filter(z => (z.currentItem.objectId + z.selectedSize) !== id);
        await put(`classes/Baskets/${user.basketId}`, {userId: user.userId, items: obj});
        setBasket(x => x.filter(z => (z.currentItem.objectId + z.selectedSize) !== id));
    }

    async function fetchData(x) {

        await post(`classes/Orders`, { ...x, userId: user.userId });
    }

    const onOrderSubmit = () => {

        if (basket.length === 0) {

            alert("Your basket is empty");
            return;
        }

        basket.map(x => fetchData(x));
        setBasket([]);
        navigate('/successful-order');
    }

    return (
        <>
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
                            <tr key={x.currentItem.objectId + x.selectedSize}>
                                <td>{x.currentItem.name}</td>
                                <td>${x.currentItem.price}</td>
                                <td>{x.selectedSize}</td>
                                <td>{x.quantity}</td>
                                <td>${x.currentItem.price * x.quantity}</td>
                                <td><button className={styles['btn-rem']} onClick={() => onItemRemove(x.currentItem.objectId + x.selectedSize)}>x</button></td>
                            </tr>

                        )}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>${basket.reduce((init, x) => init + x.currentItem.price * x.quantity, 0)}</td>
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