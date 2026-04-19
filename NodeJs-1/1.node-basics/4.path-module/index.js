const path = require("path");

//gets the directory name
console.log("Directory name:", path.dirname(__filename));

//gets the filename
console.log("File name:", path.basename(__filename));

//gets the file extension
console.log("Extension Name:", path.extname(__filename));

// Join path
const joinPath = path.join("/users", "abc", "xyz");
console.log("Joined Path: ", joinPath);

// Resolve Path ->absolute Path
const resolvePath = path.resolve("user", "documents", "node");
console.log("Resolve Path: ", resolvePath);

//Normalize Path
const normalizePath = path.normalize("/user/.documents/../node/project");
console.log("Normalize Path: ", normalizePath);
