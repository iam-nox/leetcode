/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat
        .map((row, idx) => [idx, row.filter(num => num).length])
        .sort((a, b) => a[1] - b[1] || a[0] - b[0])
        .slice(0, k)
        .map(([idx]) => idx)
};