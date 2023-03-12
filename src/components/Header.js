import styles from './style/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {

    const [navView, setNavView] = useState("0");
    const [userNav, setUserNav] = useState("");
    const [dropMenu, setDropMenu] = useState(false);

    function onNavClick() {
        setNavView(navView === "0" ? "280px" : "0");
    }

    function onUserClick() {
        setUserNav(userNav === "" ? "22%" : ""); // diff for logged in and guest
    }

    function dropMenuOne() {
        setDropMenu(!dropMenu);
    }

    function onRedirect() {
        setNavView("0");
        setUserNav("");
        setDropMenu(false);
    }

    return (
        <header>
            <div className={styles['logo']}>
                <h1 onClick={onNavClick} className={styles['pointer']}><FontAwesomeIcon icon={faBars} /></h1>
                <h1 className={styles['active-logo']}>Project Site</h1>
                <h1 onClick={onUserClick} className={styles['pointer']}><FontAwesomeIcon icon={faUser} /></h1>
            </div>

            <div id="myUsernav" className={styles['usernav']} style={{ height: userNav }}>
                <li><Link to="/orders" className={styles['side-main-a']} onClick={onRedirect}>Orders</Link></li>
                <li><Link to="/checkout" className={styles['side-main-a']} onClick={onRedirect}>Checkout</Link></li>
                <li><Link to="/login" className={styles['side-main-a']} onClick={onRedirect}>Login</Link></li>
            </div>

            <div id="mySidenav" className={styles['sidenav']} style={{ width: navView }}>
                <p className={styles['closebtn']} onClick={onNavClick}>&times;</p>
                <li><Link to="/" className={styles['side-main-a']} onClick={onRedirect}>Home</Link></li>
                <li><Link to="/about" className={styles['side-main-a']} onClick={onRedirect}>About</Link></li>
                <li><Link onClick={() => dropMenuOne()} className={styles['side-main-a']}>Products</Link></li>
                {dropMenu && (<ul>
                    <li className={styles['dropdown']}>
                        <Link to="/catalog/women" className={styles['main-a']} onClick={onRedirect}>Women</Link>
                    </li>
                    <li className={styles['dropdown']}>
                        <Link to="/catalog/men" className={styles['main-a']} onClick={onRedirect}>Men</Link>
                    </li>
                </ul>)}

                <li><Link to="/contacts" className={styles['side-main-a']} onClick={onRedirect}>Contact</Link></li>
            </div>
        </header>
    );
}