"use strict";

const car = {
	type: "Fiat",
	model: "500",
	year: 2018,
	averageSpeed: "60",
	fuelСapacity: "60l",
	fuelUsage: "6",
	drivers: ["Bob"],
};

car.drivers.push("Glen");
car.drivers.push("John");
console.log(car.drivers.includes("Emily")) //false;

for (let key in car) {
	console.log(key + ":" + car[key]);
}

let distance = prompt(
	"Cкільки километрів ви хочете подолати?", "");
let speed = car.averageSpeed;
let timeInWay = distance / speed;

if (!distance) {
	console.log(false);
} else if (timeInWay % 4 === 0) {
	console.log(`${timeInWay + (timeInWay - 1) / 4} h`);
} else {
	console.log(
		`${timeInWay + Math.floor(timeInWay / 4)} h`
	);
}

let petrolWay = ((distance / 100) * car.fuelUsage).toFixed(1);
console.log(`${petrolWay} l`);
