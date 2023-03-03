import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"

export function Footer() {

    return (
        <footer id="footer">
            <div className={styles['footer-info']}>
                <div className={styles['footer-row-align']}>
                    <h4 class={styles['footer-h4']}>Useful Links</h4>
                    <ul className={styles['footer-ul']}>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="index.html">Home</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="about.html">About us</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="lorem.html">Terms of service</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="lorem.html">Privacy policy</a></li>
                    </ul>
                </div>

                <div className={styles['footer-row-align']}>
                    <h4 class={styles['footer-h4']}>Our Services</h4>
                    <ul className={styles['footer-ul']}>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="contact.html">Customer service</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="lorem.html">Return policy</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="lorem.html">Shipping information</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="faqs.html">FAQ</a></li>
                    </ul>
                </div>

                <div className={styles['footer-row-align']}>
                    <h4 class={styles['footer-h4']}>Contact Us</h4>
                    <ul className={styles['footer-ul']}>
                        <li className={styles['footer-li']}>Ruse, 7000</li>
                        <li className={styles['footer-li']}>Bulgaria</li>
                        <li className={styles['footer-li']}>Phone: +359999999999</li>
                        <li className={styles['footer-li']}>Email: some_mail@projectsite.com</li>
                    </ul>
                </div>

                <div>
                    <a href="https://www.facebook.com"><FontAwesomeIcon className={styles['social-links']} icon={faFacebook} /></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon className={styles['social-links']} icon={faTwitter} /></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon className={styles['social-links']} icon={faInstagram} /></a>
                    <a href="https://www.pinterest.com"><FontAwesomeIcon className={styles['social-links']} icon={faPinterest} /></a>
                </div>
            </div>
        </footer>
    );
}