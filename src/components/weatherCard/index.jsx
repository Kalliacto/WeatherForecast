import React from 'react';
import s from './index.module.css';
import cn from 'classnames';
import img from '../../assets/img/sun.png';

const WeatherCard = () => {
    return (
        <div className={s.card}>
            <div className={cn('container', s.card__wrap)}>
                <h3 className={s.card__city}>Card city</h3>
                <div className={s.card__details}>
                    <p className={s.card__details_temp}>
                        11&nbsp;<sup>&#176;c</sup>
                    </p>
                    <img src={img} className={s.card__details_img}></img>
                    <p className={s.card__details_info}>Oblachno</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
