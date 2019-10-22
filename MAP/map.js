const dci = new Map();
dci.set("Address", "Huttenstrasse").set("Location", "Dusseldorf").set("Course", "Web Development");
console.log(dci);
dci.set("Course", "Marketing")
console.log(dci.size)
dci.clear()
console.log(dci.size)

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

 console.log(prices);