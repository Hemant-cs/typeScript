 namespace  User1{
    export function getData():string{
        return "getData is being called!";
    }

    export function sayHelloWorld():string{
        return "Hello world!"
    }
}

console.log(User1.getData());
console.log(User1.sayHelloWorld());