import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import MiniCard from '../miniCard';

const CardsList = ({ weather, setCurrentDay }) => {
    return (
        <>
            <ul className={s.cards__list}>
                {weather.forecast.forecastday.map((el) => (
                    <MiniCard key={el.date} setCurrentDay={setCurrentDay} el={el} />
                ))}
            </ul>
        </>
    );
};

export default CardsList;
