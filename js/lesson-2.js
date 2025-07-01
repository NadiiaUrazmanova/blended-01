// Завдання 1:
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// console.log(styles);
// const i = styles.indexOf('blues');
// if (i !== -1) {
//     styles.splice(i + 1, 1, 'classic');
// }
// else {console.log ('not found');
// }
// console.log(styles);


// function logItems(array) {
//     for (let i = 0; i <= array.length - 1; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }
// logItems(styles);


// Завдання 2:
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const name = prompt("Enter your name:");
//     if (array.includes(name)) {
//         alert(`Welcome, ${name}!`);
//     }
//     else {
//         alert("User not found");
//     }
//     return name;
// }
// checkLogin(logins);







// Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//     let sum = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === 'number') {
//             sum += arg;
//             count++;
//         }
//     }
//         return sum / count;
// }
// console.log(caclculateAverage(1, 3, 5, 'hello', 10));







// Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// // і пушитиме їх в новий масив.


// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // // уточнення: складати необхідно перше число з другим, потім друге - з третім,
// // // третє - з четвертим і так до кінця.
// // // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function calculateSum(numbers) {
//     const newArray = [];
//     for (let i = 0; i < numbers.length - 1; i += 1){
//         newArray.push(numbers[i] + numbers[i + 1]);
//     }
//     return newArray;
// }
// console.log(calculateSum(someArr))




// Завдання 5:

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(array) {
//     if (!Array.isArray(array)) {
//         return 'Sorry, it is not an array!';
//     }
//     else {
//         let min = array[0];
//         for (const num of array) {
//             if (num < min) {
//                 min = num;
//             }
//     }
//         return min;
//     }
// }
// console.log (findSmallestNumber(numbers));





// Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//     const array = string.split(' ');
//     let longestWord = array[0];
//     for (word of array) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }





// Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;
// for (const key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum); // 1730




// Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     exist() {
//         return (this.a !== undefined && this.b !== undefined);
//     },
//     sum() {
//         if (this.exist()) {
//             return this.a + this.b;
//         }
//         else return 'No such properties';
//     },
//     mul() {
//         if (this.exist()) {
//             return this.a * this.b;
//         }
//         else return 'No such properties';
//     }
// }

// calculator.read(15, 10);
// console.log(calculator.sum()); // 15
// console.log(calculator.mul()); // 50


// Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];


// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             totalPrice += fruit.price * fruit.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log (calcTotalPrice(fruits, "Банан")); 
// console.log (calcTotalPrice(fruits, "Яблуко"));    