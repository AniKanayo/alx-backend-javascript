const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Welcome to Holberton School, what is your name?\n',
});

rl.prompt();

rl.on('line', (line) => {
  console.log(`Your name is: ${line}`);
  rl.close();
}).on('close', () => {
  console.log('This important software is now closing\n');
  process.exit(0);
});

module.exports = rl;
