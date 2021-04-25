/* This week’s question:
Given an integer array, move all 0s to the end of it while maintaining the relative order of the non-zeroes. Bonus: do this without making a copy of the array!

Example:

$ moveZeroes([0,2,0,3,8])
$ [2,3,8,0,0]
*/

function moveZeroes(arr) {
  let count = 0;
  while (arr.indexOf(0) > -1) {
    let index = arr.indexOf(0);
    arr.splice(index, 1);
    count++;
  }
  while (count > 0) {
    arr.push(0);
    count--;
  }
  return arr
};

/* ----------------------------- */

function moveZeros2(arr){
 let count = 0
  while(arr.indexOf(0)> -1){
   let index = arr.indexOf(0)
   let arrBeforeZero = arr.slice(0, index)
   arr = [...arrBeforeZero, ...arr.slice(index + 1)]
   count++
  }
  let ZerosEnd = Array(count).fill(0)
  return [...arr, ...ZerosEnd ]
}

/* ----------------------------- */

function moveZeroes3(arr){
 let j = 0;
 for(let i = 0; i < arr.length; i++){
     if(arr[i] !== 0) {
         let temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp
         j++; 
     }
 }
  return arr
}
