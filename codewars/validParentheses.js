/* 
Valid Parentheses
https://www.codewars.com/kata/52774a314c2333f0a7000688

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Example:

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens){
  let count = 0 
  for(let i = 0 ; i < parens.length; i++){
    if(parens[i] === "("){
      count++
    }else if(parens[i] === ")") {
      count--
    }
    if(count < 0) return false
  }
  return count === 0 
}

//2:
function validParentheses(parens){
  let stack = []
  for(let i = 0; i < parens.length; i++){
    if(parens[i] === "("){
      stack.push(parens[i])
    }else if(parens[i] === ")"){
      if(stack.length === 0) {
        return false
      } else {
            stack.pop(parens[i])
        }
    }
  }
  return stack.length === 0
}