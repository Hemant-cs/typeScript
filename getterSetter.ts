class studentDetails{
    _name:string;
    gender: string;
    _status: string;

    constructor(name:string, gender:string){
        this._name = name;
        this.gender = gender;
        this._status = "N/A";
    }

    get name():string{
        return this.gender == "Male" ? `Mr. ${this._name}` : `Ms. ${this._name}`;
    }

    set status(marks:number){
        if(marks >= 33){
            this._status = "Pass";
        }else{
            this._status = "Fail";
        }

    }

}

const student1 = new studentDetails("Hemant", "Male");

const student1Name = student1.name; //getter
console.log("student1 Name - ", student1Name); // Mr. Hemant


student1.status = 82; //setter
console.log("student1 Result - ", student1._status); // Pass
