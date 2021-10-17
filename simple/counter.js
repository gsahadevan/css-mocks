var counter = (function () {
  var ctr = 0;
  return function () {
    return ctr++;
  }
})();

counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

