/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    return nums.reduce((acc, cur, idx) => {
        let counter = 0
        
        for (let i = idx + 1; i < nums.length; i++) {
            if (cur === nums[i]) counter++
        }
        return acc + counter
    }, 0)
};