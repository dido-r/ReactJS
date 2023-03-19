import styles from './style/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Header({ user, setUser }) {

    const [navView, setNavView] = useState("0");
    const [userNav, setUserNav] = useState("");
    const [dropMenu, setDropMenu] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const navigate = useNavigate();

    function onSearchClick() {
        setSearchBar(!searchBar);
    }

    function onSearchSubmit(e) {
        e.preventDefault();
        let form = new FormData(e.target);
        let { searchInput } = Object.fromEntries(form);
        setSearchBar(!searchBar);
        navigate('/catalog/search-' + searchInput)
    }

    function onNavClick() {
        setNavView(navView === "0" ? "280px" : "0");
    }

    function onUserClick() {
        setUserNav(userNav === "" ? "22%" : "");
    }

    function dropMenuOne() {
        setDropMenu(!dropMenu);
    }

    function onRedirect() {
        setNavView("0");
        setUserNav("");
        setDropMenu(false);
    }

    const onLogout = () => {
        onRedirect();
        localStorage.removeItem('userId');
        localStorage.removeItem('userLastName');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('basketId');
        setUser(false);
    }

    return (
        <header>
            <div className={styles['logo']}>
                <h1 onClick={onNavClick} className={styles['bar-icon']}><FontAwesomeIcon icon={faBars} /></h1>
                <h1 className={styles['active-logo']}>Project Site</h1>
                <h1 onClick={onSearchClick} className={styles['search-icon']}><FontAwesomeIcon icon={faMagnifyingGlass} /></h1>
                {user ?
                    <h1 onClick={onUserClick} className={styles['user-icon']}><FontAwesomeIcon icon={faUser} /></h1> :
                    <h1><Link to='/login' className={styles['user-icon']}><FontAwesomeIcon icon={faRightToBracket} /></Link></h1>}

            </div>


            {searchBar && <form onSubmit={(e) => onSearchSubmit(e)}><input type="text" name="searchInput" className={styles['searchnav']} /></form>}


            <div id="myUsernav" className={styles['usernav']} style={{ height: userNav }}>
                <li><Link to="/orders" className={styles['side-main-a']} onClick={onRedirect}>Orders</Link></li>
                <li><Link to="/checkout" className={styles['side-main-a']} onClick={onRedirect}>Checkout</Link></li>
                <li><Link to="/" className={styles['side-main-a']} onClick={onLogout}>Logout</Link></li>
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