/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    
    products.sort()
    
    return [...searchWord].reduce((acc, _, idx) => {
        acc.push(products.filter(product => product.startsWith(searchWord.slice(0, idx + 1))).slice(0, 3))
        
        return acc
    }, [])
};