const makeMySandwich = (items) => {
  items.map((item) => {
    console.log("Your Sandwich will have %s", item);
  });
  console.log("\n");
};

makeMySandwich(["Cucumber", "Sauces", "Mushrooms"]);
makeMySandwich(["Tomato", "Cheese", "Chicken"]);
makeMySandwich(["Salad", "Kethup", "Beef"]);
