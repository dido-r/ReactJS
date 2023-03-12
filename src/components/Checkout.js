import styles from './style/Checkout.module.css';

export function Checkout({
    basket,
    setBasket
}) {

    const onItemRemove = (id) => {

        basket.map(x => console.log(x.currentItem.objectId + x.selectedSize))
        setBasket(x => x.filter(z => (z.currentItem.objectId + z.selectedSize) !== id));
        console.log(basket)
    }

    const onOrderSubmit = () => {

       if(basket.length === 0){

        alert("Your basket is empty");
        return;
       }
       
        basket.map(x => fetch("https://parseapi.back4app.com/classes/Orders",
        {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        }));

        setBasket([]);
    }

    return (
        <>
            <h2 className={styles['check-head']}>Checkout</h2>
            <div className={styles['container']}>
                <table className={styles['check-table']}>
                    <thead>
                        <tr>
                            <th className={styles['order-table-th']}>Product Name</th>
                            <th className={styles['order-table-th']}>Price</th>
                            <th className={styles['order-table-th']}>Size</th>
                            <th className={styles['order-table-th']}>Qty</th>
                            <th className={styles['order-table-th']}>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map(x =>
                            <tr key={x.currentItem.objectId + x.selectedSize}>
                                <td className={styles['order-table-td']}>{x.currentItem.name}</td>
                                <td className={styles['order-table-td']}>${x.currentItem.price}</td>
                                <td className={styles['order-table-td']}>{x.selectedSize}</td>
                                <td className={styles['order-table-td']}>{x.quantity}</td>
                                <td className={styles['order-table-td']}>${x.currentItem.price * x.quantity}</td>
                                <td className={styles['order-table-td']}><button className={styles['btn-rem']} onClick={() => onItemRemove(x.currentItem.objectId + x.selectedSize)}>x</button></td>
                            </tr>

                        )}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td className={styles['order-table-td']}>Total</td>
                            <td className={styles['order-table-td']}>${basket.reduce((init, x) => init + x.currentItem.price * x.quantity, 0)}</td>
                        </tr>
                    </tfoot>
                </table>

                <div>
                    <div className={styles['check-container']}>
                        <form className={styles['customer-info']}>
                            <h3 className={styles['cust-head']}>Billing details</h3>
                            <div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>First name</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>Last Name</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>E-Mai</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>Country</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>Address</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input className={styles['billing-fields-f']}></input>
                                </div>
                                <div>
                                    <input className={styles['billing-fields-f']}></input>
                                </div>
                                <div>
                                    <input className={styles['billing-fields-f']}></input>
                                </div>
                                <div>
                                    <select className={styles['billing-fields-f']}>
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
                                    <input className={styles['billing-fields-f']}></input>
                                </div>
                            </div>
                        </form>

                        <div className={styles['customer-info']}>
                            <h3 className={styles['cust-head']}>Payment Information</h3>
                            <div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>Card Name </label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>Credit Card Type</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>Card Number</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>CVV</label>
                                </div>
                                <div className={styles['billing-fields']}>
                                    <label className={styles['billing-fields-label']}>Expiration Date</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input className={styles['billing-fields-f']} placeholder="Card Name" />
                                </div>
                                <div>
                                    <select className={styles['billing-fields-f']}>
                                        <option value=""> --- Please Select --- </option>
                                        <option value="1">American Express</option>
                                        <option value="2">Visa Card</option>
                                        <option value="3">Master Card</option>
                                        <option value="4">Discover Card</option>
                                    </select>
                                </div>
                                <div>
                                    <input className={styles['billing-fields-f']} placeholder="Credit Card Number" />
                                </div>
                                <div>
                                    <input className={styles['billing-fields-f']} placeholder="CVV" />
                                </div>
                                <div>
                                    <input className={styles['billing-fields-f']} type="date" />
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