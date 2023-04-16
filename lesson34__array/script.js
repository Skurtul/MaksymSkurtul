"use strict";

const shoppingList = [
	{
		name: "Apple",
		amount: 3,
		price: 10,
		status: true,
	},
	{
		name: "Milk",
		amount: 1,
		price: 40,
		status: false,
	},

	{
		name: "Avocado",
		amount: 2,
		price: 49,
		status: true,
	},

	{
		name: "Bread",
		amount: 1,
		price: 21,
		status: false,
	},
];

const printShoppingList = (shoppingList) => {
	const sortedShoppingList = [...shoppingList];
	sortedShoppingList.sort((a, b) => {
		if (a.status === true && b.status === false) {
			return 1;
		}
		if (a.status === false && b.status === true) {
			return -1;
		}
		return 0;
	});
	console.log(sortedShoppingList);
};

const addShopToList = (shop) => {
	const find = shoppingList.find((value) => {
		return shop.name === value.name;
	});
	if (find) {
		find.amount += shop.amount;
	} else {
		shoppingList.push(shop);
	}
};

addShopToList({
	name: "Tomato",
	amount: 3,
	price: 16,
});

addShopToList({
	name: "Salt",
	amount: 1,
	price: 5,
});

printShoppingList(shoppingList);

let sum = shoppingList.reduce(
	(a, b) => a + b.amount * b.price, 0);
console.log(sum);
