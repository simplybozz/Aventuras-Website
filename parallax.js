var title = document.getElementById("title");
var bg2 = document.getElementById("bg-2");
var bg3 = document.getElementById("bg-3");

var imgCard1 = document.getElementById("image__card-1");
var imgCard2 = document.getElementById("image__card-2");
var imgCard3 = document.getElementById("image__card-3");
var imgCard4 = document.getElementById("image__card-4");

document.addEventListener("scroll", (event) => {
    var positionY = window.scrollY;

    title.style.fontSize = `${100+positionY * 0.5}px`;

    bg2.style.top = `-${positionY * 0.5}px`;
    bg3.style.top = `-${positionY}px`;
    bg3.style.scale = 1 + positionY * 0.001;

    imgCard1.style.transform = `translateY(${
        positionY * -0.5 + 400
    }px)`;

    imgCard2.style.transform = `translateY(${
        positionY * 0.1 + -50
    }px)`;

    imgCard3.style.transform = `translateY(${
        positionY * -.1 + 100
    }px)`;

    imgCard4.style.transform = `translateY(${
        positionY * .2 + -125
    }px)`;

    var newOpacity = positionY * 0.001;

    if(newOpacity >= 0 && newOpacity <= 1){
        imgCard1.style.opacity = newOpacity;
        imgCard2.style.opacity = newOpacity;
        imgCard3.style.opacity = newOpacity;
        imgCard4.style.opacity = newOpacity;
    }
});
