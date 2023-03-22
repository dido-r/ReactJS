import { Link, useNavigate } from 'react-router-dom';
import { post } from '../../services/api';
import styles from './Register.module.css';

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

        const data = await post('users', obj);
        const response = await post('classes/Baskets', {items: [], userId: data.objectId});
        localStorage.setItem("basketId", response.objectId);
        localStorage.setItem('userId', data.objectId);
        localStorage.setItem('userLastName', firstName);
        localStorage.setItem('userFirstName', lastName);
        setUser(true)
        navigate('/');
    }

    return (
        <div className={styles['login']} onSubmit={(e) => onRegisterSubmit(e)}>
            <h2>Register</h2>
            <form>
                <div><input type="text" placeholder="firstName" name="firstName" required="required" /></div>
                <div><input type="text" placeholder="lastName" name="lastName" required="required" /></div>
                <div><input type="text" placeholder="username" name="username" required="required" /></div>
                <div><input type="email" placeholder="email" name="email" required="required" /></div>
                <div><input type="text" placeholder="password" name="password" required="required" /></div>
                <div><input type="text" placeholder="repass" name="repass" required="required" /></div>
                <div><button type="submit">Sign up</button></div>
            </form>
            <footer>Already have an account? <Link className={styles['login-a']} to="/login">Sign in here</Link></footer>
        </div>
    );
}