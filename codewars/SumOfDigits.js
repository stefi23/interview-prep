/* 
Sum of Digits / Digital Root
https://www.codewars.com/kata/541c8630095125aba6000c00

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples:

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function digital_root(n) {
  n = n.toString();
   if(n.length === 1){
     return parseInt(n)
   }

 let result = n.split('').map(Number).reduce((a, b) => a + b)
 return digital_root(result)
}