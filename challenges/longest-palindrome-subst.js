/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = s[0];

    let count = s.length;

    while (count > 0 && count >= max.length) {
        const maxLeftPosition = s.length - count;
        for (let i = 0; i <= maxLeftPosition; i++) {
            const first = s[i];
            const last = s[i+count-1];

            if(first === last) {
                let palindrome = true;
                let [l, r] = [null, null];
                for(let j = i; j < i+count; j++) {
                    l = j;
                    r = s.length - j + 1;
                    if(s[j] !== s[s.length-j+1]) {
                        palindrome = false;
                        break;
                    }
                }
                if(palindrome) {
                    return s.slice(i, (i+count));
                }
            } 
        }
        count--;
    }

    return max;
};

console.log(longestPalindrome('babad'));