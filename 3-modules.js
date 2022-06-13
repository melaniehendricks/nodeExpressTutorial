// CommonJS, every file is module by default
// Modules - Encapsulated Code (only share minimum)


// import names and sayHi function
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

// when you import a module, you invoke it 
require('./7-mind-grenade');

//console.log(data);
//console.log(names);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);


