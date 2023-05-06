// Завдання 1
area.hidden = true;

document.onkeydown = function (e) {
	if (e.ctrlKey && e.keyCode == "69") {
		document.getElementById("view").hidden = true;
		document.getElementById("area").hidden = false;
		area.focus();
		area.innerHTML = view.innerHTML;
		return false;
	}

	if (e.ctrlKey && e.keyCode == "83") {
		document.getElementById("view").hidden = false;
		document.getElementById("area").hidden = true;
		view.innerHTML = area.value;
		return false;
	} else if (e.keyCode == "27") {
		document.getElementById("view").hidden = false;
		document.getElementById("area").hidden = true;
	}
};

// Завдання 2
document.addEventListener("DOMContentLoaded", function () {
	const table = document.getElementById("sortable");
	const headers = table.querySelectorAll("th");
	const tableBody = table.querySelector("tbody");
	const rows = tableBody.querySelectorAll("tr");

	const directions = Array.from(headers).map(function (
		header
	) {
		return "";
	});

	const transform = function (index, content) {
		// тип данних
		const type = headers[index].getAttribute("data-type");
		switch (type) {
			case "number":
				return parseFloat(content);
			case "string":
			default:
				return content;
		}
	};

	const sortColumn = function (index) {
		const direction = directions[index] || "asc";

		const multiplier = direction === "asc" ? 1 : -1;

		const newRows = Array.from(rows);

		newRows.sort(function (rowA, rowB) {
			const cellA =
				rowA.querySelectorAll("td")[index].innerHTML;
			const cellB =
				rowB.querySelectorAll("td")[index].innerHTML;

			const a = transform(index, cellA);
			const b = transform(index, cellB);

			switch (true) {
				case a > b:
					return 1 * multiplier;
				case a < b:
					return -1 * multiplier;
				case a === b:
					return 0;
			}
		});

		// Видалити строку
		[].forEach.call(rows, function (row) {
			tableBody.removeChild(row);
		});

		directions[index] =
			direction === "asc" ? "desc" : "asc";

		// Додаємо нову строку
		newRows.forEach(function (newRow) {
			tableBody.appendChild(newRow);
		});
	};

	[].forEach.call(headers, function (header, index) {
		header.addEventListener("click", function () {
			sortColumn(index);
		});
	});
});

// Завдання 3
const resDiv = document.getElementById("content__textarea");
const resizer = document.querySelector(
	"div.content__textarea--resizer"
);

const initResize = (e) => {
	e.preventDefault;
	window.addEventListener("mousemove", startResize);
	window.addEventListener("mouseup", stopResize);
};

const startResize = (e) => {
	resDiv.style.width = e.clientX - resDiv.offsetLeft + "px";
};
const stopResize = (e) => {
	window.removeEventListener("mousemove", startResize);
	window.removeEventListener("mouseup", stopResize);
};

resizer.addEventListener("mousedown", initResize);
