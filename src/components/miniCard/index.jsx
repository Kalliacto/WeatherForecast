import React from 'react';
import s from './index.module.css';

const MiniCard = ({ el, setCurrentDay }) => {
    return (
        <li className={s.card} onClick={() => setCurrentDay(el)}>
            <p>{el.date}</p>
            <img
                src={`//cdn.weatherapi.com/weather/128x128/${el.day?.condition?.icon.slice(
                    el.day.condition?.icon.lastIndexOf('day/')
                )}`}
                alt=''
                className={s.card__img}
            />
            <p className={s.card__text}>{el.day.condition?.text}</p>
            <p className={s.card__temp}>
                {Math.round(el.day.avgtemp_c)}&nbsp;<sup>&#176;c</sup>
            </p>
        </li>
    );
};

export default MiniCard;
