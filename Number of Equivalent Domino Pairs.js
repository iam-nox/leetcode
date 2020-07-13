/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    return dominoes.reduce((acc, cur, idx) => {
        let counter = 0
        
        for (let i = idx + 1; i < dominoes.length; i++) {
            if (cur[0] === dominoes[i][0] && cur[1] === dominoes[i][1] || cur[0] === dominoes[i][1] && cur[1] === dominoes[i][0])
                counter++
        }
        return acc + counter
    }, 0)
};