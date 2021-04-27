/*
Simple Pig Latin
https://www.codewars.com/kata/520b9d2ad5c005041100000f

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  const arr = str.split(" ")
  for(let i = 0; i < arr.length; i++){
 
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    const found = arr[i].match(regex);
    if(found){
      continue
    }
    
    arr[i] = arr[i].substring(1) + arr[i][0] + "ay"
  }
 
  return arr.join(" ")
  
}