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

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// CONFIRM THE ENDING

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Connor", "n"));
// console.log(confirmEnding("He has to give me a new name", "name"));


// REPEAT A STRING

function repeatStringNumTimes(str, num) {
    let repeated = '';
    if (num < 0) {
      return '';
    } else {
    for (let i = 0; i < num; i++) {
      repeated += str;
    }
  }
    return repeated;
  }

//   repeatStringNumTimes("abc", 3)


// TRUNCATE A STRING
function truncateString(str, num) {
    let truncated = str.slice(0, num);
    if (str.length > num) {
        return truncated + '...';
    } else {
        return str;
    }
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
