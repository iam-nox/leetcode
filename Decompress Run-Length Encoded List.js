/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    return nums.reduce((acc, cur, idx) => idx % 2 ? acc : acc.concat(Array(cur).fill(nums[idx + 1])), [])
};