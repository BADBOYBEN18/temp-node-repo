//? INBUILT MODULES
//os
// path
// fs
// http

const { readFile, writeFile } = require('fs');

console.log('starting to read file ');
readFile('./content/second.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }

  const first = result;

  readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;

    writeFile(
      './content/async-result.txt',
      `the result is ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return null;
        }
        console.log('done with this task');
      }
    );
  });
});

console.log('starting a new task');
