/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0 
    let midIdx = s.length/2
    while(i< midIdx){
       let temp = s[i]
       s[i] = s[s.length-1-i]
       s[s.length-1-i] = temp
       i++
     }
   
    
};