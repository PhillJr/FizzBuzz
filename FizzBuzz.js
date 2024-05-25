// //FizzBuzz Code
// You are given a positive integer number `n`, where it is less than 100 (excluded).

// For every number up to `n` (included):

// - Print `Fizz` if the number is divisible by `3`.
// - Print `Buzz` if the number is divisible by `5`.
// - Print `FizzBuzz` if the number is divisible by both `3` and `5`.
// - Print the number if it is not divisible by `3` or `5`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `fizzBuzz` using JavaScript that solves the above problem and satisfies the conditions.

function fizzBuzz(n){
if(n < 1 || n >= 100)
     {
        console.log("Error");
        return
    }

    for (let index = 1; index <= n; index++) {
       // console.log(index);     
        if (index % 3 === 0 && index % 5 === 0) {
            console.log("FizzBuzz");
        } else if(index % 3 === 0){
           console.log("Fizz");
        } else if(index % 5 === 0){
           console.log("Buzz");
        } else {
            console.log(index);
        }
        
      }
    
};

fizzBuzz(0);
fizzBuzz(100);
fizzBuzz(16);