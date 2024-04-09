import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import DetailedСard from '../detailedСard/index';
import cn from 'classnames';
import MiniCard from '../miniCard';

const WeatherCard = ({ weather }) => {
    const [currentDay, setCurrentDay] = useState({});

    useEffect(() => {
        if (weather?.location) {
            setCurrentDay(weather.forecast.forecastday[0]);
        }
    }, [weather]);

    return (
        // TODO: При первом запуске и в случае неверного города или его отсутствия
        <>
            {weather?.location && (
                <>
                    <div className={s.card}>
                        <div className={cn('container', s.card__wrap)}>
                            <DetailedСard weather={currentDay} city={weather.location.name} />
                            <ul className={s.cards__list}>
                                {weather.forecast.forecastday.map((el) => (
                                    <li key={el.date} onClick={() => setCurrentDay(el)}>
                                        <MiniCard el={el} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
// {/* // TODO: Перевод текста */}

export default WeatherCard;
