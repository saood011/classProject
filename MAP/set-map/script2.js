var set1 = new Set(['x', 'a', 'y', 'w'].sort());
var set2 = new Set(['5', '2', '9', '10'].sort((a,b)=>a-b));

var counterstr = 0;
var counternum = 0;

var map = new Map();

for( let key of set1){
    for (let value of set2){
        if(counterstr==counternum){
            map.set(key, value)
        }
            counternum++;
        }
        counterstr++;
        counternum = 0
    }

console.log(map) 