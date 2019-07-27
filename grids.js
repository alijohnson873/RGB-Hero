//add divs with different class names
const addDivs = () => {
  for (let i = 0; i < 500; i++) {
    let tempDiv = document.createElement("div");
    if (i % 2 == 0) {
      tempDiv.classList.add("color-panel", "comp-color");
    } else {
      tempDiv.classList.add("color-panel", "player-color");
    }
    document.querySelector("main").appendChild(tempDiv);
  }
};
addDivs();

const compColor = $(".comp-color");
const playerColor = $(".player-color");
const colorPanel = $(".color-panel");
const mainContainer = $("main");

//generate number between 0-255 rounded to 5 and generate rgb array string
const randNumGenFive = () => Math.ceil((Math.random() * 255) / 5) * 5;
const playerRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
const compRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
const rgbStringFromArray = rgbArray => {
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};
// limit RGB values to 0-255
const maxRGB = rgbValue => (rgbValue > 255 ? 255 : rgbValue);
const minRGB = rgbValue => (rgbValue < 0 ? 0 : rgbValue);

//calculate color difference between arrays as euclidean value
const colorDiff = () => {
  let redDifference = compRGBArray[0] - playerRGBArray[0];
  let greenDifference = compRGBArray[1] - playerRGBArray[1];
  let blueDifference = compRGBArray[2] - playerRGBArray[2];
  let eucDiff = Math.sqrt(
    redDifference * redDifference +
      greenDifference * greenDifference +
      blueDifference * blueDifference
  );
  return Math.round(eucDiff);
};

//start game by adding random RGB color strings to player and computer divs
compColor.css("background-color", rgbStringFromArray(compRGBArray));
playerColor.css("background-color", rgbStringFromArray(playerRGBArray));

//return border radius as ratio of color difference
const initEuDiff = colorDiff();
const borderRadiusEuclidean = () => {
  let changedEuDiff = colorDiff();
  let ratio = (changedEuDiff / initEuDiff) * 50;
  return ratio;
};

//win game by matching colors
const rgbColorMatch = () => {
  let changedColorDiff = colorDiff();
  if (changedColorDiff <= 10) {
    alert("hello");
  }
};

//red green blue switch
let rgbSwitch = 0;
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
    playerRGBArray[rgbSwitch] += 5;
    playerRGBArray[rgbSwitch] = maxRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    rgbColorMatch();
    colorPanel.css("border-radius", `${borderRadiusEuclidean()}%`);

    console.log(playerRGBArray);
    console.log(compRGBArray);
    console.log(colorDiff());

    rgbColorMatch();
  } else if (key === 40) {
    playerRGBArray[rgbSwitch] -= 5;
    playerRGBArray[rgbSwitch] = minRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    rgbColorMatch();
    colorPanel.css("border-radius", `${borderRadiusEuclidean()}%`);

    console.log(playerRGBArray);
    console.log(compRGBArray);
    console.log(colorDiff());

    rgbColorMatch();
  }
});

//prevent scrolling in browser on up and down press
$(window).keydown(function(e) {
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);
