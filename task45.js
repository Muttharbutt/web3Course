let carDetails = [];

const makeYourCar = (manufacturerName, model, color, drive) => {
  carDetails.push({
    manufacturerName: manufacturerName,
    model: model,
    color: color,
    drive: drive,
  });
};
makeYourCar("Toyota", "BRV", "White", "4DW");
makeYourCar("Tesla", "S2", "Grey", "Auto");
console.log(carDetails);
