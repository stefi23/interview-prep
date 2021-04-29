/* Plus One
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]
*/

var plusOne = function(digits) {
    for(let i = digits.length -1; i >=0; i--){
        if(digits[i] < 9){
        digits[i]++
        return digits

        } else {
        digits[i] = 0
        }
    } 
    
    //in case we have [9,9,9]
    digits.unshift(1)
    return digits
}