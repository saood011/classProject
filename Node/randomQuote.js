var myQuotes = ['Don\'t cry because it\'s over, smile because it happened.', 
                'Be yourself; everyone else is already taken.', 
                'So many books, so little time.', 
                'You only live once, but if you do it right, once is enough.', 
                'Be the change that you wish to see in the world.'];
setInterval(() => {
    var random = Math.floor(Math.random()*5);
    process.stdout.write(myQuotes[random]+"\n");

},2000);
