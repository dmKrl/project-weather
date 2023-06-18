import { showCard, showError, removePrevCard, getWeather } from "./module.js";
// Элементы на странице

const form = document.querySelector('.header__form');
const input = document.querySelector('.header__input');

    /*Для того, чтобы мы могли использовать ассинхронную функцию getWeather
    Мы должны дописать к нашей функции "form.onsubmit" - async */ 

// Слушаем отправку формы
form.onsubmit = async function (event) {
    // Отменяем отправку формы
    event.preventDefault();

    // Делаем запрос на сервер для получения погоды
    // trim - обрезает пробелы и табы в начале и в конце, 
    //берём значение из инпута
    let city = input.value.trim();

    // Получаем данные с сервера из функции getWeather, определена выше
    const data = await getWeather(city);

    //Проверяем на Ошибку
    if (data.error) {
        //Удаляем предыдущую карточку
        removePrevCard();
        //Добавляем карточку с ошибкой
        showError(data.error.message)
    
    } else {
        //Удаляем предыдущую карточку
        removePrevCard();
        //Отображаем полученные данные в карточке
        //Разметка для карточки 

        const weatherData =  {
            name: data.location.name, 
            country: data.location.country, 
            temp_c: data.current.temp_c, 
            condition: data.current.condition.text
        }
        showCard(weatherData);
    }
}