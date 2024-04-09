import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import { getInfo } from '../../utils/api';

const Form = ({ city, setCity, setWeather }) => {
    const [localCity, setLocalCity] = useState('');

    useEffect(() => {
        if (city) {
            getInfo(localCity.trim()).then((data) => setWeather(data));
        }
        return;
    }, [city]);

    const showWeather = (e) => {
        e.preventDefault();
        setCity(localCity.trim());
    };

    return (
        <form className={s.form} onSubmit={showWeather}>
            <input
                value={localCity}
                onChange={(e) => setLocalCity(e.target.value)}
                className={s.form__input}
                type='text'
                placeholder='Введите название города'
            />
            <button className={s.form__btn}>Показать</button>
        </form>
    );
};

export default Form;
