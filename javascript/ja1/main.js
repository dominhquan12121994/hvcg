alert("Please provide your information");

var myName = prompt("Input your name: ");
writeName = () => document.getElementById("myName").innerHTML = 
    "Tên của bạn: <b>" + myName + "</b>";
writeName();

var myCity = prompt("Input your city: ");
writeCity = () => document.getElementById("myCity").innerHTML = 
    "Thành phố: <b>" + myCity + "</b>";
writeCity();

var myTel = prompt("Input your phone number: ");
writeTel = () => document.getElementById("myTel").innerHTML = 
    "Số điện thoại: <b>" + myTel + "</b>";
writeTel();

alert("Thank you so much!");

document.getElementById("myBtn").style.display = "block";