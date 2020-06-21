/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    return words
        .filter(word => (licensePlate.toLowerCase().match(/[a-z]/g) || [])
            .every(char => {
                let regex = new RegExp(`${char}`, 'gi')
                return word.includes(char) && word.match(regex).length >= licensePlate.match(regex).length 
            }))
        .sort((a, b) => a.length - b.length || words.indexOf(a) - words.indexOf(b))[0]
};