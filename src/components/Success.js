import styles from './style/Success.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { Link } from 'react-router-dom';

export function Success() {

    return (
        <div className={styles['info-box-success']}>
            <FontAwesomeIcon className={styles['success-icon']} icon={faCheckCircle} />
            <h2 className={styles['success-head']}>Thank you for your order</h2>
            <Link to="/" className={styles['success-a']}>Back to Home</Link>
        </div>
    );
}