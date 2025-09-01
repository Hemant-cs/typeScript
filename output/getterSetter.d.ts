declare class studentDetails {
    _name: string;
    gender: string;
    _status: string;
    constructor(name: string, gender: string);
    get name(): string;
    set status(marks: number);
}
declare const student1: studentDetails;
declare const student1Name: string;
