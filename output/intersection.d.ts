interface personTA {
    name: string;
}
interface personTB {
    age: number;
}
type personTC = personTA & personTB;
declare const personTC: personTC;
