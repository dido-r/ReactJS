import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Orders.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { del, get } from '../../services/api';
import { useSessionContext } from '../../context/sessionContext';

export function Orders() {

    const [orders, setOrders] = useState([]);
    const {user} = useSessionContext();

    const onOrderReturn = async (orderId) => {

        await del(`classes/Orders/${orderId}`)
        setOrders(orders.filter(x => x.objectId !== orderId));
    }

    useEffect(() => {

        async function fetchData() {

            const response = await get(`classes/Orders?where=%7B%20%22userId%22%3A%20%22${user.userId}%22%7D`);
            setOrders(response.results);
        }
        fetchData();

    }, [user.userId]);

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
                            <tr key={x.objectId}>
                                <td><img src={x.productImg} alt="img" /></td>
                                <td><h4>{x.productName}</h4></td>
                                <td>${x.productPrice}</td>
                                <td>{x.selectedSize}</td>
                                <td><Link to={"/orders/change-size/" + x.objectId + "/" + x.productId} className={styles["return-order-btn"]}>Change</Link></td>
                                <td><button className={styles["remove-order-btn"]} onClick={() => onOrderReturn(x.objectId)}>Return</button></td>
                            </tr>)}

                    </tbody>
                </table> : <div className={styles['no-orders-container']}><FontAwesomeIcon className={styles['no-orders-icon']} icon={faX} /><h3 className={styles['no-orders']}>You have no orders yet. Please taka a look at our shop and make some!</h3></div>}

        </>
    );
}