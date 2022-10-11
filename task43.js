let magicians = ["Mutthar", "Hasseb", "Ahmed", "Shoaib"];
let greatMagicians = [];

const makeGreat = (arr) => {
  arr.map((magician) => {
    magician = "Great " + magician;
    greatMagicians.push(magician);
  });
};

const showMagicians = (arr) => {
  magicians.map((mag) => console.log("Original Magicians: %s", mag));
  console.log("\n");
  greatMagicians.map((mag) => console.log("Great Magicians: %s", mag));
};

makeGreat(magicians);
showMagicians(magicians);
