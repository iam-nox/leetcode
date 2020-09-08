//Runtime: 152 ms, faster than 17.73% of JavaScript submissions
//Memory Usage: 45.4 MB, less than 17.18% of JavaScript submissions

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    return [...new Set(s)]
        .map(char => ({ name: char, qty: [...s].filter(c => c === char).length }))
        .sort((a, b) => b.qty - a.qty)
        .map(({name, qty}) => name.repeat(qty))
        .join('')
};