const stman = document.getElementById("stickman")
const body = document.getElementById("body")
const head = document.getElementById("head")
const shl = document.getElementById("shl")
const rarm = document.getElementById("rarm")
const rfarm = document.getElementById("rfarm")
const larm = document.getElementById("larm")
const lfarm = document.getElementById("lfarm")
const rleg = document.getElementById("rleg")
const rlleg = document.getElementById("rlleg")
const lleg = document.getElementById("lleg")
const llleg = document.getElementById("llleg")
const binoculars = document.getElementById("binoculars")
const rlens = document.getElementById("rlens")
const llens = document.getElementById("llens")
const speech = document.getElementById("speech")

const pstman = document.getElementById("stickman")
const pbody = document.getElementById("pbody")
const phead = document.getElementById("phead")
const pshl = document.getElementById("pshl")
const prarm = document.getElementById("prarm")
const prfarm = document.getElementById("prfarm")
const plarm = document.getElementById("plarm")
const plfarm = document.getElementById("plfarm")
const prleg = document.getElementById("prleg")
const prlleg = document.getElementById("prlleg")
const plleg = document.getElementById("plleg")
const pllleg = document.getElementById("pllleg")
const animdelay = 1
const allspots = [
		["forest", "84px", "100px"],
		["forest", "284px", "calc(100% - 200px)"],
		["forest", "484px", "100px"],
		["forest", "684px", "calc(100% - 200px)"],
		["forest", "884px", "100px"],
		["desert", "84px", "100px"],
		["desert", "284px", "calc(100% - 200px)"],
		["desert", "484px", "100px"],
		["desert", "684px", "calc(100% - 200px)"],
		["desert", "884px", "100px"],
		["savanna", "84px", "100px"],
		["savanna", "284px", "calc(100% - 200px)"],
		["savanna", "484px", "100px"],
		["savanna", "684px", "calc(100% - 200px)"],
		["savanna", "884px", "100px"]
	]
const decidetohidedisplay = document.getElementById("decidetohide")

var animoccuring = false
var count = 0
var speechtimer
var nottheretimer
var gametexttimer = []
var animtimer
var smcurrent = 'home'
var hidden = false
var currentgame = false
var isplayerhidden = false
var gameisrunning = false
var hidinglocation = false

