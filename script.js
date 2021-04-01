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




// FINDERS KEEPERS
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if(func(num)) {
            return num;
        }
    }
    return undefined;
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));



//BOO WHO
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    } else {
        return false;
    }
}

// console.log(booWho(null));



// TITLE CASE A SENTENCE
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');
}




// console.log(titleCase("I'm a little tea pot"));



// SLICE AND SPLICE
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}


// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// MERGE TWO SORTED ARRAYS INTO ONE

function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b);
}

// mergeArrays([1,2,3,4], [5,6,7,8]);
// mergeArrays([1,3,5,7,9], [10,8,6,4,2]);
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));

// Sum Mixed Array
function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += Number(x[i]);
    }
    return sum;
  }

//   console.log(sumMix([9, 3, '7', '3'])


/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that
 counts the number of sheep present in the array (true means present).
*/

function countSheeps(arrayOfSheep) {
    let sheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i ++) {
        if (arrayOfSheep[i] === true) {
            sheep += arrayOfSheep[i];
        } 
    }
    return sheep;
}

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

    // console.log(countSheeps(array1));


// Wide Mouthed Frog
function mouthSize(animal) {
    animal = animal.toLowerCase();
    return animal === 'alligator' ? 'small' : 'wide';
}

// console.log(mouthSize('alligator'));

// CAT YEARS DOG YEARS
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }

  console.log(humanYearsCatYearsDogYears(2));