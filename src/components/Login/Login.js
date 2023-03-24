import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { get } from '../../services/api';
import { useForm } from '../../hooks/useForm';

export function Login({ setUser, setBasket }) {

    const {values, onChangeHandler} = useForm({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const onLoginSubmit = async (e) => {

        e.preventDefault();
        const data = await get(`login?username=${values.username}&password=${values.password}`);
        const response = await get(`classes/Baskets?where=%7B%20%22userId%22%3A%20%22${data.objectId}%22%20%7D`);
        setBasket(Object.assign(...response.results).items)
        localStorage.setItem("basketId", Object.assign(...response.results).objectId)
        localStorage.setItem('userId', data.objectId);
        localStorage.setItem('userLastName', data.lastName);
        localStorage.setItem('userFirstName', data.firstName);
        setUser(true);
        navigate(-1);
    }

    return (
        <div className={styles['login']}>
            <h2>Login</h2>
            <form onSubmit={(e) => onLoginSubmit(e)}>
                <div><input type="text" placeholder="username" value={values.username} onChange={(e) => onChangeHandler(e)} name="username" required="required" /></div>
                <div><input type="password" placeholder="password" value={values.password} onChange={(e) => onChangeHandler(e)} name="password" required="required" /></div>
                <div><button type="submit">Sign in</button></div>
            </form>
            <footer>Don't have an account? <Link className={styles['login-a']} to="/register">Sign up here</Link></footer>
        </div>
    );
}