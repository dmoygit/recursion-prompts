/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //base case / test condition
  if (n < 0) {
    return null;
  }
  // base case /
  if (n === 0) {
    return 1;
  }
  // recursive case
  return (n * factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // base case / test condition
  var arrCopy = array.slice(0);
  //base case / test condition
  if (array.length === 0) {
    return 0;
  //base case
  } else if (array.length === 1) {
    return array[0];
  //recursive case
  } else {
    arrCopy[arrCopy.length - 1] = arrCopy[arrCopy.length - 1] + arrCopy[0];
    var currentArr = arrCopy.slice(1);
    return sum(currentArr);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //flatten array
  var flatArr = array.flat(Infinity);
  // run it thru like sum
  if (flatArr.length === 0) {
    return 0;
  //base case
  } else if (flatArr.length === 1) {
    return flatArr[0];
  //recursive case
  } else {
    flatArr[flatArr.length - 1] = flatArr[flatArr.length - 1] + flatArr[0];
    var currentArr = flatArr.slice(1);
    return arraySum(currentArr);
  }

};

// 4. Check if a number is even.
var isEven = function(n) {
  //base case (no remainder is even)
  if (Math.abs(n) === 0) {
    return true;
  //base case (remainder of 1 is odd)
  } else if (Math.abs(n) === 1) {
    return false;
  } else {
    return isEven(Math.abs(n) - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //if n === 0 / base case
  if (n === 0 ) {
    //return n
    return n;
  }
  if (Math.sign(n) === 1) {
  //if n is a positive integer
    //n-1 + sumBelow(n-1)
    return (n - 1) + sumBelow(n - 1);
  } else {
  //if n is a negative integer
    //n-1 + sumBelow(n+1)
    return (n + 1) + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
//I - 2 numbers
//O - Array ints between the two numbers
//C - none
//E - negative ints;   starting int larger than ending int;  empty array if no ints in between.

var range = function(x, y) {
  var results = [];
  if (x === y || x === y - 1 || y === x - 1) {
    return [];
  }
  if (y > x) {
  //recursive
    results = results.concat([x + 1]).concat(range(x + 1, y));
  }
  if (x > y) {
    //recursive
    results = results.concat([x - 1]).concat(range(x - 1, y));
  }
  return results;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  } else if (exp > 0 && exp % 2 === 0) {
    return exponent(base * base, exp / 2);
  } else if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return 1 / (base / exponent(base, exp + 1));
  }
};

// 8. Determine if a number is a power of two. TESTING
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 0) {
    return false;
  }
  if (n < 2) {
    return Number.isInteger(n);
  } else {
    return powerOfTwo(n/2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) { // 'at'
  var result = '';
  //base case
  if (string.length === 0) {
    return '';
  //recursive case
  } else {
    result += string[string.length - 1] + reverse(string.substring(0, string.length - 1));
  }
  return result;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {// 'aba'
  var strLower = string.toLowerCase().split(' ').join('');
  var resultArr = [];
  if (strLower.length === 0 || strLower.length === 1) {
    return true;
  }
  if (strLower[0] === strLower[strLower.length - 1]) {
    resultArr.concat(palindrome(strLower.substring(1, strLower.length - 1)));
  } else {
    return false;
  }
  if (resultArr.includes(false)) {
    return false;
  } else {
    return true;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  }
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x > 0 && y > 0) {
    if (y > x) {
      return x;
    } else if (x - y < y) {
      return x - y;
    } else {
      return modulo(x - y, y);
    }
  }
  if (x < 0 && y > 0) {
    if (x > -y) {
      return x;
    } else {
      return modulo(x + y, y);
    }
  }

  if (x < 0 && y < 0) {
    if (x > y) {
      return x;
    } else if (y > x) {
      return modulo(x - y, y);
    }
  }


};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x > 0 && y > 0) {
    if (y === 1) {
      return x;
    } else {
      return x + multiply(x, y - 1);
    }
  }
  if (x < 0 && y < 0) {
    return multiply(-x, -y);
  }
  if (x < 0 && y > 0) {
    return -(multiply(-x, y))
  }
  if (x > 0 && y < 0) {
    return -(multiply(x, -y))
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  }
  if (y === 1) {
    return x;
  }
  if (x < y || x === 0) {
    return 0;
  }
  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  }
  if (x < 0 && y < 0) {
    return divide(-x, -y);
  }

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

  //I - 2 positive ints
  //O - number (greatest divisor)
  //C -
  //E -  if there is a negative number, return null; if x can be divided by y (or vice versa) return the smaller number (2 cases)
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0 || y === 0) {
    return 0;
  }
  var low = x < y ? x : y;
  var high = y < x ? x : y;
  //base case
  if (high % low === 0) {
    return low;
  }
  var newLow = high % low;
  return gcd(newLow, low);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //stop it before it even starts - messed up the recursion test because this DQ'd the test before it even ran.  BOOOOO!!
  // if (str1.length !== str2.length) {
  //   return false;
  // }

  //edge case
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  //base cases
  if ((str1.length > 0 && str2.length === 0) || (str2.length > 0 && str1.length === 0)) {
    return false;
  }
  if (str1.length === 1 && str2.length === 1 && str1[0] === str2[0]) {
    return true;
    //recursive case
  } else if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else if (str1[0] !== str2[0] || str1[0] === undefined || str2[0] === undefined) {
    return false
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  result = [];
  if (str.length === 0) {
    return [];
  }
  result = result.concat(str[0]).concat(createArray(str.slice(1)));
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  result = [];
  if (array.length === 0) {
    return [];
  }
  result = result.concat(array[array.length - 1]).concat(reverseArr(array.slice(0, array.length -1)));
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  result = [];
  if (length === 0) {
    return [];
  }
  var val = [value];
  result = result.concat(val).concat(buildList(value, length - 1));
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  result = [];
  if (n === 0) {
    return [];
  }
  if (n % 15 === 0) {
    result = result.concat(fizzBuzz(n - 1)).concat('FizzBuzz');
  } else if (n % 3 === 0) {
    result = result.concat(fizzBuzz(n - 1)).concat('Fizz');
  } else if (n % 5 === 0) {
    result = result.concat(fizzBuzz(n - 1)).concat('Buzz');
  } else {
    result = result.concat(fizzBuzz(n - 1)).concat(n.toString());
  }
  return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    return countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  result = [];
  if (array.length === 0) {
    return [];
  }
  result = result.concat(callback(array[0])).concat(rMap(array.slice(1), callback));
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var result = 0;
  //{a: 1}  then {a: {a: 1}}
  //stop case
  if (typeof obj !== 'object') {
    return 0;
  }
  for (var prop in obj) {
    //rescursive case
    if (prop === key) {
      //if prop is in the obj, increase by 1 and call with the object at the prop
      result += 1 + countKeysInObj(obj[prop], key); //with {a: 1} will return 0 on next call
    } else {
      //otherwise just keep searching the next obj at the prop (don't add 1)
      result += countKeysInObj(obj[prop], key);
    }
  }
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var result = 0;
  //{a: 1}  then {a: {a: 1}}
  //base case
  if (typeof obj !== 'object') {
    return 0;
  }
  for (var prop in obj) {
    //rescursive case
    if (obj[prop] === value) {
      //if prop is in the obj, increase by 1 and call with the object at the prop
      result += 1 + countValuesInObj(obj[prop], value); //with {a: 1} will return 0 on next call
    } else {
      //otherwise just keep searching the next obj at the prop (don't add 1)
      result += countValuesInObj(obj[prop], value);
    }
  }
  return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var result = [0, 1];
  prev = arguments[1] || 1
  prevPrev = arguments[2] || 0
  var currentSum =  prev + prevPrev
  if (n <= 0 ) {
    return null;
  }
  if (n === 1) {
    return [];
  } else {
    result = result.concat(currentSum).concat(fibonacci(n - 1), currentSum, prev);
  }
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  if (array.length === 0) {
    return [];
  } else {
  result = result.concat(array[0].toUpperCase()).concat(capitalizedWords(array.slice(1)));
  }
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var result = 0;
  if (typeof obj !== 'object') return 0;
  for (var k in obj) {
    if (typeof obj[k] !== 'object' && obj[k] % 2 === 0) {
      result += obj[k];
    } else result += nestedEvenSum(obj[k]);
  }
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  //base case
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < array.length; i++) {
    var element = [array[i]];
    if (!Array.isArray(array[i])) {
      result = result.concat(element);
    } else {
      result = result.concat(flatten(array[i]));
    }
  }
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
// var letterTally = function(str, obj) {
//   //I - string
//   //O - obj
//   //C - none
//   //E - none yet
//   var result = {};

