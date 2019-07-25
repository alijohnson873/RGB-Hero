const addDivs = () => {
  // let htmlDiv = `<div class="color-panel comp-color"><h1>div here</h1></div>
  // <div class="color-panel player-color"></div>`;
  for (let i = 0; i < 500; i++) {
    // htmlDiv += htmlDiv;
    let tempDiv = document.createElement("div");

    if (i % 2 == 0) {
      tempDiv.classList.add("color-panel", "comp-color");
    } else {
      tempDiv.classList.add("color-panel", "player-color");
    }

    document.querySelector("main").appendChild(tempDiv);
  }
  // mainContainer.html(htmlDiv)
};
addDivs();

const compColor = $(".comp-color");
const playerColor = $(".player-color");
const colorPanel = $(".color-panel");
const mainContainer = $("main");

const randNumGenFive = () => Math.ceil((Math.random() * 255) / 5) * 5;

const playerRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
const compRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
const rgbStringFromArray = rgbArray => {
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};
const maxRGB = rgbValue => (rgbValue > 255 ? 255 : rgbValue);
const minRGB = rgbValue => (rgbValue < 0 ? 0 : rgbValue);

const rgbColorMatch = () => {
  if (playerRGBArray === compRGBArray) {
    return alert("you did it!");
  }
};

//calculate euclidean difference
const euclideanColorDiff = () => {
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

//start game
let rgbSwitch = 0;
compColor.css("background-color", rgbStringFromArray(compRGBArray));
playerColor.css("background-color", rgbStringFromArray(playerRGBArray));

const initEuDiff = euclideanColorDiff();
// let changedEuDiff = euclideanColorDiff();
// console.log("init is " + initEuDiff);
// console.log("changed is " + changedEuDiff);

//calculates border radius from euclidean difference
const borderRadiusEuclidean = () => {
  let changedEuDiff = euclideanColorDiff();
  let ratio = (changedEuDiff / initEuDiff) * 50;
  return ratio;
};

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
    playerRGBArray[rgbSwitch] += 10;
    playerRGBArray[rgbSwitch] = maxRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    rgbColorMatch();

    colorPanel.css("border-radius", `${borderRadiusEuclidean()}%`);
    // colorPanel.css("margin", `${borderRadiusEuclidean()}px`);

    console.log(playerRGBArray);
    console.log(compRGBArray);
    console.log(euclideanColorDiff());
  } else if (key === 40) {
    playerRGBArray[rgbSwitch] -= 10;
    playerRGBArray[rgbSwitch] = minRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    rgbColorMatch();

    colorPanel.css("border-radius", `${borderRadiusEuclidean()}%`);
    // colorPanel.css("margin", `${borderRadiusEuclidean()}px`);
    console.log(playerRGBArray);
    console.log(compRGBArray);
    console.log(euclideanColorDiff());
  }
});

//prevents scrolling in browser
$(window).keydown(function(e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

//console log what key is pressed
// $(document).keydown(function(event) {
//   let key = event.keyCode;
//   console.log(key);
// });
