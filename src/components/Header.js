import styles from './style/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

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
    
    return (
        <header>
            <div className={styles['logo']}>
                <h1 onClick={onNavClick} className={styles['pointer']}><FontAwesomeIcon icon={faBars} /></h1>
                <h1 className={styles['active-logo']}>Project Site</h1>
                <h1 onClick={onUserClick} className={styles['pointer']}><FontAwesomeIcon icon={faUser} /></h1>
            </div>

            <div id="myUsernav" className={styles['usernav']} style={{height: userNav}}>
                <li><a href="#" className={styles['side-main-a']}>Orders</a></li>
                <li><a href="#" className={styles['side-main-a']}>Checkout</a></li>
                <li><a href="#" className={styles['side-main-a']}>Login</a></li>
            </div>

            <div id="mySidenav" className={styles['sidenav']} style={{width: navView}}>
                <a href="#" className={styles['closebtn']} onClick={onNavClick}>&times;</a>
                <li><a href="#" className={styles['side-main-a']}>Home</a></li>
                <li><a href="#" className={styles['side-main-a']}>About</a></li>
                <li><a href="#" onClick={() => dropMenuOne()} className={styles['side-main-a']}>Products</a></li>
                {dropMenu && (<ul>
                    <li className={styles['dropdown']}>
                        <a href="#" className={styles['main-a']}>Women</a>
                    </li>
                    <li className={styles['dropdown']}>
                        <a href="#" className={styles['main-a']}>Men</a>
                    </li>
                </ul>)}
            
                <li><a href="#" className={styles['side-main-a']}>Contact</a></li>
            </div>
        </header>
    );
}