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

//   console.log(humanYearsCatYearsDogYears(2));

// REVERSE SEQUENCE
const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

// console.log(reverseSeq(5));


// Generate a range of integers
function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}

// console.log(generateRange(2, 10, 2));


// FRANKENSPLICE
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// FALSY BOUNCER
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
        }
        return newArray;
    }


// console.log(bouncer([7, "ate", "", false, 9]));



// KEEP UP THE HOOP
function hoopCount (n) {
    return n >= 10 ? 'Great, now move on to tricks' 
    :
    'Keep at it until you get it'
}

// console.log(hoopCount(3));
// console.log(hoopCount(11));



// RETURNING STRINGS
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

// console.log(greet('ryan'));


// PICK A SET OF FIRST ELEMENTS
function first(arr, n = 1) {
    return arr.slice(0, n);
  }

  var arr = ['a', 'b', 'c', 'd', 'e'];

//   console.log(first(arr, 2));


//CALCULATE BMI
function bmi(weight, height) {
    let calculateBMI = weight / height ** 2;
    if (calculateBMI <= 18.5) {
        return 'Underweight';
    } else if (calculateBMI <= 25.0) {
        return 'Normal';
    } else if (calculateBMI <= 30.0) {
        return 'Overweight';
    } else if (calculateBMI > 30) {
        return 'Obese';
    }
}

// console.log(bmi(80, 1.80));


// Do you speak English?
function spEng(sentence) {
    let sentenceLower = sentence.toLowerCase();
    return sentenceLower.includes('english');
}

// console.log(spEng('English'));
// console.log(spEng('egnlish'));


// ABBREVIATE NAME
function abbrevName(name) {
    var nameArray = name.split(" ")
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// console.log(abbrevName('Kevin Scheffler'));


// WILL YOU MAKE IT?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let miles = mpg * fuelLeft;
    if (miles >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};

// console.log(zeroFuel(50, 25, 2));
// console.log(zeroFuel(100, 50, 1));


// String Repeat
function repeatStr(n, s) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

// console.log(repeatStr(3, "*"));


// AREA OF A PERIMETER
const areaOrPerimeter = function(l , w) {
    if (l === w) {
      return l * w;
    } else {
      return (l + w) * 2;
    }
  };

//   console.log(areaOrPerimeter(4, 4));
//   console.log(areaOrPerimeter(10, 6));



// Remove Exclamations
function removeExclamationMarks(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '!') {
            newString += s[i];
        }
    }
    return newString;
}

// console.log(removeExclamationMarks('Hello World!'));


// Find the first non-consecutive number
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1];
        }
    }
    return null;
}

// console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));


// Sum Of Strings
function sumStr(a,b) {
    return String(Number(a)+Number(b));
}

// console.log(sumStr(4,"5"));
// console.log(sumStr("34","5"));




// Opposites Attract
function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 ===  1) {
        return true;
    } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(lovefunc(1,4));
// console.log(lovefunc(2,2));
// console.log(lovefunc(0,1));
// console.log(lovefunc(0,0));



// GravityFlip
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

// console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
// console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);





// Powers of 2
function powersOfTwo(n) {
    let powers = [];
    for (let i = 0; i <= n; i++) {
        powers.push(Math.pow(2, i));
        
    }
    return powers;
}

// console.log(powersOfTwo(0));
// console.log(powersOfTwo(1));
// console.log(powersOfTwo(4));


// Calculate average
function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}


// console.log(find_average([1,1,1]));
// console.log(find_average([1,2,3]));
// console.log(find_average([1,2,3,4]));

// Grasshopper if/else syntax debug
function checkAlive (health) {
    if (health <= 0) {
        return false;
    } else {
        return true;
    }
}
// console.log(checkAlive(5));
// console.log(checkAlive(0));


// Thinkful-Logic Drills: Traffic light
function updateLight(current) {
    if (current === 'green') {
        return 'yellow';
    } else if (current === 'yellow') {
        return 'red';
    } else if (current === 'red') {
        return 'greet';
    }
}

// console.log(updateLight('green'));
// console.log(updateLight('yellow'));
// console.log(updateLight('red'));




// What's the real floor?
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// console.log(getRealFloor(1));
// console.log(getRealFloor(5));
// console.log(getRealFloor(15));
// console.log(getRealFloor(196));
// console.log(getRealFloor(165));
// console.log(getRealFloor(231));


// Falsy Bouncer
function bouncer(arr) {
    return arr.filter(value => value);
}

// console.log(bouncer([7, "ate", "", false, 9]));

// Sum of Strings
function sumStr(a,b) {
    let num = Number(a) + Number(b);
    return num.toString();
}

// console.log(sumStr("4", "5"));


// Compare Within Margin
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}

// console.log(closeCompare(4, 5));
// console.log(closeCompare(2, 5, 3));


// Square(n)Sum
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    }
    return sum;
}

// console.log(squareSum([1, 2]));
// console.log(squareSum([0, 3, 4, 5]));

// FIXME: Replace all dots
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

// console.log(replaceDots("one.two.three"));



function digitize (n) {
  return String(n).split('').map(Number).reverse();
}

// console.log(digitize(12345));

// print odd numbers less than 100
function oddLessThan100 () {
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

// oddLessThan100()


// Print numbers from 1 - 10
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }


// print the multiplication table with the number 7
// for (let i = 1; i <= 10; i++) {
//     var row = "7 * " + i + " = " + 7 * i;
//     console.log(row);
// }



// Find Maximum and Minimum Values of a List
var min = function(list) {
    let min;
    for (let i = 0; i < list.length; i++) {
        min = list[i];
        if (list[i] < min) {
            min = list[i];
        }
    }
    return min;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));

var max = function(list) {
    let max;
    for(let i = 0; i < list.length; i++) {
        max = list[i];
        if(max[i] > max) {
            max = list[i];
        }
    }
    return max;
}

console.log(max([4,6,2,1,9,63,-134,566]));
console.log(max([5]));