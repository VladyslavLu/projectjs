"use strict";

// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const person = `5`;

// const bool = false;

// // console.log(something); 

// let und;
// console.log(und);

// const obj = {
//     name:"John",
//     age:25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// alert(`Hello`);

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);  

// const answers = [];

// answers[0] = prompt(`Как ваше имя`, ``);
// answers[1] = prompt(`Как ваша фамилия`, ``);
// answers[2] = prompt(`Сколько вам лет`, ``);

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/`);

// const user = "Vlad";

// alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2+ 2 * 2 !== '6');

// // && 
// // ||

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);

// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;
//  if (num < 49 ) {
//      console.log('Errore');
//  } else if (num > 100) {
//      console.log('Много');
//  } else {
//      console.log('Ok!');
//  }

//  (num === 50) ? console.log('Ok!') : console.log('Errore');
//  const num = '50';

//  switch (num) {
//      case '49':
//          console.log('Неверно');
//          break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз!');
//         break;
// }
 
// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }




// Objects: Arrays

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;



// Массивы и псевдомассивы:

// Сортировка по порядку

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for( let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));



// Передача по ссылке или по значению, Spread оператор

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; 

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adasdasda';
// console.log(newArray);
// console.log(oldArray); 

// const video = ['youtube', 'vimeo', 'rutube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};



// Основы Объектно-ориентированного программирования, прототипно-ориентированнное наследие

// let str = 'some';
// let strObj = new String();

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);
// // const john = {
// //     health: 100
// // };

// // Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
// john.sayHello();




// Динамическая типизация в JS 


// To String 

// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2)
// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// To Number 

// 1)
// console.log(typeof(Number('4')));

// 2)
// console.log(typeof(+'5'));

// 3)
// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('Hello', '');

// To boolean 

// 0, '', null, undefined, NaN;

// 1)
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// } 

// 2)
// console.log(typeof(Boolean('4')));

// 3)
// console.log(typeof(!!'44444'));

