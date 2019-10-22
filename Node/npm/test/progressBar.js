#!/usr/bin/env node

var complete = 10;
var counter = 0;
var progress = setInterval(() => {
    process.stdout.write('#');
    counter++;
    if(counter==complete) {
        clearInterval(progress);
        }
}, 1000);


