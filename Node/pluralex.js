var time = 1;
const fivetimes=() => {
    console.log("hello world "+ time)
    time+=1;
};

setInterval(fivetimes, time * 1000);
