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
console.log(car.drivers.includes("Emily")); //false;

for (let key in car) {
	console.log(key + ":" + car[key]);
}

let distance = prompt(
	"Cкільки километрів ви хочете подолати?", "");
let speed = car.averageSpeed;
let uptime = distance / speed;

function time() {
	if (!distance) {
		return false;
	} else if (uptime % 4 === 0) {
		return Math.floor(uptime + (uptime - 1) / 4);
	} else 
		return uptime + Math.floor(uptime / 4);
	}
	
let timeInWay = time();
console.log(`${timeInWay}h`);

let petrolWay = ((distance / 100) * car.fuelUsage).toFixed(1);
console.log(`${petrolWay}l`);
