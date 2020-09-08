//Runtime: 72 ms, faster than 91.97% of JavaScript submissions
//Memory Usage: 36.4 MB, less than 97.25% of JavaScript submissions

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let counter = 0
    let j = 0
    
    for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
        if (arr[j] === i) {
            j++
        } else {
            counter++
        }
        if (counter === k) return i
    }
};