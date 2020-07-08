/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    return [...Array(n)].map((_, idx) => idx === n - 1 ? -[...Array(n - 1)].reduce((a, _, i) => a + i, 0) : idx)
};