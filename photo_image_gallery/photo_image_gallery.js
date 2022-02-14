var index, img;

function show(src, alt, id) {
    document.getElementById("full_image-bg").style.display = "flex";
    document.getElementById("full_image-bg").style.justifyContent = "center";
    document.getElementById("full_image-bg").style.alignItems = "center";
    document.getElementById("full_image-bg").innerHTML = '<i class="arrow left" onclick="prev()"></i><div class="img-container"><img class="full_image" id="' + id + '" src="' + src + '" height="100%" alt="' + alt + '" /><span id="ClosingX" class="ClosingX" onclick="exit()">X</span></div><i class="arrow right" onclick="next()"></i>';
    document.getElementById("full_image-bg").style.width = "100%";
    document.getElementById("full_image-bg").style.height = "100%";
    document.getElementById("full_image-bg").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    index = Number(document.querySelector(".full_image").id); // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
    window.addEventListener("keydown", arrowPress); // The arrowPress function consists only of pressing the left and right keys.
}
function exit() {
    window.removeEventListener("keydown", arrowPress);
    document.getElementById("full_image-bg").style.display = "none";
}
function next() {
    img = document.querySelector(".full_image"); // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
    index ++;
    if (index > document.getElementsByClassName("img").length - 1) {
        index = 0;
    }
    img.src = document.getElementsByClassName("img")[index].src;
}
function prev() {
    img = document.querySelector(".full_image"); // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
    index --;
    if (index < 0) {
        index = document.getElementsByClassName("img").length - 1;
    }
    img.src = document.getElementsByClassName("img")[index].src;
}
function arrowPress(event) {
    if (event.key == "ArrowLeft") {
        img = document.querySelector(".full_image"); // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
        index --;
        if (index < 0) {
            index = document.getElementsByClassName("img").length - 1;
        }
        img.src = document.getElementsByClassName("img")[index].src;
    }
    if (event.key == "ArrowRight") {
        img = document.querySelector(".full_image"); // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
        index ++;
        if (index > document.getElementsByClassName("img").length - 1) {
            index = 0;
        }
        img.src = document.getElementsByClassName("img")[index].src;
    }
    if (event.key == "Escape") {
        window.removeEventListener("keydown", arrowPress);
        document.getElementById("full_image-bg").style.display = "none";
    }
}