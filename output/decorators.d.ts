declare function getClass(constructor: Function): void;
declare function getPropName(target: any, key: any): void;
declare class GetInc {
    incId: string;
    incReq: string;
    incSLA: number;
    constructor(x: string, y: string, z: number);
}
declare const inc1: GetInc;
