import styles from './style/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"

export function Footer() {

    return (
        <footer id="footer">
            <div className={styles['footer-info']}>
                <div className={styles['footer-row-align']}>
                    <h4 className={styles['footer-h4']}>Useful Links</h4>
                    <ul className={styles['footer-ul']}>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">Home</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">About us</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">Terms of service</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className={styles['footer-row-align']}>
                    <h4 className={styles['footer-h4']}>Service</h4>
                    <ul className={styles['footer-ul']}>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">Customer service</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">Return policy</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">Shipping information</a></li>
                        <li className={styles['footer-li']}><a className={styles['link-a']} href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className={styles['footer-row-align']}>
                    <h4 className={styles['footer-h4']}>Contact Us</h4>
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