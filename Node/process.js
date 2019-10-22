process.stdout.write('what is your name ? \n');
process.stdin.on('data', (arg) => {
   process.stdout.write(`Welome to the class ${arg}`);
   process.exit()});