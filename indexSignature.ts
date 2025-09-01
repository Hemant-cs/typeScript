//indexSignature are used to define the type of key and value of an object when we don't know the exact keys in advance

interface UserData {
    id: number,
    name: string,
    [key:string]: string | number //indexSignature
}

const userDataObj:UserData = {
    id:1,
    name:"Hemant",
    age: 24,
    cAddress: "Delhi, India",
    pincode: 110092,
    profession: "Web Developer",
    skills: "JavaScript, TypeScript, React, Node.js, AWS"
}
// if you want to block adding any data after creating object then you can use
// readonly [key:string]: string | number
userDataObj.familyName = "Chaurasia"; //we can add any key of type string and value of type string or number
// userDataObj.isEmployed = true; //it will give error because value should be of type string or number

console.log(userDataObj);

// readonly example
interface UserReadOnly {
    id: number,
    name: string,
    readonly [key:string]: string | number //indexSignature
}

const userReadOnlyObj:UserReadOnly = {
    id:1,
    name:"Hemant",
    age: 24,
    cAddress: "Delhi, India",
    pincode: 110092,
    profession: "Web Developer",
    skills: "JavaScript, TypeScript, React, Node.js, AWS"
}
// userReadOnlyObj.age = 25; //it will give error because age is readonly property

console.log(userReadOnlyObj);