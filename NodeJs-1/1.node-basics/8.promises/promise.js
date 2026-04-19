function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("START");
delayFn(2000).then(() => console.log("After 2 sec promise resolved"));
console.log("END");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error, "err"));
