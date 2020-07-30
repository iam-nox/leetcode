/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = []
    
    for (let i = 1; i <= target[target.length - 1]; i++) {
        if (target.includes(i)) {
            result.push("Push")
        } else {
            result.push("Push","Pop")
        }
    }
    return result
};