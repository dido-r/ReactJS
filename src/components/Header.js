import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser  } from '@fortawesome/free-solid-svg-icons'
import { faBars  } from '@fortawesome/free-solid-svg-icons'

export function Header() {

    // function openUser() {
    //     let el = document.getElementById("myUsernav");
    //     el.style.height === "" ? el.style.height = "22%" : el.style.height = "";//if not logged - 7%
    // }
    
    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "280px";
    // }
    //onClick={() => openNav()}
    //onClick={() => openUser()}

    return (
        <header>
            <div className={styles['logo']}>
            <h1 className={styles['pointer']}><FontAwesomeIcon icon={faBars} /></h1>
            <h1 className={styles['active-logo']}>Project Site</h1>
            <h1 className={styles['pointer']}><FontAwesomeIcon icon={faUser} /></h1>
            </div>
        </header>
    );
}