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
carBrands.map((brand) =>
  console.log(
    brand === "BMW" ||
      brand === "Ferrari" ||
      brand === "Honda" ||
      brand === "Tesla" ||
      brand === "BRV"
      ? true
      : false
  )
);
