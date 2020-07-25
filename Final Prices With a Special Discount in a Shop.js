/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    return prices.map((price, i) => price - (prices.find((p, j) => i < j && p <= price) || 0))
};