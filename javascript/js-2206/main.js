var para1 = document.getElementById("para1").innerHTML;
var para2 = document.getElementById("para2").innerHTML;

function changeContent() {
    document.getElementById("para1").innerHTML = "para1 was changed";
    document.getElementById("para2").innerHTML = "para2 was changed, too";
}

function rollbackContent() {
    document.getElementById("para1").innerHTML = para1;
    document.getElementById("para2").innerHTML = para2;
}

function addNumber() {
    document.getElementById("para3").innerHTML = 5 * 6;
}

var a = 9, b = 10;

function writeNumber(a, b) {
    document.getElementById("para3").innerHTML = a + " + " + b + " = ?";
}

function showNumber() {
    document.getElementById("para3").innerHTML = a + " + " + b + " = " + (a + b);
}

document.write( 5 - 6 + " <br> js viet vao ne");

alert("this is alert, only ok button");

confirm("this is confirm, may oke or cancel");

prompt("this is prompt, can write content here", "this is default content");

console.log(5 + 8);