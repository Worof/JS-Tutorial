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


/*Browser environments contain other functions besides alert for popping
up windows. You can ask the user an OK/Cancel question using confirm.
This returns a Boolean: true if the user clicks OK and false if the user
clicks Cancel.*/

//confirm (" Shall we , then ?") ;

/*The prompt function can be used to ask an “open” question. The first
argument is the question, the second one is the text that the user starts
with. A line of text can be typed into the dialog window, and the
function will return this text as a string.*/

//prompt (" Tell me everything you know ." , "...") ;

/*BTW!!! These two functions aren’t used much in modern web programming,
mostly because you have no control over the way the resulting windows
look, but they are useful for toy programs and experiments.*/


//////////////////*CONTROL FLOW*//////////////

/*When your program contains more than one statement, the statements
are executed, predictably, from top to bottom. As a basic example, this
program has two statements:
The first one asks the user for a number,
and the second, which is executed afterward, shows the square of that
number.*/

/*var theNumber = Number ( prompt (" Pick a number " , "") ) ;
alert (" Your number is the square root of " +
theNumber * theNumber ) ;*/

/////////////////////////*** conditional execution*****///////////////////

/*Conditional execution is written with the if keyword in JavaScript. In
the simple case, we just want some code to be executed if, and only if,
a certain condition holds.*/

/*var theNumber = Number ( prompt (" Pick a number " , "") ) ;
if (! isNaN ( theNumber ) )
alert (" Your number is the square root of " +
theNumber * theNumber ) ;
else{
    alert("Enter a number please.")
}*/

/*If we have more than two paths to choose from, multiple if/else pairs
can be “chained” together. Here’s an example:*/
var num = Number ( prompt (" Pick a number " , "0") ) ;
if ( num < 10)
alert (" Small ") ;
else if ( num < 100)
alert (" Medium ") ;
else
alert (" Large ") ;


//////////////****while and do loops ***/////////////////////
var result = 1;
var counter = 0;
while ( counter < 10) {
result = result * 2;
counter = counter + 1;
}
console . log ( result ) ;
// → 1024
