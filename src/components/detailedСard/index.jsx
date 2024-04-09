import React from 'react';
import s from './index.module.css';

const DetailedСard = ({ weather, city }) => {
    return (
        // TODO: При первом запуске и в случае неверного города или его отсутствия
        <>
            <h3 className={s.card__city}>{city}</h3>
            <div className={s.card__details}>
                <p className={s.card__details_temp}>
                    {Math.round(weather.day?.avgtemp_c)}&nbsp;<sup>&#176;c</sup>
                </p>
                {/*  TODO: Вынести функцию обрезки в утилы */}
                <img
                    src={`//cdn.weatherapi.com/weather/128x128/${weather.day?.condition?.icon.slice(
                        weather.day.condition?.icon.lastIndexOf('day/')
                    )}`}
                    className={s.card__details_img}
                ></img>
                <p className={s.card__details_info}>{weather.day?.condition.text}</p>
            </div>
        </>
    );
};

export default DetailedСard;
