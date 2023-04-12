"use strict";

function getNum() {
	console.log(arguments.length);
}
getNum(12, 8);

/* function getNum(a, b) {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else if (a === b) {
		return 0;
	}
}

const result = getNum(1, 2);
console.log(result); */

/* function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

const result = factorial(4);
console.log(result); */

/* function getNum(a, b, c) {
    return (a + b + c)
}

const result = getNum("1", "4", "9");
console.log(result); */

/* function calcSquare(length, width) {
	if (!width) {
		return length ** 2;
	}
	return length * width;
}

console.log(calcSquare(7, 12));
console.log(calcSquare(8)); */
