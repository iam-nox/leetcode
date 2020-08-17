//Runtime: 88 ms, beats 42.73 % of javascript submissions
//Memory Usage: 38.2 MB, beats 23.63 % of javascript submissions

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lcp = ""
    
    for (char of strs[0] || "") {
        if (strs.some(str => !str.startsWith(lcp + char))) break
        lcp += char
    }
    return lcp
};