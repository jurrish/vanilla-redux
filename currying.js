//function that returns a function

// add = ( a, b ) => a + b;

refactored:

(a) => (b) => a + b;

add(12)(2);

//so, if i wanted to make a function that added 12 everytime, i could :
add12 = add(2);

add12(5) //returns 17
