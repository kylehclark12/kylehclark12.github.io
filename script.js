function displaydiv(divtdisp) {
	document.getElementById("home").style.display = "none"
	document.getElementById("forest").style.display = "none"
  	document.getElementById("desert").style.display = "none"
  	document.getElementById("savanna").style.display = "none"

	document.getElementById(divtdisp).style.display = "block"
}
