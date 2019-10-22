const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first name : ', (answer1) => {
    rl.question('Please enter the last name : ', (answer2) => {
        rl.question('Please enter the Birthyear: ', (answer3)=>{
            var result = (answer1) +' '+ (answer2)+' '+ (answer3);
            console.log(` ${result}`);
            rl.close();
        });
    });
});