function reset() {
    document.getElementById("userName").value = "";
    document.getElementById("passWord").value = "";
}


function check() {
    var userName = document.getElementById("userName").value;
    var passWord = document.getElementById("passWord").value;
    console.log(userName);
    console.log(passWord);
    if (userName === "") {
        alert("Missing username");
    }

    if (passWord === "") {
        alert("Missing password");
    } else if (passWord.length < 6) {
        alert("Password too short, please input at least 6 characters!");
    } else {
        reset();
    }
}