type info1 = {
    name: string;
};
type info2 = {
    age: number;
};
declare const personTypes: info1 & info2;
declare const personTypes2: info1 | info2;
