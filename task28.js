let age = 70;
if (age < 2) {
  console.log("Baby");
} else if (age >= 2 && age < 4) {
  console.log("Toddler");
} else if (age >= 4 && age < 13) {
  console.log("Kid");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 65) {
  console.log("adult");
} else if (age > 65) {
  console.log("elder");
} else {
  console.log("Invalid Entry");
}
