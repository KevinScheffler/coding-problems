// Factorialize a number

function factorialize(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

// console.log(factorialize(5));


// Find the Longest Word in a String

function findLongestWordLength(str) {
    let strSplit = str.split(' ');
    let maxLength = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > maxLength) {
            maxLength = strSplit[i].length;
        }
    }
    return maxLength;
}

// console.log(findLongestWordLength
// ("The quick brown fox jumped over the lazy dog"));


// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let results = [];
    for(let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }
    return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));