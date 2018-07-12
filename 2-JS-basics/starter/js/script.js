// // C1
// var massMark = 78; //kg
// var heightMark = 1.69; //meters

// var massJohn = 92; //kg
// var heightJohn = 1.95; //meters

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// var markHeightBMI = BMIMark > BMIJohn;
// console.log("is Mark's BMI height than John's?" + markHeightBMI);

// // C2

// var johnTeamAvg = (89 + 120 + 103) / 3;
// var markTeamAvg = (116 + 94 + 123) / 3;
// var maryTeamAvg = (97 + 134 + 105) / 3;

// if (johnTeamAvg > markTeamAvg && johnTeamAvg > maryTeamAvg) {
//   console.log("johnTeamAvg avg higher");
// } else if (markTeamAvg > johnTeamAvg && markTeamAvg > maryTeamAvg) {
//   console.log("markTeamAvg avg higher");
// } else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > markTeamAvg) {
//   console.log("maryTeamAvg avg higher");
// } else {
//   console.log("same avg scroe");
// }

/*****************************
* CODING CHALLENGE 5
*/

var John = {
  name: "John",
  bills: [124, 48, 268, 180, 42],
  calcTip: function() {
    this.tip = [];
    this.finalValue = [];
    for (let i = 0; i < this.bills.length; i++) {
      var penentage;
      var bill = this.bills[i];
      if (bill < 50) {
        penentage = 0.2;
      } else if (bill > 50 && bill < 200) {
        penentage = 0.15;
      } else if (bill > 200) {
        penentage = 0.1;
      }
      this.tip[i] = bill * penentage;
      this.finalValue[i] = bill + bill * penentage;
    }
  }
};
John.calcTip();
console.log(John);

var Mark = {
  name: "Mark",
  bills: [77, 475, 110, 45],
  calcTip: function() {
    this.tip = [];
    this.finalValue = [];
    for (let i = 0; i < this.bills.length; i++) {
      var penentage;
      var bill = this.bills[i];
      if (bill < 100) {
        penentage = 0.2;
      } else if (bill > 100 && bill < 300) {
        penentage = 0.1;
      } else if (bill > 300) {
        penentage = 0.25;
      }
      this.tip[i] = bill * penentage;
      this.finalValue[i] = bill + bill * penentage;
    }
  }
};
Mark.calcTip();
console.log(Mark);

function calcAvg(tips){
  var sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length
}

John.avg = calcAvg(John.tip);
Mark.avg = calcAvg(Mark.tip);

if(John.avg > Mark.avg){
  console.log('John\'s falimy is higher');
}else{
  console.log("Mark\'s falimy is higher");
}

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
