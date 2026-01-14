const typesOfPasses = [1, 7, 30];

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const everyDay = new Array(days.length+1).fill(Infinity);
    everyDay[0] = 0;

    for (let currentDay = 1; currentDay < everyDay.length; currentDay++) {
        for (let i = 0; i < typesOfPasses.length; i++) {
            const typeOfPass = typesOfPasses[i];
            const remainder = currentDay - typeOfPass;

            if (remainder < 0) break;

            const cost = costs[i];

            let wholeCost = cost;

            if (remainder > 0) {
                const remainderCost = everyDay[remainder];
                wholeCost += remainderCost;
            }
            if (wholeCost < everyDay[currentDay]) {
                everyDay[currentDay] = wholeCost;
            }
        }
    }
    return everyDay.pop();
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
// console.log(mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2, 7, 15]));
// console.log(mincostTickets([1,5,7,10], [2, 7, 15]));
