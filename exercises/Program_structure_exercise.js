/////////////******Looping a triangle ***//////////////////
let line = '#';
for(var i= 0; i <= 5; i++){
    console.log(line)
    line += '#'
}




/////////////////////////*****FizzBuzz *****///////////////////////
for (i = 1; i <= 100; i++){
    if (i%3 === 0 || i%5 === 0){
        console.log('BuzzFizz')
    }
    if (i%3 === 0){
        console.log('Fizz')
    }
    if (i%5 === 0){
        console.log('Buzz')
    }
}