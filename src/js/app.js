const img = document.getElementById("imagem");
const divRight = document.querySelector(".content-right")
const strong = document.getElementById("star")
const btn = document.querySelector("button")

const tempo = 1000;
const time = 2000;

const img2 = () =>{
    img.src = "assets/img/img3.png";
    divRight.style.background = "#BE2771";
    strong.style.color = "#BE2771";
    btn.style.background = "#BE2771";
}

setInterval(() => {
    img2()
}, tempo);

const img1 = () =>{
    img.src = "assets/img/capuctinoCircle.png";
    divRight.style.background = "#017143";
    strong.style.color = "#017143";
    btn.style.background = "#017143";
}

setInterval(() => {
    img1()
}, time);