import React from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import './HomePage.css'

import heartIcon from '../../resources/heart.svg'
import medicalIcon from '../../resources/medical.svg'
import stethoscopeIcon from '../../resources/stethoscope.svg'
import { useNavigate } from 'react-router-dom'


export const HomePage = ({ isLoggedIn, onLogin, onLogout }) => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <div className='home-container'>
                <div className='columns'>
                    <div className='col1'>
                        <h1>Место для получения медицинской помощи</h1>
                        <div className='btn-wrapper'>
                            <Button className="signin" text={isLoggedIn ? 'Выйти' : 'Войти'} onClick={isLoggedIn ? onLogout : onLogin} />
                            <Button className="contacts" text={'Контакты'} onClick={() => navigate('/contacts') } />
                        </div>
                    </div>
                    <div className='col2'>

                    </div>
                </div>

                <div className='card-wrapper'>
                    <Card icon={heartIcon} header={"Онлайн-прием"} text={"Рыба текст"} />
                    <Card icon={stethoscopeIcon} header={"Экстренный случай"} text={"Рыба текст"} />
                    <Card icon={medicalIcon} header={"Лечение рака"} text={"Рыба текст"} />
                </div>
            </div>
        </div>
    )
}
