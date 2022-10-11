const makeShirt = (size, message) => {
  console.log("Size of Shirt is %d\nText on Shirt is %s", size, message);
};
let size = prompt("Shirt Size");
let message = prompt("Shirt Message");
makeShirt(size, message);
