import styles from './style/Success.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"

export function Success() {

    return (
        <div className={styles['info-box-success']}>
            <FontAwesomeIcon className={styles['success-icon']} icon={faCheckCircle} />
            <h2 className={styles['success-head']}>Thank you for your order</h2>
            <a className={styles['success-a']} href="#">Back to Home</a>
        </div>
    );
}