/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const arr = [...Array(n)].map((_, i) => start + 2 * i)
    let xor_arr = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        xor_arr ^= arr[i]
    }
    return xor_arr
};