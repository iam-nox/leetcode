/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 0
    let counter = 1
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] > nums[i]) {
            counter++
        }
        else {
            if (counter > max) max = counter
            if (counter > 1) counter = 1
        }
    }
    return max
};