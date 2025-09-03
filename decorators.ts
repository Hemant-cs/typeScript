// decorators
// in typeScript Decorators are special type of declartion that can be attached to any class, method, properties and parameters to modify 
// there behavior

// for accessing to class

function getClass(constructor:Function){
    console.log(constructor.name); //GetInc
}
//for accessing property name

function getPropName(target:any, key:any){
    console.log(key.name);
}

@getClass // you neeed to place it before any class to get its name
class GetInc{
    @getPropName
    incId : string;
    incReq: string;
    incSLA: number;
    constructor(x:string, y:string, z:number){
        this.incId = x;
        this.incReq = y;
        this.incSLA = z;
    }
}

const inc1 = new GetInc("INC123", "Hemant", 3);