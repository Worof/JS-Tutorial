var ten = 10;
console.log(ten);
//-->10
console.log(ten * ten);
// → 100

var mood = " light ";
console.log(mood);
// → light
mood = " dark ";
console.log(mood);
// → dark

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

var one = 1 , two = 2;
console . log ( one + two ) ;
// -> 3


/*A lot of the values provided in the default environment have the type
function. A function is a piece of program wrapped in a value. Such
values can be applied in order to run the wrapped program. For example, in a browser environment, the variable alert holds a function that
shows a little dialog box with a message. It is used like this:*/

alert (" Good morning !") ; //Executing a function is called invoking, calling, or applying it. 

/*Note: Most JavaScript
systems (including all modern web browsers and Node.js) provide a
console.log function that writes out its arguments to some text output
device.*/

//Note that all the functions will be loaded before the alert functions and the ones after the alert will wait until you press 'ok'

var x = 30;
console . log (" the value of x is " , x ) ; /*'console.log' is actually an expression that retrieves the log property from the value
held by the console variable.*/
// → the value of x is 30
