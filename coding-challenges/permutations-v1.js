function permutations(k, intermediateArr, str){
     if(k === str.length ) {
      console.log(intermediateArr.join(''))
    }else {
        for(let i = 0; i < str.length; i++){
            let clone;
            if(intermediateArr && !intermediateArr.includes(str[i])){
               clone = [...intermediateArr, str[i]] 
               permutations(k+1, clone, str)
            }
           
        } 
    } 
}

permutations(0, [], "ABC")

// function permutations(k, intermediateArr, n, str){
//      if(k === n ) {
//        let result = ""
//       let objKeys= {}
//       for(let i = 0; i < str.length; i++){
//         objKeys[i] = str[i];
//       }  
//        for(let i = 0; i < intermediateArr.length; i++){
//          result += objKeys[intermediateArr[i]]
//       }  
//       console.log(result)
//     }else {
//         for(let i = 0; i < n; i++){
//              let clone;
//             if(intermediateArr && !intermediateArr.includes(i)){
//                clone = [...intermediateArr, i] 
//                permutations(k+1, clone, n, str)
//             }
           
//         } 
//     } 
// }

// permutations(0, [], 3,"ABC")