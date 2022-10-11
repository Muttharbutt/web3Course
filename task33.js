let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 31];
numbers.map((num) => {
  let j = num % 10,
    k = num % 100;
  if (j == 1 && k != 11) {
    console.log(num + "st");
  } else if (j == 2 && k != 12) {
    console.log(num + "nd");
  } else if (j == 3 && k != 13) {
    console.log(num + "rd");
  } else {
    console.log(num + "th");
  }
});
console.log(1 % 10);
