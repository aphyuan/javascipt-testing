//Create a program that goes through each value in array x, where x is [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Have it log each value of the array.
var x =[3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for(var i = 0; i<x.length; i++){
  console.log(x[i]);
}
//Add a new value in the array x using a push method. New value you should add is 100.
x.push(100);
console.log(x);
//Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x = ["hello", "world", "JavaScript is Fun"];
console.log(x);
//Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var sum = 0;
for(var j = 1; j <= 500; j++){
  sum += j;
}
console.log(sum);
//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var newarr = [1, 5, 90, 25, -3, 0];
var min = newarr[0];
for(var k = 0; k<newarr.length;k++){
  if (newarr[k]<min){
    min = newarr[k];
  }
}
console.log(min);
//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var arrsum = 0;
for(var m = 0; m<newarr.length;m++){
  arrsum += newarr[m];
}
var avg = arrsum/newarr.length;
console.log(avg);
//Write a for in loop that will navigate through the object below (or write your own object)
var new_ninja = {name: 'Jessica',
profession: 'coder',
favorite_language: 'JavaScript', //like that's even a question!
dojo: 'Dallas'}
for (var key in new_ninja){
  if (new_ninja.hasOwnProperty(key)){
    console.log(key);
    console.log(new_ninja[key]);
  }
}
