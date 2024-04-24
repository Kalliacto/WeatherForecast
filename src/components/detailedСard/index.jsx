import React from 'react';
import s from './index.module.css';

const DetailedСard = ({ weather, city }) => {
    return (
        <div className={s.card__wrap}>
            <div className={s.cards}>
                <h3 className={s.card__city}>{city}</h3>
                <div className={s.card__details}>
                    <p className={s.card__details_temp}>
                        {Math.round(weather.day?.avgtemp_c)}&nbsp;<sup>℃</sup>
                    </p>
                    <img
                        src={`//cdn.weatherapi.com/weather/128x128/${weather.day?.condition?.icon.slice(
                            weather.day.condition?.icon.lastIndexOf('day/')
                        )}`}
                        className={s.card__details_img}
                    ></img>
                    <p className={s.card__details_info}>{weather.day?.condition.text}</p>
                </div>
            </div>
            {!!weather.astro && (
                <div className={s.card__details_more}>
                    <p>Влажность: {weather.day?.avghumidity} %</p>
                    <p>Вероятность дождя: {weather.day.daily_chance_of_rain} % </p>
                    <p>Скорость ветра: {weather.day.maxwind_kph} км/ч</p>
                    <div className={s.astro}>
                        <div className={s.astro_sun}>
                            <p>Восход: {weather.astro.sunrise} </p>
                            <p>Заход: {weather.astro.sunset} </p>
                        </div>
                        <div className={s.astro_moon}>
                            <p>Восход: {weather.astro.moonrise} </p>
                            <p>Заход: {weather.astro.moonset}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailedСard;
