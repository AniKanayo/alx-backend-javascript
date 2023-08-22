// Write a welcome message to the standard output (console)
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for the 'readable' event on the standard input (keyboard input)
process.stdin.on('readable', () => {
  // Read the data from the standard input
  const chunk = process.stdin.read();
  // If the data is not null (i.e., the user has entered something)
  if (chunk !== null) {
    // Write the user's name to the standard output
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the 'end' event on the standard input (triggered when the user presses Ctrl+D)
process.stdin.on('end', () => {
  // Write a closing message to the standard output
  process.stdout.write('This important software is now closing\n');
});
