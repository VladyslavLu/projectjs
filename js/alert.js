"Use strict";

// let message = 'Hello!';

// alert( message );

// let user = 'John';
// let age = 25;
// let message = 'Hello';

// let message;

// message = 'Hello';

// message = 'World';

// alert( message );

// let admin, name;

// name = 'Джон';

// admin = name;

// alert( admin );

// let ourPlanetName = 'Земля';

// let currentUserName = 'Джон';

// let name = prompt('Как тебя зовут?', '');

// alert(name);



// let value = prompt('Какое «официальное» название JavaScript?', '');

// if (value == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript!');
// }



// let value = prompt('Введите число', '');

// if (value > 0 ) {
//     alert( 1 );
// } else if (value < 0) {
//     alert( -1 );
// } else {
//     alert( 0 );
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' :
//     '';


// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log( i );
//     }
//   }


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

//   let i = 0;
//   while (i < 3) {
//       console.log( `number ${i}!` );
//       i++;
//   }


// let num;

// do {num = promt('Введите число больше 100', 0);
// } while (num <= 100 && num);




// Функции


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }
    
// showFirstMessage("Hello World!");
// console.log(num);



// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function calc(a, b) {
//     return (a + b);
// }


// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger =function() {
//     console.log("Hello!");
// };

// logger();


// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };


// Методы и свойства строк и чисел

// const str = "teSt";
// const arr = [1, 2, 4];

// console.log(str.toUpperCase()); меняет на заглавные
// console.log(str.toLowerCase()); меняет на строчные
// console.log(str);

// const fruit = "Some fruit"; 

// console.log(fruit.indexOf("q")); ищет внутри строки 

// const logg = "Hello world";

// console.log(logg.slice(6, 11)); после какого начать, каким закончить включительно

// console.log(logg.substring(6, 11)); аналогично предыдущему

// console.log(logg.substr(6, 5)); С какого знака, количество символов

// const num = 12.2;
// console.log(Math.round(num)); округление

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test)); возвращает число с точкой 


// let age = 11;
// let accompanied = true;

// if (age >= 12 || (age <= 12 && accompanied )) {
//     console.log(true);
// }


// Добавление элементов в массив

// let animals = [];
// animals.push('Кот');
// animals.push('Пёс');
// animals.push('Лама'); 


// Добавление элементов в начало массива

// animals.unshift('элемент');


// Убрать из массива последний элемент

// animals.pop


// Убрать элемент из начала массива 

// animals.shift



// Методы unshift и shift удаляют и добавляют элементы из начала массива, а push и pop с конца


// Объединение массивов

// firstArray.contact(otherArray)



    



