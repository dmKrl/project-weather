import { showCard, showError, removePrevCard, getWeather } from "./module.js";
import conditions from "./conditions.js";
// Элементы на странице

console.log(conditions);

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

        // По номеру кода выбираем русский язык 
        console.log(data.current.condition.code);
        const infoLang = conditions.find((element) => element.code === data.current.condition.code);

        // Реализация своих иконок
        const filePath = './pict/' + (data.current.is_day ? 'day' : 'night') + '/';
        const fileName = (data.current.is_day ? infoLang.day : infoLang.night) + '.png';
        const imgPath = filePath + fileName;
        console.log('filePath', filePath + fileName);
        console.log(fileName)


 
        //Отображаем полученные данные в карточке
        //Разметка для карточки 
        const weatherData = {
            name: data.location.name,
            country: data.location.country,
            temp_c: data.current.temp_c,
            condition: data.current.is_day
            ? infoLang.languages[23]['day_text']
            : infoLang.languages[23]['night_text'],
            imgPath,
        }

        showCard(weatherData);
    }
}