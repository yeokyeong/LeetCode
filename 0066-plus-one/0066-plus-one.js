/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let incrementedNum = BigInt(digits.join("")) + BigInt(1);
  return [...incrementedNum.toString()];
};
