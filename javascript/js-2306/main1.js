var x = Number(document.getElementById("para1").innerHTML);
var y = Number(document.getElementById("para2").innerHTML);

function addNumber() {
    document.getElementById("para3").innerHTML = x + y;
}

function subNumber() {
    document.getElementById("para4").innerHTML = x - y;
}

function inputNumber() {
    var x = Number(document.getElementById("demo1").value);
    var y = Number(document.getElementById("demo2").value);
    document.getElementById("demo3").innerHTML = x + y;
}

function devideNumber() {
    var x = Number(document.getElementById("demo1").value);
    var y = Number(document.getElementById("demo2").value);
    document.getElementById("demo3").innerHTML = x / y;
}

function multipleNumber() {
    var x = Number(document.getElementById("demo1").value);
    var y = Number(document.getElementById("demo2").value);
    document.getElementById("demo3").innerHTML = x * y;
}

function percentNumber() {
    var x = Number(document.getElementById("demo1").value);
    var y = Number(document.getElementById("demo2").value);
    document.getElementById("demo3").innerHTML = x % y;
}

function warning() {
    alert("you had clicked on the image!");
}

function multiNum(a, b) {
    return a * b;
}

document.getElementById("demo4").innerHTML = multiNum(6, 10);

var person = {
    firstName: "Do",
    lastName: "Minh Quan",
    age: "26",
    eyeColor: "brown"
};

document.getElementById("demo5").innerHTML = 
    "ten toi la " + person.firstName + " " + person.lastName + " nam nay " + person.age + " tuoi va co mau mat la " + person.eyeColor;

function pickCar() {
    document.getElementById("demo6").innerHTML = 
        document.getElementById("car").value;
}