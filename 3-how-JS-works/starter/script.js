///////////////////////////////////////
// Lecture: Hoisting
// calcAge(1999);

// function calcAge(year){
//   console.log(2018 - year);
//   console.log(this);
// }

// retirement(1987);

// var retirement = function(year){
//   console.log(65 - (2018 - year));
// }

var john = {
  name: "john",
  yearOfBirth: 1990,
  calcYear: function(){
    console.log(this);
    console.log(2016 - this.yearOfBirth);
    function innerFunction(){
      console.log(this);
    }
    innerFunction();
  }
};

john.calcYear();

var mike = {
  name: "mike",
  yearOfBirth: 1984,
};

mike.calcYear = john.calcYear;
mike.calcYear();






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









