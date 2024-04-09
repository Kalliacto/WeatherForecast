import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import DetailedСard from '../detailedСard/index';
import cn from 'classnames';
import CardsList from '../cardsList';

const WeatherCard = ({ weather, searchCity }) => {
    const [currentDay, setCurrentDay] = useState({});
    let city;

    if (weather?.location) {
        city = weather.location.region === searchCity ? weather.location.region : weather.location.name;
    }

    useEffect(() => {
        if (weather?.location) {
            setCurrentDay(weather.forecast.forecastday[0]);
        }
        return;
    }, [weather]);

    console.log(currentDay);

    return (
        // TODO: При первом запуске и в случае неверного города или его отсутствия
        <>
            {weather?.location && (
                <>
                    <div className={s.card}>
                        <div className={cn('container', s.card__wrap)}>
                            <DetailedСard weather={currentDay} city={city} />
                            <CardsList weather={weather} setCurrentDay={setCurrentDay} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
// {/* // TODO: Перевод текста */}

export default WeatherCard;
