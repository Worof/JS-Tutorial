///////////////////////*******Defining a function *********//////////////////////////

/*A function definition is just a regular variable definition where the value
given to the variable happens to be a function*/

var square = function (x) {
    return x * x;
};
console.log(square(12));
// → 144


/*A function is created by an expression that starts with the keyword
function with a set of parameters and a body*/

var makeNoise = function () {
    console.log(" Pling !");
};
makeNoise();
// → Pling !
var power = function (base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;

    }
    return result;

};
console.log(power(2, 10));
// → 1024
/*NOTE: Some functions produce a value, such as power and square, and some don’t,
such as makeNoise, which produces only a side effect.*/








////////////////////////////////////////////////////////////////****************************************************
/////////////////////////////////////////PARAMETERS AND SCOPE************////////////////////////////////////////////////////////

/*The parameters to a function behave like regular variables, but their
initial values are given by the caller of the function, not the code in the
function itself.
*/

//The difference between global and local variables in the function scope//

var x = " outside ";
var f1 = function () {
    var x = " inside f1 ";
};
f1();
console.log(x);
// → outside
var f2 = function () {
    x = " inside f2 ";
};
f2();
console.log(x);
// → inside f2

/*SOME NOTES: 1)The usage of local variables helps prevent accidental interference between functions.
If all variables were shared by the whole program, it’d take a lot of effort
to make sure no name is ever used for two different purposes.
2) By treating function-local variables as existing only within the function, the language makes
it possible to read and understand functions as small universes, without
having to worry about all the code at once. 
*/










///////////////////////////NESTED SCOPE///////////////////////////

var landscape = function () {
    var result = "";
    var flat = function (size) {
        for (var count = 0; count < size; count++)
            result += " _ ";
    };
    var mountain = function (size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += " '";
        result += "\\";
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};
console.log(landscape());
// → ___ / ' ' ' '\ ______ / '\ _


/////////////////////FUNCTIONS AS VALUES ///////////////////////

/* A function value can do all the things that
other values can do—you can use it in arbitrary expressions, not just
call it.*/
var launchMissiles = function (value) {
    let safeMode = true;

    if(!safeMode){
        missileSystem.launch(" now ");


    } else {
        console.log("Launch prevented by safe mode.");
    }
};
launchMissiles(false) //note that's just a basic example
