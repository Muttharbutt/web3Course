let magicians = ["Mutthar", "Hasseb", "Ahmed", "Shoaib"];
console.log("\tOriginal Magicians\n");
magicians.map((mag) => console.log(mag));
const showMagicians = (arr) => {
  console.log("\n\tModifed Magicians\n");
  arr.map((magician) => {
    magician = "Great " + magician;
    console.log(magician);
  });
};

showMagicians(magicians);
