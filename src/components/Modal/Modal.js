import styles from './Modal.module.css';

export function Modal({
    setModal
}) {

    const onCloseModal = () => {
        setModal(false)
    }
    return (
        <div className={styles['modal-background']}>
            <div className={styles['modal-content']}>
                <span className={styles['close-modal']} onClick={onCloseModal}>&times;</span>
                <p>Successfully added to your basket</p>
            </div>
        </div>

    );
}