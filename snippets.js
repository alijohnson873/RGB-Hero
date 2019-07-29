const rgbCounter = () => {
  counterColor = 3
  if (counter === red )
}

['red', 'green', 'blue']


let rgbCounter = 0
rgbCounter += 1

if (rgbCounter >= 4) {
  rgbCounter = 0;
}




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


const rgbString = (red, green, blue) =>{
    return `rgb(${red}, ${green}, ${blue})`
  }

//can I make below shorter?
  const minMaxRGB = (rgbValue) => {
    if (rgbValue > 255) {
      return 255
    }
    else if (rgbValue < 0) {
      return 0
    }
    else {
      return rgbValue;
    }
  }

  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="grids.css">
    <title>RGB GRIDS</title>
</head>
<body>
    <main>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div><div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
        <div class ="color-panel comp-color"></div>
        <div class ="color-panel player-color"></div>
    </main>

    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="grids.js"></script>
</body>
</html>


const addDivs = () => {
  let htmlDiv = `<div class="color-panel comp-color"><h1>div here</h1></div>
  <div class="color-panel player-color"></div>`;
  for (let i=0; i < 5; i++){
    htmlDiv += htmlDiv;
  }
  mainContainer.html(htmlDiv)
}
addDivs()



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

//generate number between 0-250 rounded to 10 and generate rgb array string
const randNumGenFive = () => Math.ceil((Math.random() * 250) / 10) * 10;
const playerRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
const compRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
const rgbStringFromArray = rgbArray => {
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};
// limit RGB values to 0-250
const maxRGB = rgbValue => (rgbValue > 250 ? 250 : rgbValue);
const minRGB = rgbValue => (rgbValue < 0 ? 0 : rgbValue);

//start game by adding random RGB color strings to player and computer divs
const resetColors = () => {
  const playerRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
  const compRGBArray = [randNumGenFive(), randNumGenFive(), randNumGenFive()];
  compColor.css("background-color", rgbStringFromArray(compRGBArray));
  playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
};
resetColors();

//calculate color difference between arrays as euclidean distance value
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
  if (changedColorDiff <= 0) {
    alert("You smashed it! Color differnce is 0!");
    colorPanel.css("margin", "0");
    clearInterval(interval);
  }
};

//high-score
const highScoreHTML = $("#highScore");
let highScore = 99999;
const updateScore = () => {
  let cd = colorDiff();
  if (cd < highScore) {
    highScore = cd;
  }
  highScoreHTML.html(`<h2>High Score:${highScore}</h2>`);
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
    playerRGBArray[rgbSwitch] += 10;
    playerRGBArray[rgbSwitch] = maxRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    rgbColorMatch();

    // colorPanel.css("border-radius", `${borderRadiusEuclidean()}%`);

    // console.log(playerRGBArray);
    // console.log(compRGBArray);
    console.log(colorDiff());

    rgbColorMatch();
  } else if (key === 40) {
    playerRGBArray[rgbSwitch] -= 10;
    playerRGBArray[rgbSwitch] = minRGB(playerRGBArray[rgbSwitch]);
    playerColor.css("background-color", rgbStringFromArray(playerRGBArray));
    rgbColorMatch();
    // colorPanel.css("border-radius", `${borderRadiusEuclidean()}%`);

    // console.log(playerRGBArray);
    // console.log(compRGBArray);
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

//start count down and updated counter HTML

let counter = 20;
const counterHTML = $("#counter");
const scoreModal = $("#score-modal");
let interval;

//why does it start immediately?

const countdown = () => {
  counter -= 1;
  counterHTML.html(`<h2>${counter}s</h2>`);

  if (counter === 0) {
    colorPanel.css("margin", "0px");
    scoreModal.html(`<h3>Colour difference: ${colorDiff()}</h3>`);
    colorPanel.css("border-radius", "0%");
    clearInterval(interval);
    updateScore();
    counter = 20;
  }
};

$("#start").click(() => {
  interval = setInterval(countdown, 1000);
  colorPanel.css("border-radius", "50%");
  colorPanel.css("margin", "10px");
  resetColors();
});
