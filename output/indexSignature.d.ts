interface UserData {
    id: number;
    name: string;
    [key: string]: string | number;
}
declare const userDataObj: UserData;
interface UserReadOnly {
    id: number;
    name: string;
    readonly [key: string]: string | number;
}
declare const userReadOnlyObj: UserReadOnly;
