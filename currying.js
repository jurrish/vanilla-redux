//function that returns a function

// add = ( a, b ) => a + b;

refactored:

(a) => (b) => a + b;

add(12)(2);

//so, if i wanted to make a function that added 12 everytime, i could :
add12 = add(2);

add12(5) //returns 17


// =============================
greet = (name, end) => console.log(name, end);

greet = (name) => (end) => console.log(name, end);

now greet can be invoked as greet('whomever')('with whateverend');

es5:

function greet(name) {
  return function log(end) {
    console.log(name, end)
  }
};

greet('JR')('knows currying kinda');

//the functions are just arguments
