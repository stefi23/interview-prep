/* 
Valid Anagram
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const letters = {};

    for (let i = 0; i < s.length; i++) {
        letters[s[i]] ? letters[s[i]]++ : letters[s[i]] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (letters[t[i]]) {
            letters[t[i]]--;
        }
        else {
            return false;
        }
    }
    return true;
};