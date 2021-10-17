var x;
console.log(x);
var z = typeof(x);
var z1 = typeof(y);
//console.log(y);
console.log(z);
console.log(z1);
console.log(typeof x === 'undefined');
var y = 23;
var y1 = 'h';
var y2 = "h";
var y3 = "hello";
var y4 = 'hello';
var y5 = true;
console.log(typeof y );
console.log(typeof y1 );
console.log(typeof y2 );
console.log(typeof y3 );
console.log(typeof y4 );
console.log(typeof y5 );



var a = function() {
  return "hello";
}

console.log(typeof a);
console.log(a);
console.log(a());


console.log(a.toString());




var student = { name:"Bill", age: 25, degree: "Masters" };
for (var item in student) {
   console.log(student[item]);     // => "Bill", then 25, then "Masters"
}

var Student = function(name) {
    this.name = name;
}
Student.prototype.age = 38;
var student = new Student("Carl");
for (var item in student) {
   if (student.hasOwnProperty(item)) {
       console.log (student[item]);         // => Carl. age is not displayed
   }
}
