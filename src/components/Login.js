import { Link } from 'react-router-dom';
import styles from './style/Login.module.css';

export function Login() {

    return (
        <div className={styles['login']}>
            <h2 className={styles['login-head']}>Login</h2>
            <form className={styles['login-form']}>
                <div><input className={styles['login-input']} type="email" placeholder="username" required="required" /></div>
                <div><input className={styles['login-input']} type="password"placeholder="password" required="required" /></div>
                <div><button type="submit" className={styles['login-btn']}>Sign in</button></div>
            </form>
            <footer className={styles['small-text']}>Don't have an account? <Link className={styles['login-a']} to="/register">Sign up here</Link></footer>
        </div>
    );
}