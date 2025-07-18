const hexBtn = document.querySelector(".hex-button");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorGenerator = document.querySelector(".hex-color-generator");
const hexCopyBtn = document.querySelector(".hex-copy");
// Random hex
hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";
  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }
  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorGenerator.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
});

//RGB
const rgbBtn = document.querySelector("#rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorGenerator = document.querySelector(".rgb-color-generator");
const rgbCopyBtn = document.querySelector(".rgb-copy");
const rgbColorValue = document.querySelector(".rgbColorValue");
rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  rgbColorValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbColorGenerator.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
});

function copyHexToClipBoard() {
  navigator.clipboard.writeText("hexColorValue.textContent");
  alert("Hex Color is copied to clipboard");
}
hexCopyBtn.addEventListener("click", copyHexToClipBoard);
function copyRgbToClipBoard() {
  navigator.clipboard.writeText("rgbColorValue.textContent");
  alert("RGB Color is copied to clipboard");
}
rgbCopyBtn.addEventListener("click", copyRgbToClipBoard);
