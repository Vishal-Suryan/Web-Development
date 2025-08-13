// fs (filesystem) is inbuilt module in nodejs
const fs = require("fs");
// synchronous call
fs.writeFileSync("./test.txt", "Hello");
// overwrites file
fs.writeFileSync("./test.txt", "Hello World");

//Async Call
fs.writeFile("./test1.txt", "Async Call", (err) => {});
// sync
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

// Difference between async and sync call is that async call also expects an callback function to
// handle error

// async
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(result);
  }
});

// append
fs.appendFileSync("./test.txt", `\n${new Date().getDate().toLocaleString()}`);

// copy
//fs.cpSync("test.txt", "test1.txt");

// delete
//fs.unlinkSync("test1.txt");
