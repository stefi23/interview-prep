/*
https://www.codewars.com/kata/523a86aa4230ebb5420001e1

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

Examples: 

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

*/

function anagrams(word, words) {
  return words.filter((item) => {
    return item.split('').sort().join('') === word.split('').sort().join('')
  })
}