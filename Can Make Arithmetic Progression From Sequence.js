//Runtime: 72 ms, faster than 89.27% of JavaScript submissions
//Memory Usage: 37 MB, less than 41.44% of JavaScript submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a, b) => a - b)
    const sample = arr[1] - arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== sample) return false
    }
    return true
};