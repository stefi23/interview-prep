/*
Permutations
https://www.codewars.com/kata/5254ca2719453dcc0b00027d

In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.

*/

function permutations(str) {
 
  if(!str || typeof str !== "string") {
    return "Please add a string!"
  } else if (str.length < 2){
    return [str]
  }
  
   let results = []
  
  for (let i = 0; i< str.length; i++){
    
    let char = str[i]
    
    if(str.indexOf(char) != i) {
      continue
    }
      
    let remainingChar = str.slice(0,i) + str.slice(i+1, str.length)
    

    let permuatatedChar = permutations(remainingChar)
    for(permutation of permuatatedChar){
      results.push(char + permutation)
    }
  }
      
  return results
}

//2


function permutations(string) {
    if (!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2 ){
    return [string]
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    let otherPermutation = permutations(remainingChars)
    for (let permutation of otherPermutation){
      permutationsArray.push(char + permutation) }
  }
    
  return  [...new Set(permutationsArray)];
 
}