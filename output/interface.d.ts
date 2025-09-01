interface info {
    company: string;
    name: string;
    age: number;
    city: string;
    isActive: boolean;
}
declare const myInfoNew: info;
interface myInfoNew2 {
    [key: string]: string | undefined | boolean | number;
}
declare const myInfoNew2: myInfoNew2;
interface address {
    state: string;
    country: string;
}
interface myInfoNew3 {
    name: string;
    age: number;
    address: address;
}
declare const myInfoNew3: myInfoNew3;
