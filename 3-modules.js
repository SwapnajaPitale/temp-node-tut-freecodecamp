// Modules
// Every file is a module by default

const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-altenative-flavor');
require('./7-mind-grenade')

console.log(data);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);