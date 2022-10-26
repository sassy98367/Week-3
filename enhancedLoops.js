let names = ['George', 'Tom', 'Ava', 'Carrie' ];

// array can be 0 index based
for(let i = 0; i < names.length; i++) {
    let name = names[i];
    console.log('[INDEX] ' + i + ' ' + name);
}
console.log('--------------------------------');
// lists the index #
for(let name in names) {
    console.log('[IN] ' + name);
}
console.log('-----------------------------------');
//of displays the value
for(let name of names) {
    console.log('[OF] ' + name);
}