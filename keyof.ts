//keyof keywords in typeScript

interface UserNew{
    name: string,
    age: number,
    isEmployed: boolean
}

const objectUserNew: UserNew = {
    name:"Hemant",
    age: 24,
    isEmployed: true
}

const userKeyOf: keyof UserNew = "age"; //it will only allow key of UserNew interface
// const userKeyOfWrong: keyof UserNew = "address"; //it will give error because address is not key of UserNew interfaced