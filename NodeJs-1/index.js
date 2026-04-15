const lodash = require("lodash");

const names = ["ab", "cd", "ef"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
