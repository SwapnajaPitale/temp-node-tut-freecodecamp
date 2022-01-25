const {readFileSync, writeFileSync} = require ('fs')

console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync( //If the file path does not exist, it will create a new file in the mentioned path. If it exists, it will by default overwrite the file with the second argument passed in this function
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  {flag: 'a'} //appends the second argument to the already existing file instead of overwriting it
)

console.log('Done with this task');
console.log('Starting the next one');