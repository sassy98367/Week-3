let person = {
    lastName : 'Heeres',
    firstName : 'George',
    children: [
        'Ava' , 'Fiddo'
    ],
    address: {
        street: "123 ACME Way",
        state: 'Fl',
        zipCode: 12345
    },
    addresses: [
        {type: 'Home', street: '344 Long Ln', state: 'CA'},
        {type: 'Work', street: 'Microsoft Ave'}
    ],
    age: 46
};

console.log('lastName = ' + person.lastName);
console.log('firstName = ' + person.firstName);
for(let address of person.addresses) {
    //console.log(address);
    console.log(address.street);
}


