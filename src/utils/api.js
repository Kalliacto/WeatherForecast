const API_KEY = '1db42b67f5044db88df131321240804';

export const getInfo = async (city) => {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=ru`
        );
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            switch (data.error.code) {
                case 1002:
                    throw new Error('Ошибка запроса: ключ API не предоставляется.');
                    break;
                case 1006:
                    throw new Error('Ошибка запроса: местоположение, соответствующее параметру не найдено');
                    break;
                case 2006:
                    throw new Error('Ошибка запроса: Предоставленный ключ API недействителен');
                    break;
                case 9999:
                    throw new Error('Ошибка запроса: Внутренняя ошибка приложения.');
                    break;
                default:
                    throw new Error('Ошибка запроса: непредвиденная ошибка');
                    break;
            }
        }
    } catch (error) {
        alert(error);
    }
};
