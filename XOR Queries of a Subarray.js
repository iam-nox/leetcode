/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    return queries.reduce((acc, [start, end]) => {
        let xor = 0
        
        for (let i = start; i <= end; i++) {
            xor ^= arr[i]
        }
        return acc.concat(xor)
    }, [])
};