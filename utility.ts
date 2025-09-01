//1. Required

//if you have any optional property in interface and you want to make it required
// then you can use Required utility type

interface UserType{
    name: string,
    age: number,
    address: string,
    isEmployed?: boolean //optional property
}

const objectUserNormal: UserType = {
    name: "Hemant",
    age: 24, 
    address: "Delhi, India"
    // isEmployed: true //optional property - if you are not passing then will not give error
}

const objectUserRequired: Required <UserType> = {
    name: "Hemant",
    age: 24, 
    address: "Delhi, India",
    isEmployed: true //now it is required property - if you are not passing then will give error
}

// 2. Partial
//if you have any required property in interface and you want to make it optional
// then you can use Partial utility type

const objectUserPartial: Partial <UserType> = {
    name: "Hemant",
    address: "Delhi, India"
    // age: 24 //now it is optional property - if you are not passing then it will not give any error
}

// 3. Readonly
//if you have any property in interface and you want to make it readonly
// then you can use Readonly utility type

const objectUserReadonly: Readonly <UserType> = {
    name: "Hemant",
    age: 24,
    address: "Delhi, India"
}

//since it readonly property so we can't change the value of any property

// objectUserReadonly.isEmployed = true; //it will give error because isEmployed is readonly property
//objectUserReadonly.age = 25; //it will give error because age is readonly property

// 4. Pick
//if you want to pick some properties from interface
// then you can use Pick utility type

const objectUserPick: Pick <UserType, "name" | "age"> = {
    name: "Hemant",
    age: 24
    // address: "Delhi, India" //it will give error because address is not picked property
}


// 5. Omit
//if you want to omit some properties from interface
// then you can use Omit utility type

const objetctUserOmit: Omit <UserType, "address" | "isEmployed"> = {
    name: "Hemant",
    age: 24,
    // address: "Delhi, India" // it will give error because address is omitted property
    // isEmployed: true // it will give error because isEmployed is omitted property
}

// 6. Record
//if you want to create an object type with specific keys and values
// then you can use Record utility type

type Role = "admin" | "user" | "guest"

const userRole: Role = "admin"; //it will give error if you try to assign any value other than "admin", "user", "guest"

const objectUserRole: Record <Role, string> = {
    admin: "Hemant",
    user: "John",
    guest: "Doe"
    // superAdmin: "Super Hemant" //it will give error because superAdmin is not a valid key
}

// 7. Exclude
//if you want to exclude some types from union type
// then you can use Exclude utility type

// Exclude is used with union types, not with interfaces or object types.
// It removes specific members from a union type.

type Animal = "cat" | "dog" | "rabbit";
type ExcludedAnimal = Exclude<Animal, "rabbit">; // "cat" | "dog"

const myPet: ExcludedAnimal = "cat"; // valid
// const anotherPet: ExcludedAnimal = "rabbit"; // error: Type '"rabbit"' is not assignable

// 8. NonNullable
//if you want to exclude null and undefined from a type
// then you can use NonNullable utility type

type MaybeString = string | null | undefined;
type NonNullableString = NonNullable<MaybeString>; // string

const myString: NonNullableString = "Hello"; // valid
// const anotherString: NonNullableString = null; // error: Type 'null' is not assignable
// const yetAnotherString: NonNullableString = undefined; // error: Type 'undefined' is not assignable
