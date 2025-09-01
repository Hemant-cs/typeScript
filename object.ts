//if you know all key value pair

const myInfo:{
    name:string,
    age:number,
    city:string,
    isActive:boolean
} = {
    name: "Shanu",
    age: 25,
    city: "Delhi",
    isActive: true
}

// obj.company = "TCS" // you cann't add any property

//if you don't know possible key value pair

const myInfo2: {
    [key:string]:string|undefined|boolean|number
}= {
    name:"Hemant",
    age: 27,
    city : "Indore",
    company: "TCS"
}

myInfo2.isActive = true; //you can add property

console.log(myInfo2);

//how to take nested object

const myInfo3:{
    name:string,
    age:number,
    address:{}
} = {
    name:"Shanu",
    age:26,
    address:{
        state:"Delhi",
        country: "India"
    }
}

console.log(myInfo3)