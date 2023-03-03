import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Header() {

    function openUser() {
        let el = document.getElementById("myUsernav");
        el.style.height === "" ? el.style.height = "22%" : el.style.height = "";//if not logged - 7%
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "280px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    
    return (
        <header>
            <div className={styles['logo']}>
                <h1 onClick={() => openNav()} className={styles['pointer']}><FontAwesomeIcon icon={faBars} /></h1>
                <h1 className={styles['active-logo']}>Project Site</h1>
                <h1 onClick={() => openUser()} className={styles['pointer']}><FontAwesomeIcon icon={faUser} /></h1>
            </div>

            <div id="myUsernav" className={styles['usernav']}>
                <li><a href="myorders.html" className={styles['side-main-a']}>Orders</a></li>
                <li><a href="checkout.html" className={styles['side-main-a']}>Checkout</a></li>
                <li><a href="login.html" className={styles['side-main-a']}>Login</a></li>
            </div>

            <div id="mySidenav" className={styles['sidenav']}>
                <a href="javascript:void(0)" className={styles['closebtn']} onClick={() => closeNav()}>&times;</a>
                <li><a href="index.html" className={styles['side-main-a']}>Home</a></li>
                <li><a href="about.html" className={styles['side-main-a']}>About</a></li>
                <li><a href="#" onclick="dropMenuOne(0)" className={styles['side-main-a']}>Products</a></li>
                <ul className={styles['more-ul']} style={{display: "none"}}>
                    <li className={styles['dropdown']}>
                        <a href="productW.html" className={styles['main-a']}>Women</a>
                    </li>
                    <li className={styles['dropdown']}>
                        <a href="productM.html" className={styles['main-a']}>Men</a>
                    </li>
                </ul>
                <li><a href="contact.html" className={styles['side-main-a']}>Contact</a></li>
            </div>
        </header>
    );
}