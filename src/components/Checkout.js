import styles from './style/Checkout.module.css';

export function Checkout() {

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
                    <tr>
                        <td className={styles['order-table-td']}>Spike Jacket</td>
                        <td className={styles['order-table-td']}>$99</td>
                        <td className={styles['order-table-td']}>S</td>
                        <td className={styles['order-table-td']}>1</td>
                        <td className={styles['order-table-td']}>$99</td>
                        <td className={styles['order-table-td']}><button className={styles['btn-rem']}>x</button></td>
                    </tr>
                    <tr>
                        <td className={styles['order-table-td']}>Argon Sweater</td>
                        <td className={styles['order-table-td']}>$199</td>
                        <td className={styles['order-table-td']}>M</td>
                        <td className={styles['order-table-td']}>2</td>
                        <td className={styles['order-table-td']}>$298</td>
                        <td className={styles['order-table-td']}><button className={styles['btn-rem']}>x</button></td>
                    </tr>
                    <tr>
                        <td className={styles['order-table-td']}>Babydoll Bow Dress</td>
                        <td className={styles['order-table-td']}>$299</td>
                        <td className={styles['order-table-td']}>XL</td>
                        <td className={styles['order-table-td']}>3</td>
                        <td className={styles['order-table-td']}>$398</td>
                        <td className={styles['order-table-td']}><button className={styles['btn-rem']}>x</button></td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr>
                        <td className={styles['order-table-td']}>Shipping </td>
                        <td className={styles['order-table-td']}>$50.00</td>
                    </tr>
                    <tr>
                        <td className={styles['order-table-td']}>Total</td>
                        <td className={styles['order-table-td']}>$845.00</td>
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
            <button className={styles['order-button-payment-btn']} value="Place order" type="submit">Place order</button>
            </div>
            </div>
        </>
    );
}