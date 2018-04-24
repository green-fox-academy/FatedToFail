const myList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const targetNumber = 150;

function makeItSature(hexanumber) {
  const red = myList.indexOf(hexanumber.charAt(0)) * 16 + myList.indexOf(hexanumber.charAt(1));
  const green = myList.indexOf(hexanumber.charAt(2)) * 16 + myList.indexOf(hexanumber.charAt(3));
  const blue = myList.indexOf(hexanumber.charAt(4)) * 16 + myList.indexOf(hexanumber.charAt(5));
  
  const mainColorFinder = [red - 150, green - 150, blue - 150, (150 - red) * 0.7, (150 - green) * 0.7, (150 - blue) * 0.7];
  let mainColorindex = 0;
  let mainColoValue = 0;
  mainColorFinder.forEach((color, i) => {
    if (mainColoValue < color) {
      mainColorindex = i;
      mainColoValue = color;
    }
  });

  let startingPoint = 0;

  for(let i = 0; i < 20; i++) {
    if(mainColoValue > i * 5.25 && (i + 1) * 5.25 > mainColoValue) {
      startingPoint = i;
    }
  }

  redScale = (red - 150) / (startingPoint + 1);
  greenScale = (green - 150) / (startingPoint + 1);
  blueScale = (blue - 150) / (startingPoint + 1);

  let mySaturedList = [];

  for(let i = 0; i < 20; i++) {
    const newRed = Math.floor(red - redScale * (i - 19 + startingPoint));
    const newHexaRed = myList[Math.floor(newRed / 16)] + myList[newRed % 16];
    const newGreen = Math.floor(green - greenScale * (i - 19 + startingPoint));
    const newHexaGreen = myList[Math.floor(newGreen / 16)] + myList[newGreen % 16];
    const newBLue = Math.floor(blue - blueScale * (i - 19 + startingPoint));
    const newHexaBlue = myList[Math.floor(newBLue / 16)] + myList[newBLue % 16];
    mySaturedList.push(`${newHexaRed}${newHexaGreen}${newHexaBlue}`);
  }
  console.log(mySaturedList);
}

makeItSature('31c6c8');
