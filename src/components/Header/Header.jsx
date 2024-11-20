import React from 'react'
import MyButton from '../Button/Button'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = ({ isLoggedIn, onLogin, onLogout }) => {

    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='header-wrapper'>
                <h3 className='logo'>logo</h3>
                <div className='contacts' onClick={() => navigate('/contacts')}>Контакты</div>
                {isLoggedIn
                    ? <MyButton className={"header-btn"} text={"Выйти"} onClick={onLogout} />
                    : <MyButton className={"header-btn"} text={"Войти"} onClick={isLoggedIn ? onLogout : onLogin} />
                }

            </div>
            <div className='underline'></div>
        </div>

    )
}

export default Header