"use strict";
var User1;
(function (User1) {
    function getData() {
        return "getData is being called!";
    }
    User1.getData = getData;
    function sayHelloWorld() {
        return "Hello world!";
    }
    User1.sayHelloWorld = sayHelloWorld;
})(User1 || (User1 = {}));
console.log(User1.getData());
console.log(User1.sayHelloWorld());
