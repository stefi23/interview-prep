/*
First Unique Character in a String
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
*/

/*
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let values = {}

    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(values[char]) {
           values[char] += 1
       } else {
           values[char] = 1
       }
    }
    
    for (const items in values) {
         if(values[items] === 1){
             return s.indexOf(items)
         }     
    }
    
    return -1
};