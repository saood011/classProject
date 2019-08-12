var time = 1;
const fivetimes=() => {
    console.log("hello world "+ time)
    time+=1;
};
console.log(time*1000)
setInterval(fivetimes, time * 1000);
