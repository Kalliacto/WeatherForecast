import React from 'react';
import s from './index.module.css';

const Form = (props) => {
    const showWeather = (e) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <form className={s.form} onSubmit={showWeather}>
            <input className={s.form__input} type='text' placeholder='Введите название города' />
            <button className={s.form__btn}>Показать</button>
        </form>
    );
};

export default Form;
