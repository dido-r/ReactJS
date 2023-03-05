import styles from './style/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export function Contact() {

    return (
        <section className={styles['contact']}>
            <h2 className={styles['contact-head']}>Contacts</h2>
            <div className={styles['info-box']}>
                <FontAwesomeIcon className={styles['contact-icons']} icon={faLocationDot} />
                <h3 className={styles['info-box-h3']}>Our Address</h3>
                <p className={styles['contact-box-p']}>Ruse, Bulgaria</p>
            </div>
            <div className={styles['info-box']}>
                <FontAwesomeIcon className={styles['contact-icons']} icon={faEnvelope} />
                <h3 className={styles['info-box-h3']}>Email Us</h3>
                <p className={styles['contact-box-p']}>info@projectsite.com</p>
            </div>
            <div className={styles['info-box']}>
                <FontAwesomeIcon className={styles['contact-icons']} icon={faPhone} />
                <h3 className={styles['info-box-h3']}>Call Us</h3>
                <p className={styles['contact-box-p']}>+359999999999</p>
            </div>
            <form className={styles['info-box']}>
                <input type="text" name="name" className={styles['contact-input']} id="name" placeholder="Your Name" required />
                <input type="email" className={styles['contact-input']} name="email" id="email" placeholder="Your Email" required />
                <input type="text" className={styles['contact-input']} name="subject" id="subject" placeholder="Subject" required />
                <textarea className={styles['contact-textarea']} name="message" rows="5" placeholder="Message" required></textarea>
                <div><button className={styles['contact-btn']} type="submit">Send Message</button></div>
            </form>
        </section >
    );
}