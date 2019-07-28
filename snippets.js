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