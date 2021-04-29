/*
Contains Duplicate
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/

var containsDuplicate = function(nums) {
  let numbers = {}
  for(let i = 0 ;i < nums.length; i++){

      if(numbers[nums[i]]){
          numbers[nums[i]]++
          
          if(numbers[nums[i]] === 2){
              return true
          }
      } else {
          numbers[nums[i]] = 1
      }
  }
    return false
};