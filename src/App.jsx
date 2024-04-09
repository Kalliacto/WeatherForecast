import { useState } from 'react';
import './App.css';
import Header from './components/header';
import WeatherCard from './components/weatherCard';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    return (
        <div className='App'>
            <Header city={city} setCity={setCity} setWeather={setWeather} />
            <WeatherCard weather={weather} searchCity={city} />
        </div>
    );
}

export default App;
