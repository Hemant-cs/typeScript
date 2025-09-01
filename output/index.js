"use strict";
function test(event) {
    event.preventDefault();
    //for userName
    const userName = document.getElementById("name");
    console.log(userName.value);
    //for email
    const userEmail = document.getElementById("email");
    console.log(typeof userEmail.value);
    //for age
    const userAge = document.getElementById("age");
    console.log(typeof userAge.value);
    //creating an readOnly array
    var readOnlyArray = ["me", "you", "we"];
    console.log(readOnlyArray);
}
