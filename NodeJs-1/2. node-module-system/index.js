let firstModule = require("./first-module");

console.log(firstModule.subtarct(20, 10));

try {
  console.log("Dividing");
  let temp = firstModule.divide(10, 0);
  console.log(temp);
} catch (error) {
  console.log("Error : ", error.message);
}
