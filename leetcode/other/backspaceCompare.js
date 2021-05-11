/*
844. Backspace String Compare
https://leetcode.com/problems/backspace-string-compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
*/

var backspaceCompare = function(s, t) {
    const resultS = [];
    const resultT = [];
    
    for(const char of s ) {
        if(char === "#") {
          resultS.pop()
        } else {
          resultS.push(char)
        }
    }
    
    for(const char of t ) {
        if(char === "#") {
          resultT.pop()
        } else {
          resultT.push(char)
        }
    }
    
  return resultS.join("") === resultT.join("");
};