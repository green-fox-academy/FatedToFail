let sharpies = (color, width) => {
  return {
    color: color,
    width: width,
    inkAmount: 100,
    use: function() {
      this.inkAmount -= width;
    }
  };
};

let mySharpie = sharpies('red', 13);

while(mySharpie.inkAmount > 0) {
  mySharpie.use();
  console.log(mySharpie.inkAmount);
}
