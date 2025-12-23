const btn = document.getElementById("btn");
const hexValue = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

btn.addEventListener("click", function () {
  console.log("btn is clicked");
});

// const randomHexValue = Math.floor(Math.random() * hexValue.length);

function randomHexValue() {
  return Math.floor(Math.random() * hexValue.length);
}
console.log(randomHexValue);
function hexValueGenerator() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexValue[randomHexValue()];
    console.log(hexColor);
  }
}

hexValueGenerator();
