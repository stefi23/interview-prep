/* Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

function scramble(str1, str2) {
  const lettersStr1 = {};

  for (let i = 0; i < str1.length; i++) {
  
    const currentLetter = str1[i];
    !lettersStr1[currentLetter] ? 
        lettersStr1[currentLetter] = 1 : 
        lettersStr1[currentLetter] += 1
  }

  
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    if (lettersStr1[currentLetter] > 0) {
      lettersStr1[currentLetter]--;
    } else {
      return false;
    }
  }

  return true;
}

//Too slow: Execution Timed Out (12000 ms)

function scramble(str1, str2) {
 str1 = str1.split("").sort()
 str2 = str2.split("").sort()
  for(let i = 0; i < str2.length; i++){
    if(!str1.includes(str2[i])){
      return false
    } else {
       str1.splice(str1.indexOf(str2[i]), 1);
    }
    
  }
  return true
}