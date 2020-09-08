//Runtime: 1884 ms, faster than 20.31% of JavaScript submissions
//Memory Usage: 44.3 MB,

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const f = s => s.match(/(.)\1*/)[0].length
    
    words = words.map(word => [...word].sort().join(''))
    
    return queries.map(query => {
        query = [...query].sort().join('')
        
        return words.filter(word => f(query) < f(word)).length
    })
};