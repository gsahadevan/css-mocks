var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();

add();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

