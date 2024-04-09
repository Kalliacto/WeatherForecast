import React from 'react';
import s from './index.module.css';
import img from '../../assets/img/sun.png';

const DetailedСard = ({ weather, city }) => {
    console.log(weather.condition?.icon);

    return (
        // TODO: При первом запуске и в случае неверного города или его отсутствия
        <>
            <h3 className={s.card__city}>{city}</h3>
            <div className={s.card__details}>
                <p className={s.card__details_temp}>
                    {weather.day?.avgtemp_c}&nbsp;<sup>&#176;c</sup>
                </p>
                <img src={img} className={s.card__details_img}></img>
                <p className={s.card__details_info}>{weather.day?.condition.text}</p>
            </div>
        </>
    );
};
// {/* // TODO: Перевод текста */}

export default DetailedСard;
