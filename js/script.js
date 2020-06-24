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

