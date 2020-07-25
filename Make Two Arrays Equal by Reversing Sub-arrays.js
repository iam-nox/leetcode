/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    return [...new Set(arr)].every(num => arr.filter(n => n === num).length === target.filter(n => n === num).length)
};