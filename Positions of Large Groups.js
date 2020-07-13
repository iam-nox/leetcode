/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    return (S.match(/(.)\1{2,}/g) || []).map(group => {
        let idx = S.indexOf(group)
        let len = group.length
        
        S = S.replace(group, `${'0'.repeat(len)}`)
        
        return [idx, idx + len - 1]
    })
};