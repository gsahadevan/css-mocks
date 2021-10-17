function Shape() {}
Shape.prototype.draw = function(message) {
  console.log('this is a shape ' + message);
}

function Circle() {}
Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function(message) {
  console.log('this is a circle ' + message);
}

var circle = new Circle();
circle.draw('small circle');

var square = new Shape();
square.draw('small square');
