let firstNumber = 15;
let secondNumber = 17;
console.log(firstNumber,secondNumber)

let temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
console.log(firstNumber,secondNumber)

firstNumber = 15;
secondNumber = 17;
[firstNumber, secondNumber] = [ secondNumber, firstNumber]; 
console.log(firstNumber,secondNumber)

firstNumber = 15;
secondNumber = 17;
 let arrayName = [firstNumber,secondNumber];
 firstNumber = arrayName[1];
 secondNumber = arrayName[0];
 console.log(firstNumber,secondNumber);

