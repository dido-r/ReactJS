import { useState } from 'react';
import { del } from '../../../services/api';
import styles from './ConfirmDelete.module.css';

export function ConfirmDelete({
    setModal,
    orders,
    setOrders,
    orderId
}) {

    const [isFetching, setIsFetching] = useState(false);
    const onCloseModal = () => {
        setModal(false);
    }

    const onDelete = async () => {

        setIsFetching(true);
        await del(`classes/Orders/${orderId}`)
        setOrders(orders.filter(x => x.objectId !== orderId));
        setModal(false);
    }

    return (
        <div className={styles['modal-background']}>
            <div className={styles['modal-content']}>
                <span className={styles['close-modal']} onClick={onCloseModal}>&times;</span>
                <p>Are you sure you want to return this product?</p>
                <button className={styles['delete-order-btn']} disabled={isFetching ? true : false} onClick={onDelete}>Yes</button>
                <button className={styles['delete-order-btn']} disabled={isFetching ? true : false} onClick={onCloseModal}>No</button>
            </div>
        </div>
    );
}