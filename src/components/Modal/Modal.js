import LoadingSpinner from '../Spinner/LoadingSpinner';
import styles from './Modal.module.css';

export function Modal({
    setModal,
    message,
    isLoading
}) {

    const onCloseModal = () => {
        setModal(false);
    }

    return (
        <div className={styles['modal-background']}>
            <div className={styles['modal-content']}>
                {!isLoading && <span className={styles['close-modal']} onClick={onCloseModal}>&times;</span>}
                {isLoading ? <LoadingSpinner /> : <p>{message}</p>}
            </div>
        </div>

    );
}