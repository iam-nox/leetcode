/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const regex = /(.)\1/
    
    while (S.match(regex)) {
        S = S.replace(regex, '')
    }
    return S
};