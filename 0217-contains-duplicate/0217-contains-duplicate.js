/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const frequency = {}
    for (const n of nums) {
        if (Object.hasOwn(frequency, n)) {
            return true
        }
        else {
            frequency[n] = 1
        }
    }
    return false
};