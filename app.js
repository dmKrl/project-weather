const apiKey = '722f109f88a14ced88e132829231306'
// http://api.weatherapi.com/v1/current.json?key=722f109f88a14ced88e132829231306&q=London

// Элементы на странице

const header = document.querySelector('.header');
const form = document.querySelector('.header__form');
const input = document.querySelector('.header__input');


// Функция удаления карточки
function removePrevCard() {
    const prevCard = document.querySelector('.main');
    if (prevCard) {
        prevCard.remove();
    }
}

// Слушаем отправку формы
form.onsubmit = function (event) {
    // Отменяем отправку формы
    event.preventDefault();

    // trim - обрезает пробелы и табы в начале и в конце
    let city = input.value.trim();

    // Делаем запрос на сервер для получения погоды
    // Адрес запроса
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    // Выполняем запрос
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)

            //Проверяем на Ошибку
            if (data.error) {

                //Удаляем предыдущую карточку
                removePrevCard();

                //Добавляем карточку с ошибкой
                const html = `      
                    <main class="main">
                            <section class="card">
                                <div class="card__city">
                                    <div class="card__weather">
                                        <h2 class="card__heading">${data.error.message}</h2>
                                    </div>
                                </div>
                            </section>
                    </main>
                `;
                header.insertAdjacentHTML('afterend', html);

            
            } else {

                //Удаляем предыдущую карточку
                removePrevCard();

                //Отображаем полученные данные в карточке
                //Разметка для карточки 
                const html = `
                <main class="main">
                <section class="card">
                    <!-- Левый блок -->             
                    <div class="card__city">
                        <div class="card__weather">
                            <h2 class="card__heading">${data.location.name}<span>${data.location.country}</span></h2>
                            <p class="card__num">${data.current.temp_c}<sup>°с</sup></p>
                            <p class="card__text">${data.current.condition.text} 20° 12°</p>
                        </div>
                        <img src="./pict/sun/27.png" alt="sun with cloud" class="card__city-cloud">
                     </div>
                     <!-- Правый верхний -->
                     <div class="card__right">
                         <div class="card__index">
                             <div class="card__box-air">
                                 <div class="card__place-img">
                                     <img src="./pict/leaf 1.svg" alt="leaf" class="card__leaf"><p class="card__text-main">Индекс качества воздуха</p>
                                 </div>
                                 <p class="card__text-good">Хороший</p>
                                 <p class="card__text-main">45</p>
                             </div>
                             <div class="card__box-text">
                                 <div class="card__number">
                                     <p class="card__text-up">38.9</p>
                                     <p class="card__text-up">32.9</p>
                                     <p class="card__text-up">4.0</p>
                                     <p class="card__text-up">5.0</p>
                                     <p class="card__text-up">45.1</p>
                                     <p class="card__text-up">0.8</p>
                                 </div>
                                 <div class="card__number">
                                     <p class="card__text-down">PM2.5</p>
                                     <p class="card__text-down">PM10</p>
                                     <p class="card__text-down">SO2</p>
                                     <p class="card__text-down">NO2</p>
                                     <p class="card__text-down">O3</p>
                                     <p class="card__text-down">CO</p>
                                 </div>
                             </div>
                         </div>
                         
                         <!-- Правый нижний -->
                         <div class="card__week">
                             <div>
                                 <p></p>
                                 <img src="" alt="">
                                 <p></p>
                             </div>
                             <div>
                                 <p></p>
                                 <img src="" alt="">
                                 <p></p>
                             </div>
                             <div>
                                 <p></p>
                                 <img src="" alt="">
                                 <p></p>
                             </div>
                             <div>
                                 <p></p>
                                 <img src="" alt="">
                                 <p></p>
                             </div>
                             <div>
                                 <p></p>
                                 <img src="" alt="">
                                 <p></p>
                             </div>
                         </div>
                     </div>
         
                 </section>
             </main> `;

            // Отображаем карточку на странице
            header.insertAdjacentHTML('afterend', html);
            }
        })

}









// Получение погоды на 7 дней 
// http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7

// Прогноз погоды на 7 дней
// form.onsubmit = function (event) {
//     event.preventDefault();

//     let city = input.value.trim();

//     const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

//     fetch(url) 
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
        
// })
// }

// // Тест в консоли вывода данных api
// function fetchAsk() {
//     fetch(query).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// fetchAsk();
