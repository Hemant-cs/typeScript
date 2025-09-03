interface UserType {
    name: string;
    age: number;
    address: string;
    isEmployed?: boolean;
}
declare const objectUserNormal: UserType;
declare const objectUserRequired: Required<UserType>;
declare const objectUserPartial: Partial<UserType>;
declare const objectUserReadonly: Readonly<UserType>;
declare const objectUserPick: Pick<UserType, "name" | "age">;
declare const objetctUserOmit: Omit<UserType, "address" | "isEmployed">;
type Role = "admin" | "user" | "guest";
declare const userRole: Role;
declare const objectUserRole: Record<Role, string>;
type Animal = "cat" | "dog" | "rabbit";
type ExcludedAnimal = Exclude<Animal, "rabbit">;
declare const myPet: ExcludedAnimal;
type MaybeString = string | null | undefined;
type NonNullableString = NonNullable<MaybeString>;
declare const myString: NonNullableString;
