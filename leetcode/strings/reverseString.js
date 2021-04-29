/* 
Reverse String

https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
Write a function that reverses a string. The input string is given as an array of characters s.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {
   let start = 0
   let end = s.length - 1
   
   while(start < end){
       let temp = s[start]
       s[start] = s[end]
       s[end] = temp
       start++
       end--
   }
    return s
};