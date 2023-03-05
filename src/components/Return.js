import styles from './style/Success.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"

export function Return() {

    return (
        <div className={styles['info-box-success']}>
            <FontAwesomeIcon className={styles['success-icon']} icon={faCheckCircle} />
            <h2 className={styles['success-head']}>Complete</h2>
            <a className={styles['success-a']} href="#">Back to your orders</a>
        </div>
    );
}