"use strict";

let driverName = prompt("Якого водія додати?", "");
const arr = [driverName];
[driverName].forEach(console.log);
console.log(driverName.includes("Bob"));

const car = {
	type: "Fiat",
	model: "500",
	year: 2018,
	averageSpeed: "60",
	fuelСapacity: "60l",
	fuelUsage: "6l / 100km",
	drivers: driverName,
};

for (let key in car) {
	console.log(key + ":" + car[key]);
}

let distance = prompt(
	"Cкільки километрів ви хочете подолати?", "");
let speed = car.averageSpeed;

let timeInWay = distance / speed;

if (timeInWay % 4 === 0) {
	console.log(timeInWay + Math.floor((timeInWay - 1) / 4));
} else {
	console.log((timeInWay + Math.floor(timeInWay / 4)).toFixed(2));
}