enum personEnum  {
    admin = 'ADMIN',
    user = 'USER',
    guest = 'GUEST',
};

let personRole: personEnum = personEnum.guest;

console.log(personRole); // Output: GUEST