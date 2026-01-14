/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;

    let triplet = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        console.log(num)
        console.log(triplet)

        if (i === 0) {
            triplet.push(num);
            continue;
        }


        const last = triplet[triplet.length - 1];
        if (num > last) {
            triplet.push(num)
        } else {
            const index = triplet.findIndex((n) => n >= num);
            if (index !== -1) {
                triplet.splice(index, 1, num);
            }
        }

        if (triplet.length === 3) {
            if (triplet[0] < triplet[1] && triplet[1] < triplet[2]) {
                return true;
            } else {
                triplet = [triplet[1], triplet[2]]
            }
        }
    }

    return triplet.length === 3;
};

console.log(increasingTriplet([1,2,3,4,5]))
// increasingTriplet([5,4,3,2,1])
// increasingTriplet([2,1,5,0,4,6])