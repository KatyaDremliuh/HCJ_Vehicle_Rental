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