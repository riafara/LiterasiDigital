var Sign_In = document.getElementById("login_bar")
var regisbar = document.getElementById("regisbar")
var fullwes = document.getElementById("fullwes")
var imgfull = document.getElementById("fullimagebox")
var image_full = document.getElementById("imagefull")
var shoes = document.getElementById("section3n")
var jacket = document.getElementById("section3new")
var watches = document.getElementById("section3news")

function showshoes() {
    shoes.style.display = "flex"
    jacket.style.display = "none"
    watches.style.display = "none"
}

function showjacket() {
    shoes.style.display = "none"
    jacket.style.display = "flex"
    watches.style.display = "none"
}

function showwatches() {
    shoes.style.display = "none"
    jacket.style.display = "none"
    watches.style.display = "flex"
}

function openfulllogin() {
    Sign_In.style.display = "flex"
}

function openfullregis() {
    regisbar.style.display = "flex"
}

function openfullimage(abc) {
    imgfull.style.display = "flex"
    image_full.src = abc
}

function closefulllogin() {
    Sign_In.style.display = "none"
}

function closefullregis() {
    regisbar.style.display = "none"
}
function closefullimage() {
    imgfull.style.display = "none"
}