import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { post } from '../../services/api';
import styles from './Register.module.css';

export function Register({ setUser }) {

    const { values, onChangeHandler } = useForm({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repass: ''
    });
    const navigate = useNavigate();

    const onRegisterSubmit = async (e) => {

        e.preventDefault();

        if (values.password !== values.repass) {

            alert("Passwords do not match!");
            return;
        }

        let obj = {

            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            password: values.password
        }

        const data = await post('users', obj);
        const response = await post('classes/Baskets', { items: [], userId: data.objectId });
        localStorage.setItem("basketId", response.objectId);
        localStorage.setItem('userId', data.objectId);
        localStorage.setItem('userLastName', values.firstName);
        localStorage.setItem('userFirstName', values.lastName);
        setUser(true)
        navigate('/');
    }

    return (
        <div className={styles['login']} onSubmit={(e) => onRegisterSubmit(e)}>
            <h2>Register</h2>
            <form>
                <div><input type="text" placeholder="firstName" name="firstName" required="required" value={values.firstName} onChange={(e) => onChangeHandler(e)} /></div>
                <div><input type="text" placeholder="lastName" name="lastName" required="required" value={values.lastName} onChange={(e) => onChangeHandler(e)} /></div>
                <div><input type="text" placeholder="username" name="username" required="required" value={values.username} onChange={(e) => onChangeHandler(e)} /></div>
                <div><input type="email" placeholder="email" name="email" required="required" value={values.email} onChange={(e) => onChangeHandler(e)} /></div>
                <div><input type="password" placeholder="password" name="password" required="required" value={values.password} onChange={(e) => onChangeHandler(e)} /></div>
                <div><input type="password" placeholder="repass" name="repass" required="required" value={values.repass} onChange={(e) => onChangeHandler(e)} /></div>
                <div><button type="submit">Sign up</button></div>
            </form>
            <footer>Already have an account? <Link className={styles['login-a']} to="/login">Sign in here</Link></footer>
        </div>
    );
}