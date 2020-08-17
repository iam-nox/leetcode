//Runtime: 88 ms, beats 41.87 % of javascript submissions
//Memory Usage: 38.3 MB, beats 22.16 % of javascript submissions

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(row => row.reverse().map(n => !n))
};