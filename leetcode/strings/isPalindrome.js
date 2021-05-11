/* 
Valid Palindrome
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

var isPalindrome = function(s) {
 
    s = s.toLowerCase().replace(/[^A-Z0-9]/ig, "")
    let reverse = s.split("").reverse().join("")
    return s === reverse
    
};

// 2

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    let leftIdx = 0;
    let rightIdx = s.length - 1;

    while(leftIdx < rightIdx){
        if (s[leftIdx] !== s[rightIdx]) {
            return false
        }    

        rightIdx --
        leftIdx ++ 

    }
    return true
};