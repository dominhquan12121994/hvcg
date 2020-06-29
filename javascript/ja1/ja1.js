alert("Please provide your information");

var myName = prompt("Input your name: ");
document.getElementById("myName").innerHTML = 
    "Tên của bạn: <b>" + myName + "</b>";

var myCity = prompt("Input your city: ");
document.getElementById("myCity").innerHTML = 
    "Thành phố: <b>" + myCity + "</b>";

var myTel = prompt("Input your phone number: ");
document.getElementById("myTel").innerHTML = 
    "Số điện thoại: <b>" + myTel + "</b>";

alert("Thank you so much!");

document.getElementById("myBtn").style.display = "block";