let set = new Set(["saood", "hasan","ayham", "lava"]);
let map = new Map();
for (let value of set) {
    map.set(value, value.split("").reverse().join(""))
}
console.log(map);

