/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    let str2Index = 0;
    for (let i = 0; i < str1.length; i++) {
        const current = str1[i];
        const expected = str2[str2Index];
        if(current === expected) {
            str2Index++;
        }
    }

    let str1Index = 0;
    for (let i = 0; i < str2.length; i++) {
        const current = str2[i];
        const expected = str1[str1Index];
        if(current === expected) {
            str1Index++;
        }
    }

    const needsForStr1 = str1.length - str1Index;
    const needsForStr2 = str2.length - str2Index;
    

    if(needsForStr1 <= needsForStr2) {
        return str2 + str1.slice(str1Index, str1.length)
    } else {
        return str1 + str2.slice(str2Index, str2.length)
    }
};

console.log(shortestCommonSupersequence('abac', 'cab')); // cabac
console.log(shortestCommonSupersequence('aaaaaaaa', 'aaaaaaaa')); // aaaaaaaa
console.log(shortestCommonSupersequence('bbbaaaba', 'bbababbb')); // bbbaaababbb
console.log(shortestCommonSupersequence('bcacaaab', 'bbabaccc')); // bbabcacccaaab

// a: 2, 4, 5, 6 
// b: 0, 1, 3, 7 
// c: 3 ,5, 6, 7 (only need 4 Cs because we have up to 3 in each string)

// 0, 1, 2, 3, 4, 5, 6, 7
// b, b, a, c, a, c, 6, 7