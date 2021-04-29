/* Single Number
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

*/

var singleNumber = function(nums) {
    let dictionary = {}
    let result;
    for(let i = 0; i< nums.length; i++){
        if(dictionary[nums[i]]){
            dictionary[nums[i]] += 1
        }else {
            dictionary[nums[i]] = 1
        }
    }
    for(char in dictionary ){
      if(dictionary[char] == 1) result = char
    }

    return result
};