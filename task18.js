const original = ["K2", "Nanga Parbat", "Mount everist", "Hunza", "GB"];
console.log("\tOriginal Array");
original.map((location) => console.log(location));
const locations = [...original];

//Sorted Aplhabetically
console.log("\n\n\tSorted Aplhabetically");
locations.sort().map((loc) => console.log(loc));

//Original Array
console.log("\n\n\tOriginal Array");
original.map((loc) => console.log(loc));

//Reversed Array
console.log("\n\tReserve Array ");
original.reverse().map((location) => console.log(location));

//Back to Original Array
console.log("\n\tBack to Original Array");
original.reverse().map((location) => console.log(location));

//Sorted Aplhabetically
console.log("\n\n\tSorted Aplhabetically");
original.sort().map((loc) => console.log(loc));

//Sorted Reversed Aplhabetically
console.log("\n\n\tSorted Reversed Aplhabetically");
original.reverse().map((loc) => console.log(loc));
