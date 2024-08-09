const { readFileSync, writeFileSync } = require('fs');
console.log('starting task...');

let encoding = 'utf-8';

const first = readFileSync('./content/first.txt', encoding);
console.log(first);

writeFileSync('./content/second.txt', 'hello im your new file😊', {
  flag: 'a',
});
console.log("done with this task..");
console.log("starting a new task..");