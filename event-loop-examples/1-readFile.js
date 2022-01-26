const {readFile, writeFile} = require('fs');
console.log('started first task');
// check file path
readFile('./content/first.txt', 'utf-8', (err,res)=>{
  if(err){
    console.log(err);
    return
  } console.log(res);
  console.log('completed first task');
})
console.log('starting next task');