// 1st problem
//original version
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable)
// }
// console.log(first_variable);
//modified
  console.log(first_variable);
  //declarations get hoisted
  var first_variable;
  function firstFunc(){
    var first_variable;
    first_variable = "Not anymore!!!";
    console.log(first_variable);
  }
  //assignments and invocation maintain order
  first_variable = "Yipee I was first!";
  console.log(first_variable);

//2ed problem
//original version
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);
//modified
  //declarations get hoisted
  var food;
  function eat(){
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";
    console.log(food);
  }
  //assignments and invocation maintain order
  food = "Chicken";
  eat();
  console.log(food);

//3rd program
//original version
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
//modified
  //declarations get hoisted
  var new_word;
  function lastFunc(){
    new_word = "old";
  }
  //assignments and invocation maintain order
  new_word = "NEW!";
  console.log(new_word);
