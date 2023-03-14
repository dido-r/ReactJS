import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style/Orders.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch(`https://parseapi.back4app.com/classes/Orders?where=%7B%20%22userId%22%3A%20%22${localStorage.userId}%22%7D`,
            {
                headers: {
                    "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                    "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU"
                }
            })
            .then(x => x.json())
            .then(x => setOrders(x.results))
    }, []);

    return (
        <>
            <div className={styles["orders-title"]}>
                <h2 className={styles["page-width"]}>My orders</h2>
            </div>

            {orders.length !== 0 ? 
            
            <table className={styles["table-order"]}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Order Price</th>
                        <th>Size</th>
                        <th>Change size</th>
                        <th>Return</th>
                    </tr>
                </thead>
                <tbody>

                    {orders.map(x =>
                        <tr key={x.currentItem.objectId}>
                            <td><img src={x.currentItem.imgUrl} alt="img" /></td>
                            <td><h4>{x.currentItem.name}</h4></td>
                            <td>${x.currentItem.price}</td>
                            <td>{x.selectedSize}</td>
                            <td><Link to="/changesize" className={styles["return-order-btn"]}>Change</Link></td>
                            <td><button className={styles["remove-order-btn"]}>Return</button></td>
                        </tr>)}

                </tbody>
            </table> : <div className={styles['no-orders-container']}><FontAwesomeIcon className={styles['no-orders-icon']} icon={faX}/><h3 className={styles['no-orders']}>You have no orders yet. Please taka a look at our shop and make some!</h3></div> }

            
        </>
    );
}