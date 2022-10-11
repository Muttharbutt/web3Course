const makeShirt = (size, message) => {
  if (size === "large" || size === "medium")
    console.log(
      "\nShirt size is %s\nText on Shirt is 'I love JavaScript'",
      size
    );
  else {
    console.log("\nShirt size is %s\nText on Shirt is %s", size, message);
  }
};
let size = prompt("Shirt Size");
let message = prompt("Shirt Message");
makeShirt(size, message);
