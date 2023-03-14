import { Link, useNavigate } from 'react-router-dom';
import styles from './style/Login.module.css';

export function Login({setUser}) {

    const navigate = useNavigate();

    const onLoginSubmit = async (e) => {

        e.preventDefault();
        let form = new FormData(e.target);
        let { username, password } = Object.fromEntries(form);

        let res = await fetch(`https://parseapi.back4app.com/login?username=${username}&password=${password}`, {
            headers: {
                "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU",
                "X-Parse-Revocable-Session": "1",
            }
        });

        let data = await res.json();
        localStorage.setItem('userId', data.objectId);
        localStorage.setItem('userLastName', data.lastName);
        localStorage.setItem('userFirstName', data.firstName);
        setUser(true);
        navigate(-1);
    }

    return (
        <div className={styles['login']}>
            <h2 className={styles['login-head']}>Login</h2>
            <form className={styles['login-form']} onSubmit={(e) => onLoginSubmit(e)}>
                <div><input className={styles['login-input']} type="text" placeholder="username" name="username" required="required" /></div>
                <div><input className={styles['login-input']} type="password"placeholder="password" name="password" required="required" /></div>
                <div><button type="submit" className={styles['login-btn']}>Sign in</button></div>
            </form>
            <footer className={styles['small-text']}>Don't have an account? <Link className={styles['login-a']} to="/register">Sign up here</Link></footer>
        </div>
    );
}