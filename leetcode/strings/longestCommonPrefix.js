/*
Longest Common Prefix
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/


//clever:
var longestCommonPrefix = function(strs) {
if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }        
    return prefix;
};

// 2nd:
var longestCommonPrefix = function(strs) {
    let dictionary = {}
    let result = ""
    for(let i = 0; i < strs.length; i++){
        for(let j = 0; j < strs[i].length; j++) {
            let char = strs[i][j]
            if(! dictionary[j + 1]){
                dictionary[j + 1] = char
            }else{
                dictionary[j + 1] += char
            }
        }
    }
    console.log(dictionary)
    for(const item in dictionary){
        let arr = dictionary[item].split("")
       if(arr.length ===  strs.length && arr.every( el => el === arr[0] )){
           result += dictionary[item][0]
       }else {
           return result
       }
    }
    return result
};