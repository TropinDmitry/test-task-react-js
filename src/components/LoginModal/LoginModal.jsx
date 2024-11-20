import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import usersData from '../../users/users.json'
import './LoginModal.css'
import { useNavigate } from 'react-router-dom'

const LoginModal = ({ setIsLoggedIn, setShowLogin }) => {
    const [formValues, setFormValues] = useState({login: "", password: ""});
    const [formError, setFormError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const dialogRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        dialogRef.current.showModal();
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        setIsSubmit(true)
    }

    const validate = (values) => {
        let error = '';
        const user = usersData.users.find(user => 
            user.login === values.login && user.password === values.password);

        if (values.password.length < 8) {
            return error = "Пароль должен быть не менее 8 символов";
        }
        if (!user) {
            return error = "Неверный логин или пароль";
        }
        return error;
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const user = usersData.users.find(user => 
            user.login === formValues.login && user.password === formValues.password);

        localStorage.setItem('loggedinUser', JSON.stringify(user));
        setShowLogin(false);
        setIsLoggedIn(true);
        dialogRef.current.close();

        navigate('/profile');
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormError('');
        setFormValues({
            ...formValues, 
            [name]: value
        });
    }

    const onClose = (e) => {
        e.preventDefault();
        setShowLogin(false);
        dialogRef.current.close();
    }

    return (
        <dialog ref={dialogRef} className='modal-login'>
            <form className='modal-wrapper' onSubmit={handleSubmit}>
                <h2>Авторизация</h2>
                <div className='input-field'>
                    <label>Логин</label>
                    <input name='login' type='text' placeholder='Логин' value={formValues.login} onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label>Пароль</label>
                    <input name='password' type='password' placeholder='Пароль' value={formValues.password} onChange={handleChange} />
                </div>
                <p className='error-msg'>{formError}</p>
                <div className='btn-wrapper'>
                    <Button onClick={handleLogin} text={'Войти'} className={'login'} />
                    <Button onClick={onClose} text={'Закрыть'} className={'close'} />
                </div>
            </form>
        </dialog>
    )
}

export default LoginModal