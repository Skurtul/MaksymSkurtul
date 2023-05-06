const lodash = require("lodash");

const arr = [
	{ id: 3, name: "Maksym" },
	{ id: 9, name: "Ivan" },
	{ id: 36, name: "Roze" },
	{ id: 1, name: "Glen" },
	{ id: 8, name: "Denys" },
	{ id: 10, name: "Igor" },
	{ id: 66, name: "Anna" },
	{ id: 1, name: "Anna" },
];

console.log (lodash.sortBy(arr, ["name", "id"]));
