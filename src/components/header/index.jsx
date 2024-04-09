import React from 'react';
import s from './index.module.css';
import Form from '../form';

const Header = ({ city, setCity, setWeather }) => {
    return (
        <header className={s.header}>
            <div className='container'>
                <h1 className={s.header__title}>Прогноз погоды</h1>
                <Form city={city} setCity={setCity} setWeather={setWeather} />
            </div>
        </header>
    );
};

export default Header;
