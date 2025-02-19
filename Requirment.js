/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class pt {
  constructor(coordX, coordY) {
    this.coordX = coordX;
    this.coordY = coordY;
  }
}

class Rectangle {
  constructor(topLeftPoint, width, height) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width or Height"); 
    }
    this.topLeftPoint = topLeftPoint;
    this.width = width; 
    this.height = height; 
  }

  // ***************
  // METHODS
  // ***************

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  setHeight(height) {
    if (height && height > 0) {
      this.height = height;
    }
  }

  setWidth(width) {
    if (width && width > 0) {
      this.width = width;
    }
  }

  update({ topLeftPoint, width, height }) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width or Height"); 
    }
    this.topLeftPoint = topLeftPoint;
    this.width = width;
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  printEndPoints() {
    const topRight = this.topLeftPoint.coordX + this.width;
    const bottomLeft = this.topLeftPoint.coordY + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }
}

function buildRectangle(x, y, width, height) {
  const mainPoint = new pt(x, y);
  const rect = new Rectangle(mainPoint, width, height);
  return rect;
}

function buildSquare(x, y, length) {
  if (!length || length <= 0) {
    throw Error("invalid Length");
  }
  let square = buildRectangle(x, y, length, length);
  const squareArea = square.getArea();
  const squarePerimeter = square.getPerimeter();
  console.log("square Area ", squareArea);
  console.log("square Perimeter ", squarePerimeter);
  return square;
}

const rectangleObject = buildRectangle(2, 3, 5, 4);
const squareObject = buildSquare(2, 3, 5);

console.log(squareObject.getPerimeter());
squareObject.printEndPoints();

rectangleObject.setHeight(3);
