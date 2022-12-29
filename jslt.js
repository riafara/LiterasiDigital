var fullwes = document.getElementById("fullwes")
var imgfull = document.getElementById("fullimagebox")
var image_full = document.getElementById("imagefull")
var ppp = document.getElementById("section3n")

function openfullimage(abc) {
    imgfull.style.display = "flex"
    image_full.src = abc
}

function closefullimage() {
    imgfull.style.display = "none"
}