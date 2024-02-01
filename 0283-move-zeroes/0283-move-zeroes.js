/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums){
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i]
            pos++
        }
    }

    for (let i = pos; i < nums.length; i++) {
        nums[i] = 0
    }
}

// var moveZeroes = function(nums) {
//     let nextIdx;

//     for (let i = 0; i < nums.length - 1; i++) {
//         nextIdx = i + 1
//         if (nums[i] === 0) {
//             while (nextIdx < nums.length - 1 && nums[nextIdx] === 0 ) {
//                 nextIdx += 1
//             }
//             nums[i] = nums[nextIdx];
//             nums[nextIdx] = 0;
//         } 
//     }
// };