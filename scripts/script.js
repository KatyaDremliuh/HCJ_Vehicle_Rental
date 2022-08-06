document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

let errorEmptyValue = "Заполните поле";
let successfully = "Спасибо за заявку, мы свяжемся с вами в ближайшее время";
document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert(errorEmptyValue + " имя!");
    } else if (document.getElementById("phone").value === "") {
        alert(errorEmptyValue + " телефон!");
    } else if (document.getElementById("car").value === "") {
        alert(errorEmptyValue + " автомобиль!")
    } else {
        alert(successfully);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.7) / 9) + 'px,' + ((event.clientY * 0.7) / 9) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.7 * window.scrollY) + 'px';
    })
});