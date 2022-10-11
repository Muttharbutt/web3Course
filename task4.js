let sentence = "my name is mutthar butt";
const titleCase = (str) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
console.log(
  "Upper Case: %s \n Lower Case: %s \n Title Case: %s",
  sentence.toUpperCase(),
  sentence.toLowerCase(),
  titleCase(sentence)
);
