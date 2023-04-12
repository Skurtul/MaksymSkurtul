"use strict";

/* const user = {};

user.name = "Іван";
user.surname = "Smith";
console.log(user);

user.name = "Петро";
delete user.surname;
console.log(user); */

/* let schedule = {};
const emptySchedule = !Object.keys(schedule).length === 0;
console.log(emptySchedule); */ // false

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); // false

/* let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
}; */
const driverName = prompt("Якого водія додати?", "");

const car = {
	type: "Fiat",
	model: "500",
	year: "2018",
	averageSpeed: "60 km/h",
	fuelСapacity: "60l",
	fuelUsage: "6l / 100km",
	drivers: driverName,
};

for (const [key, value] of Object.entries(car)) {
	alert(`${key}: ${value}`);
}

console.log(car.drivers);
