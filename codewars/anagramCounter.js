/*
Number of anagrams in an array of words
https://www.codewars.com/kata/587e18b97a25e865530000d8/javascript

An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

function anagramCounter (wordsArray) {
  let counter = 0
  let values = {}
  
  for(let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i].split("").sort().join("")
    values[word] = !values[word] ? 1 : values[word] + 1
  }

  for (const property in values) {
        let n = values[property]
        counter += n * (n-1)/2  
    }
  return counter;
}