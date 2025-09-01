"use strict";
//suppose you have declare a variable which will store userName, that may be
//blank or a string will store
var userName1 = null;
var pass = undefined;
console.log(userName1 == pass); //true -> null == undefined
console.log(userName1 === pass); //false
