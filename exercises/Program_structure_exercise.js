/////////////******Looping a triangle ***//////////////////
let line = '#';
for (var i = 0; i <= 5; i++) {
    console.log(line)
    line += '#'
}




/////////////////////////*****FizzBuzz *****///////////////////////
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 === 0) {
        console.log('Fizz')
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}

/////////////////////////*****CHESS BOARD *////////////////////
let size = 8;
let board = "";

for (let y =0; y < size; y++){
    for (let x = 0; x< size; x++){ 
        if((x+y)%2 === 0){
            board += " ";
        } else{
            board += "#"
        }
    }
    board += "\n"
}

console.log(board)