function displaydiv(divtdisp) {
	document.getElementById("home").style.display = "none"
	document.getElementById("forest").style.display = "none"
	document.getElementById("desert").style.display = "none"
	document.getElementById("savanna").style.display = "none"
	document.getElementById("extras").style.display = "none"

	document.getElementById(divtdisp).style.display = "block"
	if (smcurrent === divtdisp && hidden != true) {
		stman.style.display = "block"
	}
	else {
		stman.style.display = "none"
	}
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

function stickman() {
	if (currentgame === "seek" && smcurrent != "home") {
		smfound()
	}
}
function animNone () {
	animoccuring = false
	stman.style.animation = "none"
	body.style.animation = "none"
	head.style.animation = "none"
	shl.style.animation = "none"
	rarm.style.animation = "none"
	rfarm.style.animation = "none"
	larm.style.animation = "none"
	lfarm.style.animation = "none"
	rleg.style.animation = "none"
	rlleg.style.animation = "none"
	lleg.style.animation = "none"
	llleg.style.animation = "none"
	binoculars.style.animation = "none"
	rlens.style.animation = "none"
	llens.style.animation = "none"
	speech.style.animation = "none"

	binoculars.style.display = "none"

}
function animStand() {
	clearTimeout(animtimer)
	animoccuring = false
	animNone()
	animtimer = setTimeout(aStand, animdelay)
}
function aStand() {
	rarm.style.animation = "hidera 1s linear infinite alternate"
	larm.style.animation = "hidela 1s linear infinite alternate"
}
function animWave() {
	clearTimeout(animtimer)
	animoccuring = true
	animNone()
	animtimer = setTimeout(aWave, animdelay)
}
function aWave() {
	rarm.style.animation = "wavera 1s linear infinite alternate"
	rfarm.style.animation = "waverfa 1s linear infinite alternate"
	larm.style.animation = "hidela 1s infinite alternate linear"
}
function animBin() {
	clearTimeout(animtimer)
	animoccuring = true
	animNone()
	animtimer = setTimeout(aBin, animdelay)
}
function aBin() {
	rarm.style.animation = "binra 1s linear infinite alternate"
	rfarm.style.animation = "binrfa 1s linear infinite alternate"
	larm.style.animation = "binla 1s linear infinite alternate"
	lfarm.style.animation = "binlfa 1s linear infinite alternate"
	binoculars.style.animation = "binoculars 1s linear infinite alternate"
	rlens.style.animation = "rlens 1s linear infinite alternate"
	llens.style.animation = "llens 1s linear infinite alternate"

	binoculars.style.display = "block"
}
function animWalk() {
	clearTimeout(animtimer)
	animoccuring = true
	animNone()
	animtimer = setTimeout(aWalk, animdelay)
}
function aWalk() {
	body.style.animation = "walkbody 1s linear infinite"
	rarm.style.animation = "walkra 1s linear infinite"
	rfarm.style.animation = "walkrfa 1s linear infinite"
	larm.style.animation = "walkla 1s linear infinite"
	lfarm.style.animation = "walklfa 1s linear infinite"
	rleg.style.animation = "walkrl 1s linear infinite"
	rlleg.style.animation = "walkrll 1s linear infinite"
	lleg.style.animation = "walkll 1s linear infinite"
	llleg.style.animation = "walklll 1s linear infinite"
}
function animHide() {
	clearTimeout(animtimer)
	animoccuring = true
	animNone()
	setTimeout(aHide, animdelay)
}
function aHide() {
	head.style.animation = "hidehead 1s linear infinite alternate"
	rarm.style.animation = "hidera 1s linear infinite alternate"
	rfarm.style.animation = "hiderfa 1s linear infinite alternate"
	larm.style.animation = "hidela 1s linear infinite alternate"
	lfarm.style.animation = "hidelfa 1s linear infinite alternate"
	rleg.style.animation = "hiderl 1s linear infinite alternate"
	rlleg.style.animation = "hiderll 1s linear infinite alternate"
	lleg.style.animation = "hidell 1s linear infinite alternate"
	llleg.style.animation = "hidelll 1s linear infinite alternate"
}
function animpHide() {
	clearTimeout(animtimer)
	animoccuring = true
	animNone()
	animtimer = setTimeout(apHide, animdelay)
}
function apHide() {
	phead.style.animation = "hidehead 1s linear infinite alternate"
	prarm.style.animation = "hidera 1s linear infinite alternate"
	prfarm.style.animation = "hiderfa 1s linear infinite alternate"
	plarm.style.animation = "hidela 1s linear infinite alternate"
	plfarm.style.animation = "hidelfa 1s linear infinite alternate"
	prleg.style.animation = "hiderl 1s linear infinite alternate"
	prlleg.style.animation = "hiderll 1s linear infinite alternate"
	plleg.style.animation = "hidell 1s linear infinite alternate"
	pllleg.style.animation = "hidelll 1s linear infinite alternate"
}
function animMenuHide() {
	clearTimeout(animtimer)
	animoccuring = true
	animNone()
	animtimer = setTimeout(aMenuHide, animdelay)
}
function aMenuHide() {
	animoccuring = true
	animWalk()
	stman.style.animation = "walkaway 5s"
}
function animApparateout() {
	animoccuring = true
	animStand()
	stman.style.animation = "apparate .5s"
}

function animApparatein() {
	animoccuring = true
	animStand()
	stman.style.animation = "apparatein .5s"
}
function closespeech() {
	speech.style.display = "none"
}

function hideseekgame(gametype) {
	if (gameisrunning === false){
		if (gametype === 'hide') {
			gameisrunning = true
			hidegame()
			currentgame = gametype
		}
		else if (gametype === 'seek') {
			gameisrunning = true
			seekgame()
			currentgame = gametype
		}
	}
}

function hidegame() {
	isplayerhidden = false
	for (let i = 0; i < 4; i++) {
		gametexttimer[i] = setTimeout(gametext, (2 * i) * 5000, 0)
		gametexttimer[i + 4] = setTimeout(gametext, (2 * i + 1)  * 5000, 1)
	}
	let speechtimer = setTimeout(closespeech, 38000)
}

function hidingspot(place) {
		if (currentgame === 'hide' && isplayerhidden === false) {
			hidinglocation = place
			displaydecidetohide()
		}
		
		else if (currentgame === 'seek' && hidden) {
			if (place === hidinglocation) {
			clearnotthere()
				stman.style.display = "block"
			}
			else {
				notthere()
			}
		}
	}

function notthere() {
	clearTimeout(nottheretimer)
	nottheretimer = setTimeout(clearnotthere, 1500)
	document.getElementById("notthere").style.display = "block"
}
function clearnotthere() {
	document.getElementById("notthere").style.display = "none"
}

function gametext(say) {
	let text = [
		"To hide, head to another location and click on one of the hiding places!", 
		"I'll come looking for you once you've hidden!",
		"Ready or not, here I come!",
		"Found you!",
		"If you'd like to play again, I'll meet you at the home page!",
		"I'm going to go hide in another location!",
		"Count to 10 and come find me!",
		"You found me!"
	]
	speech.innerText = text[say]
	speech.style.display = "block"
}

function seekgame() {
	gametext(5)
	setTimeout(gametext, 2000, 6)
	setTimeout(animApparateout, 5000)
	setTimeout(closespeech, 5000)
	setTimeout(smdisappear, 5500)
	setTimeout(choosehidingspot, 5500)
	hidden = true
}

function choosehidingspot() {
	let spot = Math.floor(Math.random() * 15)
	hidinglocation = spot
	smcurrent = allspots[spot][0]
	stman.style.top = allspots[spot][1]
	stman.style.left = allspots[spot][2]
	animHide()
}

function displaydecidetohide() {
	decidetohidedisplay.style.display = "block"
}

function decidetohide(input) {
	if (input === "yes") {
		isplayerhidden = true
		decidetohidedisplay.style.display = "none"
		setTimeout(searchforplayer, 500)
	}
	else {
	decidetohidedisplay.style.display = "none"
	}
}

function searchforplayer() {
	closespeech()
	for (let i = 0; i < gametexttimer.length; i++) {
		clearTimeout(gametexttimer[i])
	}
	displaydiv("home")
	gametexttimer[1] = setTimeout(gametext, 500, 2)
	speechtimer = setTimeout(closespeech, 3000)
	setTimeout(checkspots, 1000)
}

function checkspots() {
	let array = []
	while (array.length < 15) {
		let r = Math.floor(Math.random() * 15)
		if (array.includes(r) != true) {
			array.push(r)
		}
	}
	for (let i = 0; i < array.length; i++) {
		setTimeout(checklocation, 3000 * (i + 1), array[i])
		if (array[i] === hidinglocation) {
		setTimeout(playerisfound, 3000 * (i + 2))
		break
		}
	}
}

function checklocation(location) {
	animApparateout()
	smcurrent = allspots[location][0]
	setTimeout(smdisappear, 500)
	setTimeout(displaydiv, 500, smcurrent)
	setTimeout(movesm, 500, location)
	setTimeout(animApparatein, 500)
	setTimeout(animBin, 1000)
}

function smdisappear() {
	stman.style.display = "none"
}
function playerisfound() {
	animNone()
	setTimeout(animWave, 1)
	gametext(3)
	setTimeout(gametext, 1500, 4)
	setTimeout(animApparateout, 5000)
	setTimeout(smdisappear, 5500)
	setTimeout(closespeech, 5000)
	setTimeout(reset, 5510)
}
function smfound() {
	animNone()
	setTimeout(animWave, 1)
	gametext(7)
	setTimeout(gametext, 1500, 4)
	setTimeout(animApparateout, 5000)
	setTimeout(smdisappear, 5500)
	setTimeout(closespeech, 5000)
	setTimeout(reset, 5510)
}

function reset() {
	
animoccuring = false
count = 0
speechtimer
gametexttimer = []
animtimer
smcurrent = 'home'
hidden = false
currentgame = false
isplayerhidden = false
gameisrunning = false
hidinglocation = false
stman.style.top = "52%"
stman.style.left = "calc(50% - 20px)"
animStand()
}

function movesm(location) {
	if (currentgame === "hide") {
		stman.style.top = allspots[location][1]
		console.log(stman.style.top)
	}
}



