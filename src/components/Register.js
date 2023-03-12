import { Link } from 'react-router-dom';
import styles from './style/Login.module.css';

export function Register() {

    return (
        <div className={styles['login']}>
            <h2 className={styles['login-head']}>Register</h2>
            <form className={styles['login-form']}>
                <div><input className={styles['login-input']} type="text" placeholder="first name" required="required" /></div>
                <div><input className={styles['login-input']} type="text" placeholder="last name" required="required" /></div>
                <div><input className={styles['login-input']} type="email" placeholder="email" required="required" /></div>
                <div><input className={styles['login-input']} type="password" placeholder="password" required="required" /></div>
                <div><input className={styles['login-input']} type="password" placeholder="repeat password" required="required" /></div>
                <div><button type="submit" className={styles['login-btn']}>Sign in</button></div>
            </form>
            <footer className={styles['small-text']}>Already have an account? <Link className={styles['login-a']} to="/login">Sign in here</Link></footer>
        </div>
    );
}