/*
1. Write a function called “isOldEnoughToDrink”.
Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.

var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

const isOldEnoughToDrink = age => age>20 ? true : false;
isOldEnoughToDrink(22);

/*
2. Write a function called “isOldEnoughToDrive”.
Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
Notes:
* The legal driving age in the United States is 16.

var output = isOldEnoughToDrive(22);
console.log(output); // --> true
*/

const isOldEnoughToDrive = age => age>15 ? true : false;
isOldEnoughToDrive(22);

/*
3. Write a function called “isOldEnoughToVote”.
Given a number, in this case an age, ‘isOldEnoughToVote’ returns whether a person of this given age is old enough to legally vote in the United States.
Notes:
* The legal voting age in the United States is 18.

var output = isOldEnoughToVote(22);
console.log(output); // --> true
*/

const isOldEnoughToVote = age => age>17 ? true : false;

/*
4. Write a function called “isOldEnoughToDrinkAndDrive”.
Given a number, in this case an age, “isOldEnoughToDrinkAndDrive” returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
*/

const isOldEnoughToDrinkAndDrive = age => false;
isOldEnoughToDrinkAndDrive(22);

/*
5. Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

const getProperty = (object, key) => Object.entries(object).length>0 ? object[key] : undefined;

var obj = {
  llave: 'valor'
}

getProperty(obj, 'llave');

/* 
6. Write a function called “addProperty”.
Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true 
*/

const addProperty = (object, key) => object[key] = true;

/*
7. Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/

const removeProperty = (object, key) => delete object[key];

/*
8. Write a function called “checkAge”. 
Given a person’s name and age, “checkAge” returns one of two messages:
“Go home, {insert_name_here}!”, if they are younger than 21.
“Welcome, {insert_name_here}!”, if they are 21 or older.
Naturally, replace “{insert_name_here}” with the given name. :)

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
*/

const checkAge = (name, age) => age>20 ? `Welcome, ${name}!` : `Go home, ${name}!`;

/*
9. Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'
*/

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

/*
10. Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.

var output = getLengthOfWord('some');
console.log(output); // --> 4 
*/

const getLengthOfWord = word => word.length;

/*
11. Write a function called “getLengthOfTwoWords”.
Given 2 words, “getLengthOfTwoWords” returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9 
*/

const getLengthOfTwoWords = (word1, word2) => word1.length+word2.length;

/*
12. Write a function called “isGreaterThan10”.
Given a number, “isGreaterThan10” returns whether the given number is greater than 10.

var output = isGreaterThan10(11);
console.log(output); // --> true
*/

const isGreaterThan10 = number => number>10;

/*
13. Write a function called “isLessThan30”.
Given a number, “isLessThan30” returns whether the given number is less than 30.

var output = isLessThan30(9);
console.log(output); // --> true
*/

const isLessThan30 = number => number<30;

/*
14. Write a function called “equalsTen”.
Given a number, “equalsTen” returns whether or not the given number is 10.

var output = equalsTen(9);
console.log(output); // --> false
*/

const equalsTen = number => number===10;

/*
15. Write a function called “isLessThan”.
Given 2 numbers, “isLessThan” returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true 
*/

const isLessThan = (num1, num2) => num2<num1;

/*
16. Write a function called “isGreaterThan”.
Given 2 numbers, “isGreaterThan” returns whether num2 is greater than num1.

var output = isGreaterThan(11, 10);
console.log(output); // --> false 
*/

const isGreaterThan = (num1, num2) => num2>num1;

/*
17. Write a function called “isEqualTo”.
Given 2 numbers, “isEqualTo” returns whether num2 is equal to num1.

var output = isEqualTo(11, 10);
console.log(output); // --> false
*/

const isEqualTo = (num1, num2) => num2===num1;

/*
18. Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

var output = isEven(11);
console.log(output); // --> false
*/

const isEven = number => number%2===0 ? true : false;

/*
19.Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true
*/

const isOdd = number => number%2===0 ? false : true;

/*
20. Write a function called “isSameLength”.

Given two words, “isSameLength” returns whether the given words have the same length.

var output = isSameLength('words', 'super');
console.log(output); // --> true
*/

const isSameLength = (word1, word2) => word1.length===word2.length;

/*
21. Write a function called “areBothOdd”.

Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

var output = areBothOdd(1, 3);
console.log(output); // --> true
*/

const areBothOdd = (num1, num2) => num1%2!==0 && num2%2!==0;

/*
22. Write a function called “isEitherEven”.

Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.

var output = isEitherEven(1, 4);
console.log(output); // --> true
*/

const isEitherEven = (num1, num2) => num1%2===0 || num2%2===0;

/*
23. Write a function called “isOddLength”.

Given a word, “isOddLength” returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true
*/

const isOddLength = word => word.length%2!==0;

/*
24. Write a function called “isEvenLength”.

Given a word, “isEvenLength” returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false
*/

const isEvenLength = word => word.length%2===0;

/*
25. Write a function called “isEvenAndGreaterThanTen”.

Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
*/

const isEvenAndGreaterThanTen = num => num%2===0 && num>10;

/*
26.Write a function called “average”.

Given two numbers, “average” returns their average.

var output = average(4, 6);
console.log(output); // --> 5
*/

const average = (num1, num2) => (num1+num2)/2;

// Arrow functions don't have the local variable arguments as do other functions.

// function for any amount of numbers

function average(numbers) {
  let arg =[...arguments];
  let numberToBeDivided = arg.reduce((accumulator, currentValue) => accumulator+currentValue);
  let numberToDivideBy = arg.length;
  return numberToBeDivided/numberToDivideBy;
}

/*
27.
*/