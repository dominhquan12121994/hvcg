function changeContent() {
    document.getElementById("header__content").innerHTML = "hello js";
    document.getElementById("header__content").style.color = "red";
    document.getElementById("header__content").style.marginTop = "100px";
    document.getElementById("header__content").style.fontSize = "40px";
}

function pickCar() {
    document.getElementById("myVehicle").src = "./car.jpg";
}

function pickBike() {
    document.getElementById("myVehicle").src = "./bike.jpg";
}

function hideImage() {
    document.getElementById("myVehicle").style.display = "none";
}

function showImage() {
    document.getElementById("myVehicle").style.display = "block";
}

function changeMessage() {
    document.getElementById("h1Message").innerHTML = "paragraph changed";
}

function makeAlert(a, b) {
    alert(a + b);
    console.log(a - b);
}

function addNumber(a, b) {
    var c = a + b;
    document.getElementById("number").innerHTML = "this is: " + a + " plus " + b + " equal " + c + " end";
    var yourName;
    console.log(yourName);
    var x = 2 + 3 + "5";
    console.log(x);
    console.log(typeof(x));
    var myNumber = null;
    console.log(myNumber);
    console.log(typeof(myNumber));
    var firstPerson = undefined;
    console.log(firstPerson);
    console.log(typeof(firstPerson));
}

function test1(a, b) {
    var x = a + b;
    return x;
}

function test2(a, b) {
    return a + b;
}

function toCelcius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

function convertMe() {
    document.getElementById("toCelcius").innerHTML = toCelcius(100);
}

var randomPerson = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(randomPerson.fullName());

var someText = "dsahldsjald";
console.log(someText.length);
console.log("we are call \"viking\" from the north");

var x = "john";
var y = new String("john");

console.log(y);
console.log(typeof(y));

console.log(x==y);
// explain this
console.log(x===y); 
// explain this

var x1 = 100 / "apple";
console.log(isNaN(x1));

alert("welcome to your first javascript application");
var yourName = prompt("please input your name: ");
document.getElementById("yourName").innerHTML = yourName;

var yourCity = prompt("please input your city: ");
document.getElementById("yourCity").innerHTML = yourCity;

var yourTel = prompt("please input your phone number: ");
document.getElementById("yourTel").innerHTML = yourTel;

alert("thank for provide your information");
document.getElementById("myButton").style.display = "block";



console.log(typeof(x2));

var val = "all people"
hello = (a) => console.log("hello" + a);
hello(val);

