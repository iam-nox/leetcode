/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const result = []
    const sample = A[0]
    
    for (let i = 0; i < sample.length; i++) {
        if (A.every(str => str.includes(sample[i]))) {
            result.push(sample[i])
            A = A.map(str => str.slice(0, str.indexOf(sample[i])) + str.slice(str.indexOf(sample[i]) + 1))
        }
    }
    return result
};