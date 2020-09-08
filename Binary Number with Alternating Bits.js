//Runtime: 68 ms, faster than 93.75% of JavaScript submissions
//Memory Usage: 36.9 MB,

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    return n < 0 ? true : [...n.toString(2)].every((n, i, a) => !i || n !== a[i - 1])
};