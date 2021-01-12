var today = new Date();
var hourNow = today.getHours();
var greeting;
var reminder;

if (hourNow > 18) {
    greeting = 'Good evening Godfrey!';
    reminder = 'It\'s time for some Javascript'
} else if (hourNow > 12) {
    greeting = 'Good afternoon Godfrey!';
    reminder = 'It\'s time for a break'
} else if (hourNow > 0) {
    greeting = 'Good morning Godfrey!';
    reminder = 'It\'s time for some Simplilearn studies'
} else {
    greeting = 'Welcome!';
    reminder = 'You\'re making progress'
}

document.write('<h3>' + greeting  + '</h3>' + '<h2>' + reminder + '</h2>');


// let a = +prompt("Enter first parameter (a)","1");
// let b = +prompt("Enter second parameter (b)","100");
// let result = [];
// let evens;
// while(a<= b){
//     let divisor = a%2;
//     if (divisor == 0){
//         evens = result.push(a);    
//     } 
//     a+=1;
// }
// console.log ("Your even numbers are" + result);

/*let symbol = "#";
for (let counter =0; counter<7; counter++){
    console.log (symbol);
    symbol+="#";
}
let output = "";
for (let number = 1; number<=100; number++){
    if(number%3==0 && number%5==0){
        output+="FizzBuzz, ";
    }else if(number%5==0){
        output+="Buzz, ";
    }else if(number%3==0){
        output+="Fizz, ";
    }
    else{
        output+=number+", ";
    }
}
console.log(output);

let size = +prompt("enter number", "0");

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/