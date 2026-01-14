/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let current = [];

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if(current.length === 0) {
            current.push(num);
        } else {
            const last = current[current.length-1];
            if(num > last) {
                current.push(num);
            } else if(num < last) {
                const index = current.findIndex((n) => n >= num);
                if(index === -1) continue;
                current.splice(index,1,num);
            }
        }
    }
    return current.length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])) // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])) // 1
console.log(lengthOfLIS([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12])) // 6
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6])) 
