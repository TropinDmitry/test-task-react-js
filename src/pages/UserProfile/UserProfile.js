import React from 'react'
import MyButton from '../../components/Button/Button'
import './UserProfile.css'
import { useNavigate } from 'react-router-dom';

export const UserProfile = ({ isLoggedIn, onLogin, onLogout }) => {

    const username = JSON.parse(localStorage.getItem('loggedinUser')).name;
    const navigate = useNavigate();

    return (
        <div className='user-profile'>
            <div className='user-container'>
                <div className='columns'>
                    <div className='col1'>
                        <h1>Привет, {username}</h1>
                        <div className='btn-wrapper'>
                            <MyButton className="signin" text={'Выйти из аккаунта'} onClick={isLoggedIn ? onLogout : onLogin} />
                            <MyButton className="contacts" text={'Перейти в контакты'} onClick={() => navigate('/contacts') } />
                        </div>
                    </div>
                    <div className='col2'>

                    </div>
                </div>
            </div>
        </div>
    )
}
