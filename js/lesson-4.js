// Завдання 1:

// 1 - отримай body елемент і виведи його в консоль;

const bodyElem = document.querySelector('body');
console.dir(bodyElem);

// 2 - отримай елемент id="title" і виведи його в консоль;

const titleElem = document.querySelector('#title');
console.dir(titleElem);

// 3 - отримай елемент class="list" і виведи його в консоль;

const listElem = document.querySelector('.list');
console.dir(listElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const topicsElem = document.querySelectorAll('[data-topic]');
topicsElem.forEach(topicElem => console.dir(topicElem));

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const [firstTopicElem] = topicsElem;
// console.dir(firstTopicElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastTopicElem = document.querySelector('[data-topic]').lastChild;
console.log(lastTopicElem);
console.dir(lastTopicElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const firstSibElem = titleElem.nextElementSibling;
console.dir(firstSibElem);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const allTitlesEl = document.querySelectorAll('h3');
console.dir(allTitlesEl);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

allTitlesEl.forEach(TitleEl => TitleEl.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navEl = document.querySelector('li[data-topic="navigation"]');
console.log(navEl);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navEl.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

navEl.lastElementChild.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const topicElem = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(topicElem);
console.dir(topicElem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

topicElem.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedEl = document.querySelector(".completed");
console.dir(completedEl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

completedEl.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const paragraphElem = document.createElement('p');
paragraphElem.textContent = "Об'єктна модель документа (Document Object Model)";
titleElem.after(paragraphElem);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const markup = `<li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>
`;
listElem.innerHTML += markup;


// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

listElem.insertAdjacentHTML('beforeend', markup);

// 20 - очисти список

listElem.innerHTML = "";



// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const elements = [];
const numberContainer = document.querySelector('.number-container')

for (let i = 0; i < 100; i++) {
    const randomNum = randomNumber()
    const div = document.createElement('div')
    div.classList.add('number')
    div.textContent = randomNum

    if (randomNum % 2 === 0) {
        div.classList.add('even')
    }
    else {
        div.classList.add('odd')
    }
    elements.push(div)
};

console.log(elements);

numberContainer.append(...elements);


// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const inputEl = document.querySelector('.js-username-input');
inputEl.addEventListener('input', (e) => {
    if (inputEl.value.length >= 6) {
        inputEl.classList.add('success')
        inputEl.classList.remove('error');
    }
    else {
        inputEl.classList.add('error')
        inputEl.classList.remove('success');
     }
});

inputEl.addEventListener('focus', (e) => {
    if (inputEl.value.trim() === '') {
        inputEl.style.outline = '3px solid red';
    }
    else {
        inputEl.style.outline = '3px solid green';
    }
});

inputEl.addEventListener('blur', (e) => {
    if (inputEl.value.trim() === '') {
        inputEl.style.outline = '3px solid red';
    }
    else {
        inputEl.style.outline = '3px solid lime';
    }
});





// Завдання 4:

 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
 
const boxEl = document.querySelector('.box');
const decreaseButton = document.querySelector('.js-decrease');
const increaseButton = document.querySelector('.js-increase');

decreaseButton.addEventListener('click', () => {
    boxEl.style.width = (boxEl.offsetWidth - 20) + 'px';
    boxEl.style.height = (boxEl.offsetHeight - 20) + 'px';
});

increaseButton.addEventListener('click', () => {
    boxEl.style.width = (boxEl.offsetWidth + 20) + 'px';
    boxEl.style.height = (boxEl.offsetHeight + 20) + 'px';
});

 
 
 
 
 // Завдання 5:
 
//  При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

const buttons = document.querySelectorAll('.calcButton');
const resultButton = document.getElementById('resultButton');
const resultSection = document.getElementById('resultSection');

let totalSum = 0;
const stats = {}; 

buttons.forEach(btn => {
    stats[btn.textContent] = 0;
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = Number(btn.dataset.number);
        totalSum += value; 
        stats[btn.textContent] += 1; 
    });
});

resultButton.addEventListener('click', () => {
    let statsText = `Сума: ${totalSum}<br>Статистика натискань:<br>`;
    for (const key in stats) {
        statsText += `${key}: ${stats[key]} раз(и)<br>`;
    }
    resultSection.innerHTML = statsText;
});


