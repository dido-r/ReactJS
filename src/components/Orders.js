import styles from './style/Orders.module.css';

export function Orders() {

    return (
        <>
            <div className={styles["orders-title"]}>
                <h2 className={styles["page-width"]}>My orders</h2>
            </div>

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
                    <tr>
                        <td><img src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854614/collection2_vajifd.jpg" alt="img" /></td>
                        <td><h4>Minerva Dress black</h4></td>
                        <td>$165.00</td>
                        <td>S</td>
                        <td><a href="change.html" className={styles["return-order-btn"]}>Change</a></td>
                        <td><a href="return.html" className={styles["remove-order-btn"]}>Return</a></td>
                    </tr>
                    <tr>
                        <td><img src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854614/collection2_vajifd.jpg" alt="img" /></td>
                        <td><h4>Minerva Dress black</h4></td>
                        <td>$165.00</td>
                        <td>M</td>
                        <td><a href="change.html" className={styles["return-order-btn"]}>Change</a></td>
                        <td><a href="return.html" className={styles["remove-order-btn"]}>Return</a></td>
                    </tr>
                    <tr>
                        <td><img src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854614/collection2_vajifd.jpg" alt="img" /></td>
                        <td><h4>Minerva Dress black</h4></td>
                        <td>$165.00</td>
                        <td>L</td>
                        <td><a href="change.html" className={styles["return-order-btn"]}>Change</a></td>
                        <td><a href="return.html" className={styles["remove-order-btn"]}>Return</a></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}