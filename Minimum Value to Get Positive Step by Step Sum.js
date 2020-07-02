//Runtime: 64 ms
//Memory Usage: 35.6 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1
    let sum = 1
    
    while (true) {
        if (nums.every(num => (sum += num) >= 1))
            return startValue
        
        startValue++
        sum = startValue
    }
};