import styles from './style/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

export function Footer() {

    return (
        <footer className={styles['main-footer']}>
            <div className={styles['footer-info']}>
                <div className={styles['footer-row-align']}>
                    <h4 className={styles['footer-h4']}>Useful Links</h4>
                    <ul className={styles['footer-ul']}>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/">Home</Link></li>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/about">About us</Link></li>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/lorem">Terms of service</Link></li>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/lorem">Privacy policy</Link></li>
                    </ul>
                </div>

                <div className={styles['footer-row-align']}>
                    <h4 className={styles['footer-h4']}>Service</h4>
                    <ul className={styles['footer-ul']}>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/contacts">Customer service</Link></li>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/lorem">Return policy</Link></li>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/lorem">Shipping information</Link></li>
                        <li className={styles['footer-li']}><Link className={styles['link-a']} to="/faqs">FAQ</Link></li>
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