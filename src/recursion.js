/* jshint esversion: 6 */

// Solve the following prompts using recursion.
// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n === 0) {
    return 1;
  };
  if (n < 0) {
    return null
  };
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  };
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  };
  if (Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  };
  return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0 || n === 2) {
    return true;
  };
  if (n === 1) {
    return false;
  }
  if (n < 0) {
    return isEven(n + 2);
  };
  if (n > 0) {
    return isEven(n - 2);
  };
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0 || n === 1) {
    return 0;
  };
  if (n > 1) {
    return n - 1 + sumBelow(n - 1);
  };
  if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  };
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]


// it('should accept starting integer that\'s larger than ending', function() {
//         expect(range(7,2)).to.eql([6,5,4,3]);

var range = function(x, y) {

  if (y - x === 1 || y - x === 0 || x - y === 1) {
    return [];
  };

  if (y > x) {
    // all the number up to but not including two below y, and adding one below y
    return range(x, y - 1).concat(y - 1);
  };
  if (y < x) {
    return range(x, y + 1).concat(y + 1);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp > 1) {
    return base * exponent(base, exp - 1);
  }
  if (exp < 0) {
    return 1 / (base * exponent(base, -1 * exp - 1));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  };
  if (n % 2 === 1 || n === 0) {
    return false;
  };
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string === '') {
    return '';
  };
  return reverse(string.substring(1)) + string.charAt(0);

};

// 10. Write a function that determines if a string is a palindrome.

var palindrome = function(string) {
  string = string.split(' ').join('').toLowerCase();

  if (string.length === 1 || string === '') {
    return true;
  };

  var inBetween = string.substring(1, string.length - 1)

  if (string[0] === string[string.length - 1] && palindrome(inBetween)) {
    return true;
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = function(x, y) {

  if (y === 0) {
    return NaN;
  }
  if (x === 0 || y === 1) {
    return 0;
  }
  if (x < y && x > 0) {
    return x;
  }
  if ((x > 0 && y > 0) || (x < 0 && y < 0 && x < y)) {
    return modulo(x - y, y);
  }
  if (x < 0 && y < 0 && x > y) {
    return x;
  }
  if (x < 0 && y > 0 && -x < y) {
    return x
  } else {
    return modulo(x + y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 1) {
    return y;
  } else if (y === 1) {
    return x;
  };
  if (x === 0 || y === 0) {
    return 0;
  };
  if (y < 0) {
    return -x + multiply(x, y + 1);
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === y) {
    return 1;
  };
  if (x === 0 || x < 0 && y > 0 || x < y || x < -y) {
    return 0;
  }
  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  } else {
    return -1 + divide(x + y, y);
  };
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null
  }
  if (x % y === 0) {
    return y;
  } else {
    return gcd(y, x % y)
  };
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;
  }
  if (str1.charAt(0) !== str2.charAt(0)) {
    return false;
  }
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str === '') {
    return [];
  }
  return [str[0]].concat(createArray(str.substring(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  };
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  };
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var arr = [];
  var output = n

  if (n === 0) {
    return arr;
  }
  if (n % 3 === 0 && n % 5 !== 0) {
    output = 'Fizz';
  }
  if (n % 5 === 0 && n % 3 !== 0) {
    output = 'Buzz';
  }
  if (n % 3 === 0 && n % 5 === 0) {
    output = 'FizzBuzz';
  }
  arr.push(output.toString());

  return fizzBuzz(n - 1).concat(arr);
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
    return 0 + countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
/*
  BASE CASE: empty array (return empty array)
  RECURSIVE CASE:
  iterate through each element (using recursion)
    apply the callback on each element
    return the new element

  RETURN TYPE: Array
*/
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

var countKeysInObj = function(obj, searchingFor) {
  var count = 0;
  for (var key in obj) {
    if (key === searchingFor) {
      count++;
    }
    if (typeof obj[key] === 'object') {
      count += countKeysInObj(obj[key], searchingFor);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      count++;
    }
    if (typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
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
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.

var fibonacci = function(n) {

  if (n === 0 || n < 0) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  } else {
    var nextFib = sum(fibonacci(n - 1).slice(-2));
    return fibonacci(n - 1).concat(nextFib);
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n <= 1) {
    return n;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']

var capitalizeWord = function(string) {
  var result = '';

  result += string[0].toUpperCase() + string.slice(1);
  return result;
}

var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return [capitalizeWord(array[0])].concat(capitalizeFirst(array.slice(1)));
  }
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
  var sum = 0;
  for (var key in obj) {
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

var flatten = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (Array.isArray(array[0])) {
    return flatten(array[0]).concat(flatten(array.slice(1)));
  } else {
    return [array[0]].concat(flatten(array.slice(1)));
  };
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}

var letterTally = function(str, obj = {}) {
  if (str === '') {
    return null;
  }
  if (!obj.hasOwnProperty(str[0])) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]] += 1;
  }
  letterTally(str.slice(1), obj);
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

var compress = function(list) {
  if (list.length === 0) {
    return [];
  }
  if (list[0] === list[1]) {
    return compress(list.slice(1));
  } else {
    return [list[0]].concat(compress(list.slice(1)));
  }
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]

var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  } else {
    var currentElement = array[0].slice();
    currentElement.push(aug);
    var theRestOfArray = augmentElements(array.slice(1), aug);
    var result = [currentElement].concat(theRestOfArray);
    // return [currentElement.push(aug)].concat(augmentElements(array.slice(1), aug));
    return result;
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (array[0] === 0 && array[1] === 0) {
    return minimizeZeroes(array.slice(1));
  } else {
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

/*
  BASE: if array is empty return empty array
  RECURSIVE:
    - smaller and smaller arrays
    [+0, -1, +2, -3, +4]
    array[0] n + 2
    array[1] n + 2
    +[+v1, -v2] + [the rest]
      [+v3, -v4] + [the rest]

  create an newArray and assaign an empty array
  if array empty return empty newArray
  if array[0] < 0
    array[0] *= -1;
    newArray.push(array[0])
    else newArray.push(array[0])
 if array[1] > 0
  array[1] *= -1;
  newArray.push(array[1])
  else newArray.push(array[1])
  slicing first two values and passing the remaining through recursive function
  return newArray

(change the value or not)
then push the value


*/
var alternateSign = function(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }

  if (array[0] < 0) {
    array[0] *= -1;
  }
  newArray.push(array[0]);

  if (array[1] > 0) {
    array[1] *= -1;
  }
  newArray.push(array[1]);

  return [newArray[0], newArray[1]].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

/*
  BASE CASE: if empty string return empty string ''
  RECURSION: slice through until we hit a number

"I have 5 dogs and 6 ponies"
      ^
 5 ==> str[5]

FINAL STRING: + 'a' + 'five'
 'a5' >> 'afive'

'm' + 'y 5 dogs and 6 ponies'
'y' + ' 5 dogs and 6 ponies'

'5' + ' dogs and 6 ponies'
numbers[5]

  PSEDUO:
  if it's a number
    convert to the text value

    var str = 'dog'
    "D" += str.slice()


    "5 dogs and"
     ^


*/
var numToText = function(str) {
  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  if (str === '') {
    return '';
  }
  if (typeof Number(str[0]) === 'number') { // typeof '5' === 'string'
    // numbers[Number(str[0])] += str.slice(1);
    var newStr = numbers[Number(str[0])] + str.slice(1);
    //              'five' + ' dogs and'
    numbers[Number(str[0])] = numbers[Number(str[0])] + str.slice(1);
  }
  return numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {};