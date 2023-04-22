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
