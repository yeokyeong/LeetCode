/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
  let isNegative = x < 0;
  let reversedArr = x
    .toString()
    .slice(isNegative ? 1 : 0)
    .split("");

  reversedArr.reverse();

  let reversedStr = reversedArr.join("");
  let reversed = Number(isNegative ? "-" + reversedStr : reversedStr);

  if (reversed <= Math.pow(-2, 31) || reversed >= Math.pow(2, 31)) {
    return 0;
  }

  return reversed;
    
    
};