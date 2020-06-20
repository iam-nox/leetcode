/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = (paragraph.toLowerCase().match(/[a-z]+/g) || []).filter(word => !banned.includes(word))
    const occurTimes = [...new Set(words)].map(word => words.filter(w => w === word).length)
    const max = Math.max(...occurTimes)
    
    return [...new Set(words)].find((_, i) => occurTimes[i] === max) || ""
};