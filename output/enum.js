"use strict";
var personEnum;
(function (personEnum) {
    personEnum["admin"] = "ADMIN";
    personEnum["user"] = "USER";
    personEnum["guest"] = "GUEST";
})(personEnum || (personEnum = {}));
;
let personRole = personEnum.guest;
console.log(personRole); // Output: GUEST
