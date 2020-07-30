/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    const arr = Array.from({ length: m }, (_, i) => i + 1)
    const result = []
    
    for (let i = 0; i < queries.length; i++) {
        
        let idx = arr.indexOf(queries[i])
        
        result.push(idx)
        
        arr.splice(idx, 1)
        arr.unshift(queries[i])
    }
    return result
};