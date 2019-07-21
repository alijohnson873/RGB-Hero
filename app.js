const compColor = $("#comp-color");
const playerColor = $("#player-color");

const randNumGen = () => Math.floor(Math.random() * 255);
const playerRGBArray = [randNumGen(), randNumGen(), randNumGen()];
const compRGBArray = [randNumGen(), randNumGen(), randNumGen()];
const rgbStringFromArray = rgbArray => {
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};
const maxRGB = rgbValue => (rgbValue > 255 ? 255 : rgbValue);
const minRGB = rgbValue => (rgbValue < 0 ? 0 : rgbValue);

const showPlayerRGB = () => {
  playerColor.html(
    `<h1> Red: ${playerRGBArray[0]}<br>
    Green: ${playerRGBArray[1]}<br>
    Blue: ${playerRGBArray[2]}<br>
  </h1>`)
}

//start game
let rgbSwitch = 0;
compColor.css("background-color", rgbStringFromArray(compRGBArray));
playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
showPlayerRGB();

//red green blue switch
$(document).keydown(function(event) {
  let key = event.keyCode;
  if (key === 65) {
    rgbSwitch = 0;
  } else if (key === 87) {
    rgbSwitch = 1;
  } else if (key === 68) {
    rgbSwitch = 2;
  }
});

//change RGB value on up and down press
$(document).keydown(function(event) {
  let key = event.keyCode;
  if (key === 38) {
    playerRGBArray[rgbSwitch] += 1;
    playerRGBArray[rgbSwitch] = maxRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    showPlayerRGB();
    console.log(playerRGBArray);
  } else if (key === 40) {
    playerRGBArray[rgbSwitch] -= 1;
    playerRGBArray[rgbSwitch] = minRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    showPlayerRGB();
    console.log(playerRGBArray);
  }
});






//consoe log what key is pressed
$(document).keydown(function(event) {
  let key = event.keyCode;
  console.log(key);
});
