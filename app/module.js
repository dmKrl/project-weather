const apiKey = '722f109f88a14ced88e132829231306'
const header = document.querySelector('.header');

//Отображаем полученные данные в карточке
//Разметка для карточки 
function showCard( {name, country, temp_c, condition} ) {

    const html = `
    <main class="main">
    <section class="card">
        <!-- Левый блок -->             
        <div class="card__city">
            <div class="card__weather">
                <h2 class="card__heading">${name}<span>${country}</span></h2>
                <p class="card__num">${temp_c}<sup>°с</sup></p>
                <p class="card__text">${condition} ${temp_c}° 12°</p>
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
             <div class="card__chapter">
                 <p class="card__day">пн</p>
                 <img src="./pict/cloud/7.png" alt="" class="card__day-icon">
                 <p class="card__temp">20° 12°</p>
             </div>
             <div class="card__chapter">
                 <p class="card__day">вт</p>
                 <img src="./pict/cloud/22.png" alt="" class="card__day-icon">
                 <p class="card__temp">20° 12°</p>
             </div>
             <div class="card__chapter">
                 <p class="card__day">ср</p>
                 <img src="./pict/cloud/23.png" alt="" class="card__day-icon">
                 <p class="card__temp">20° 12°</p>
             </div>
             <div class="card__chapter">
                 <p class="card__day">чт</p>
                 <img src="./pict/rain/39.png" alt="" class="card__day-icon">
                 <p class="card__temp">20° 12°</p>
             </div>
             <div class="card__chapter">
                 <p class="card__day">пт</p>
                 <img src="./pict/cloud/29.png" alt="" class="card__day-icon">
                 <p class="card__temp">20° 12°</p>
             </div>
             <div class="card__chapter">
                 <p class="card__day">сб</p>
                 <img src="./pict/sun/27.png" alt="" class="card__day-icon">
                 <p class="card__temp">20° 12°</p>
             </div>
         </div>
     </div>

     </section>
 </main> `;

// Отображаем карточку на странице
header.insertAdjacentHTML('afterend', html);
}


// Функция удаления карточки
function removePrevCard() {
    const prevCard = document.querySelector('.main');

    if (prevCard) {
        prevCard.remove();
    }
}

// Функция отображения карточки с ошибкой
function showError(errorMessage) {
    const html = `      
        <main class="main">
        <section class="card">
            <div class="card__city">
                <div class="card__weather">
                    <h2 class="card__heading">${errorMessage}</h2>
                </div>
            </div>
        </section>
        </main>`;

    header.insertAdjacentHTML('afterend', html);
}

// Асинхронная функция получения данных с API 
async function getWeather(city) {
    
    // Адрес запроса
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const urlWeek = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

    const response = await fetch(url);
    const responseWeek = await fetch(urlWeek);

    const data = await response.json();
    const dataWeek = await responseWeek.json();


    console.log(data)
    console.log(dataWeek)
    return data;
}

export { showCard, showError, removePrevCard, getWeather};


// // Тест в консоли вывода данных api
// function fetchAsk() {
//     fetch(query)
//       .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// fetchAsk();