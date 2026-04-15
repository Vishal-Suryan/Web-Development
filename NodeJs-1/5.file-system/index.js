const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder is created.");
}

const filePath = path.join(dataFolder, "example.txt");
//synchronous way of creating
fs.writeFileSync(filePath, "Hello from Node Js");
console.log("File created successfully!");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File Content:", readContentFromFile);

// apppend to file
fs.appendFileSync(filePath, "\nThis is a added new line.");
console.log("New lile added");

//async way of creating file
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async node js", (err) => {
  if (err) throw err;
  console.log("Async file is created successfully");

  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Async file content: ", data);

    fs.appendFile(asyncFilePath, "\nThis is another line.", (err) => {
      if (err) throw err;
      console.log("New line added to Async file.");
    });
  });
});
