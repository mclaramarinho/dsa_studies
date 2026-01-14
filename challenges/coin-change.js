/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    coins.sort((a, b) => a - b)
    const coinsUpToTarget = new Array(amount + 1).fill(Infinity);
    coinsUpToTarget[0] = 0;

    for (let target = 1; target < coinsUpToTarget.length; target++) {
        for (let j = 0; j < coins.length; j++) {
            const remainder = target - coins[j];
            if (remainder < 0) break;

            let needs = 1;

            if (remainder > 0) {
                needs += coinsUpToTarget[remainder];
            }

            if (needs < coinsUpToTarget[target]) {
                coinsUpToTarget[target] = needs;
            }
        }
    }

    return coinsUpToTarget[amount] === Infinity ? -1 : coinsUpToTarget[amount];
};


console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 2)); // 2
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([1, 3, 4, 5], 7)); // 2