"use strict";

const age = +prompt("Вік?", '');
const message = (age <= 11) ? 'Ви дитина':
(age <= 17) ? 'Ви підліток':
(age <= 59) ? 'Ви дорослий':
(age >= 60) ? 'Ви пенсіонер':
'Ви не ввели вік';
alert(message);

/* const num = +prompt("Введіть число від 0 до 9", '');
const message = (num == 1) ? '!':
(num == 2) ? '@' :
(num == 3) ? '#' :
(num == 4) ? '$' :
(num == 5) ? '%' :
(num == 6) ? '^' :
(num == 7) ? '&' :
(num == 8) ? '*' :
(num == 9) ? '(' :
'Ви не ввели число';
alert(message); */

/* const firstNum = +prompt("Введіть початок діапазону", '');
const secondNum = +prompt("Введіть кінець діапазону", '');
const sum = 0;

while (a <= n) {
	sum += a;
	a++;
}
    alert(sum); */

/* const firstNum = +prompt("Введіть перше число", "");
const secondNum = +prompt("Введіть друге число", "");

while (a != n)
	if (a > n) {
		a = a - n;
	} else if ((n = n - a));

alert(firstNum); */

/* const num = +prompt("Введіть будь-яке число", "");
const gsd = 1;

for (; n <= num; n++) {
	let a = num % n;
	if (a == 0) {
		console.log(gsd);
	} 
} */

/* const result = prompt("Введіть ваш вираз", '');
let direct = "";
let reversed = "";

for (let ch of result.toLowerCase()) {
	if(ch.toLowerCase() !== ch.toUpperCase()) {
		direct = `${direct}${ch}`;
		reversed = `${ch}${reversed}`;
	}
}
if (reversed !== direct) {
	alert("Даний вираз не є паліндромом")
}
else {
	alert("Даний вираз є паліндромом")
} */

/* const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хочеш побачити наступний день?`)) {
	currDay = (currDay + 1) % days.length;
} */

/* const buy = +prompt("Введіть суму вашої покупки", "");
let discountedBuy;

if (buy <= 199) {
	alert("Знижка не застосовується");
} else if (buy >= 200 && buy <= 299) {
	discountedBuy = buy - (buy / 100) * 3;
	alert(discountedBuy);
} else if (buy >= 300 && buy <= 499) {
	discountedBuy = buy - (buy / 100) * 5;
	alert(discountedBuy);
} else if (buy >= 500) {
	discountedBuy = buy - (buy / 100) * 7;
	alert(discountedBuy);
} */
