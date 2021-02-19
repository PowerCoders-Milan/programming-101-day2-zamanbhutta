//insert your pseudocode below
/*
set hidden number in variable value 
set integer in random number value 1 to 100
set repeat until the correct number is find
print the hidden number correct one
here

*/

//insert your code below
var hidden_number, integer;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


hidden_number = 25;
integer = mathRandomInt(1, 100);
while (!(hidden_number == integer)) {
  integer = window.prompt('can you guess my number');
}
window.alert(hidden_number);