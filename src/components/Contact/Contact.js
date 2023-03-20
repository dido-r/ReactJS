import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export function Contact() {
    
    return (
        <section className={styles['contact']}>
            <h2>Contacts</h2>
            <div className={styles['info-box']}>
                <FontAwesomeIcon className={styles['contact-icons']} icon={faLocationDot} />
                <h3>Our Address</h3>
                <p>Ruse, Bulgaria</p>
            </div>
            <div className={styles['info-box']}>
                <FontAwesomeIcon className={styles['contact-icons']} icon={faEnvelope} />
                <h3>Email Us</h3>
                <p>info@projectsite.com</p>
            </div>
            <div className={styles['info-box']}>
                <FontAwesomeIcon className={styles['contact-icons']} icon={faPhone} />
                <h3>Call Us</h3>
                <p>+359999999999</p>
            </div>
            <form className={styles['info-box']}>
                <input type="text" name="name" id="name" placeholder="Your Name" required />
                <input type="email" name="email" id="email" placeholder="Your Email" required />
                <input type="text" name="subject" id="subject" placeholder="Subject" required />
                <textarea name="message" rows="5" placeholder="Message" required></textarea>
                <div><button className={styles['contact-btn']} type="submit">Send Message</button></div>
            </form>
        </section >
    );
}