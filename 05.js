// write a function that takes a string and return the reversed version of instanceof.

let str = "hello world"

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString(str));