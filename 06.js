// Write a function that checks if a number is even or odd and returns "EVEN" or "ODD" accordingly.


function checkEvenOdd(num){
    if(num % 2 == 0){
        return "EVEN";
    }
    else{
        return "ODD";
    }
}
console.log(checkEvenOdd(121));
