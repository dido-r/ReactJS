import { Link, useNavigate } from 'react-router-dom';
import styles from './style/Login.module.css';

export function Register({setUser}) {
    const navigate = useNavigate();

    const  onRegisterSubmit = async (e) => {
        e.preventDefault();
        let form = new FormData(e.target);
        let { firstName, lastName, username, email, password, repass } = Object.fromEntries(form);

        if (password !== repass) {

            alert("Passwords do not match!");
            return;
        }

        let obj = {

            email,
            firstName,
            lastName,
            username,
            password
        }

        let res = await fetch('https://parseapi.back4app.com/users', {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU",
                "X-Parse-Revocable-Session": "1",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        let data = await res.json();

        fetch('https://parseapi.back4app.com/classes/Baskets', {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({items: [], userId: data.objectId})
        })
        .then(x => x.json())
        .then(x => localStorage.setItem("basketId", Object.assign(...x.results).objectId));

        localStorage.setItem('userId', data.objectId);
        localStorage.setItem('userLastName', firstName);
        localStorage.setItem('userFirstName', lastName);
        setUser(true)
        navigate('/');
    }

    return (
        <div className={styles['login']} onSubmit={(e) => onRegisterSubmit(e)}>
            <h2 className={styles['login-head']}>Register</h2>
            <form className={styles['login-form']}>
                <div><input className={styles['login-input']} type="text" placeholder="firstName" name="firstName" required="required" /></div>
                <div><input className={styles['login-input']} type="text" placeholder="lastName" name="lastName" required="required" /></div>
                <div><input className={styles['login-input']} type="text" placeholder="username" name="username" required="required" /></div>
                <div><input className={styles['login-input']} type="email" placeholder="email" name="email" required="required" /></div>
                <div><input className={styles['login-input']} type="text" placeholder="password" name="password" required="required" /></div>
                <div><input className={styles['login-input']} type="text" placeholder="repass" name="repass" required="required" /></div>
                <div><button type="submit" className={styles['login-btn']}>Sign up</button></div>
            </form>
            <footer className={styles['small-text']}>Already have an account? <Link className={styles['login-a']} to="/login">Sign in here</Link></footer>
        </div>
    );
}