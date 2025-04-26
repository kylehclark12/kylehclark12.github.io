function displaydiv(divtdisp) {
	document.getElementById("home").style.display = "none"
	document.getElementById("forest").style.display = "none"
	document.getElementById("desert").style.display = "none"
	document.getElementById("savanna").style.display = "none"
	document.getElementById("extras").style.display = "none"

	document.getElementById(divtdisp).style.display = "block"
	if (divtdisp === 'home') {
	var color = "#F3ECDB"
	}
	else if (divtdisp === 'forest') {
	color = "forestgreen"
	}
	else if (divtdisp === "desert") {
	color = "tan"
	}
	else if (divtdisp === "savanna") {
	color = "#B2BF70"
	}
	else if (divtdisp === "extras") {
	color = "lightblue"
	}
	document.getElementById("buttoncase").style.backgroundColor = color
}
