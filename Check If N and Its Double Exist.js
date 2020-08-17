//Runtime: 80 ms, beats 55.01 % of javascript submissions
//Memory Usage: 37.1 MB, beats 43.82 % of javascript submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    return arr.some((n, i) => arr.some((m, j) => i !== j && n === m * 2))
};