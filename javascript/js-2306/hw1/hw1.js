function addNum() {
    var a = Number(document.getElementById("firstNumber").value);
    var b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML =  a + b; 
}

function subNum() {
    var a = Number(document.getElementById("firstNumber").value);
    var b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML =  a - b;
}

function mulNum() {
    var a = Number(document.getElementById("firstNumber").value);
    var b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML =  a * b;
}

function divNum() {
    var a = Number(document.getElementById("firstNumber").value);
    var b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML =  a / b;
}

function modNum() {
    var a = Number(document.getElementById("firstNumber").value);
    var b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML =  a % b;
}