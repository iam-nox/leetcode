/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary)
    let min = Math.min(...salary)
    
    return salary.reduce((acc, cur) => cur === max || cur === min ? acc : acc + cur, 0) / (salary.length - 2)
};