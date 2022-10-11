let carBrands = [
  "BMW",
  "Ferrari",
  "Honda",
  "Toyota",
  "Suzuki",
  "Tesla",
  "BRV",
  "Audi",
  "BMW2",
  "YBR",
];
// Test whether an item is in a array
// Test whether an item is not in a array
// Tests using "or" operators
carBrands.map((brand) =>
  console.log(
    "Brand is Present in Array Or Not: ",
    brand === "BMW" ||
      brand === "Ferrari" ||
      brand === "Honda" ||
      brand === "Tesla" ||
      brand === "BRV"
      ? true
      : false
  )
);

// Tests using "and" operators
let brand = "BMW";
let brand2 = "Ferrari";
console.log(
  "\nAre you rich? ",
  brand === "BMW" && brand2 === "Ferrari" ? true : false
);

//• Tests for equality and inequality with strings
let str1 = "Mutthar";
let str2 = "muttharButt";
console.log("\nStrings Comparison: ", str1 === str2 ? true : false);

//• Tests using the lower case function
let st1 = "Mutthar";
let st2 = "mutthar";
console.log("\nUpper/Lower Case Comparison: ", st1 === st2 ? true : false);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num2 = 10;
for (let num1 = 1; num1 <= num2; num1++) {
  if (num1 === num2) {
    console.log("\n%d- Numbers are Equal", num1);
  }
  if (num1 != num2) {
    console.log("\n%d-Numbers are Not Equal", num1);
  }
  if (num1 > num2) {
    console.log("\n%d-Num1 is greater", num1);
  }
  if (num1 < num2) {
    console.log("\n%d-Num2 is greater", num1);
  }
}