//   //base case
//   if (str.length === 0) {
//     return;
//   }
//   //recursive case
//   var currLetter = str[0];
//   if (result[currLetter] === undefined) {
//     result[currLetter] = 1;
//     result = result.extends(result, letterTally(str.substring(1), result));
//   } else {
//     result[currLetter]++;
//     result = result.extends(result, letterTally(str.substring(1), result));
//   }
//   return result;
// };
var letterTally = function(str, obj = {}) {
  if (str.length === 0) return obj;
  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]]++;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  // create empty array
  var result = [];
  if (list.length === 0) {
    return result;
  }
  // if list[0] === list[1] compress(list.slice(1))
  if (list[0] === list[1]) result = result.concat(compress(list.slice(1)));
  // otherwise concat and recurse
  else result = result.concat([list[0]]).concat(compress(list.slice(1)));
  // return array
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];
  // base case
  if (array.length === 0) return result;
  // recurse case
  var element = array[0].concat([aug]);
  result.push(element);
  result = result.concat(augmentElements(array.slice(1), aug));


  return result;

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];
  // termination case
  if (array.length === 0) return [];
  if (array[0] !== 0) {
    var element = array[0];
    result = result.concat(element).concat(minimizeZeroes(array.slice(1)));
  } else if (array[0] === 0 && array[1] === 0) {
    result = result.concat(minimizeZeroes(array.slice(1)));
  } else {
    var element = array[0];
    result = result.concat(element).concat(minimizeZeroes(array.slice(1)));
  }
  return result;

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  //term case
  if (array.length === 0) { return []; }
  if (array[0] < 0) { array[0] = -array[0]; }
  if (array[1] > 0) { array[1] = -array[1]; }
  result = result.concat(array[0], array[1]).concat(alternateSign(array.slice(2)));

  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var translation = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var result = [];
  var strArray = str.split(' ');
  if (str.length === 0) {
    return [];
  }
  if (translation[Number(strArray[0])] === undefined) {
    result = result.concat(strArray[0]).concat(numToText(strArray.slice(1).join(' ')));
  } else {
    result = result.concat(translation[Number(strArray[0])]).concat(numToText(strArray.slice(1).join(' ')));
  }
  return result.join(' ');
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
