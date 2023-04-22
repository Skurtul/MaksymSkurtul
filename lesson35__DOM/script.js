"use srtict";

var playList = [
	{
		author: "LED ZEPPELIN",

		song: "STAIRWAY TO HEAVEN",
	},

	{
		author: "QUEEN",

		song: "BOHEMIAN RHAPSODY",
	},

	{
		author: "LYNYRD SKYNYRD",

		song: "FREE BIRD",
	},

	{
		author: "DEEP PURPLE",

		song: "SMOKE ON THE WATER",
	},

	{
		author: "JIMI HENDRIX",

		song: "ALL ALONG THE WATCHTOWER",
	},

	{
		author: "AC/DC",

		song: "BACK IN BLACK",
	},

	{
		author: "QUEEN",

		song: "WE WILL ROCK YOU",
	},

	{
		author: "METALLICA",

		song: "ENTER SANDMAN",
	},
];

const ul = document.createElement("ul");
const mainDiv = document.getElementById("content");
mainDiv.append(ul);
for (let i in playList) {
	const li = document.createElement("li");
	const p = document.createElement("p");
	p.append(playList[i].author);
	p.append(" : ");
	p.append(playList[i].song);
	li.append(p);
	ul.append(li);
}

const btn = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Open";
btn.append(p);
mainDiv.append(btn);
btn.addEventListener("click", () => {
	const div = document.createElement("div");
	const p = document.createElement("p");
	p.textContent =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
	div.append(p);
	const innerBtn = document.createElement("button");
	const innerBtnP = document.createElement("p");
	innerBtnP.textContent = "Close";
	innerBtn.append(innerBtnP);
	div.append(innerBtn);
	mainDiv.append(div);
	btn.disabled = true;
	innerBtn.addEventListener("click", () => {
		div.remove();
		btn.disabled = false;
	});
});

const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const butn = document.getElementById("btn");

let previous = null;
butn.addEventListener("click", function () {
	let current = document.querySelector(".active");
	current.classList.remove("active");
	if (current === redLight || current === greenLight) {
		yellowLight.classList.add("active");
		previous = current;
	} else {
		previous === redLight
			? greenLight.classList.add("active")
			: redLight.classList.add("active");
	}
});
