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
27. Write a function called “computeAreaOfATriangle”.

Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
*/

const computeAreaOfATriangle = (base, height) => base*height/2;

/*
28. Write a function called “cube”.

Given a number, “cube” returns the cube of that number.

var output = cube(3);
console.log(output); // --> 27
*/

const cube = num => num*num*num;

/*
29. Write a function called “square”.

Given a number, “square” should return the square of the given number.

var output = square(5);
console.log(output); // --> 25
*/

const square = num => num*num;

/*
30. Write a function called “computeAverageLengthOfWords”.

Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
*/

const computeAverageLengthOfWords = (str1, str2) => (str1.length + str2.length )/2;

/*
31. Write a function called “addFullNameProperty”.

Given an object that has a “firstName” property and a “lastName” property, 
“addFullNameProperty” returns a “fullName” property whose value is a string with the first name and 
last name separated by a space.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith' 
*/

const addFullNameProperty = obj => obj.fullName = `${obj.firstName} ${obj.lastName}`; 

/*
32. Write a function called “addObjectProperty”.

Given two objects and a key, “addObjectProperty” sets a new property on the 1st object at 
the given key. The value of that new property is the entire 2nd object.

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
*/

const addObjectProperty = (objToRecieve, key, objAsValue) => objToRecieve[key] = objAsValue;

/*
33. Write a function called “isPersonOldEnoughToDrinkAndDrive”.

Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToDrinkAndDrive” returns whether the given person is 
old enough to legally drink and drive in the United States.

Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false
*/

const isPersonOldEnoughToDrinkAndDrive = obj => false;

/*
34. Write a function called “isPersonOldEnoughToDrive”.

Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToDrive” returns whether the given person is old enough to drive.

Notes:
* The legal driving age in the United States is 16.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
*/

const isPersonOldEnoughToDrive = obj => obj.age>=16 ? true : false; 

/*
35. Write a function called “isPersonOldEnoughToVote”.

Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToVote” returns whether the given person is old enough to vote.

Notes:
* The legal voting age in the United States is 18.

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true
*/

const isPersonOldEnoughToVote = obj => obj.age>=18 ? true : false; 

/*
36. Write a function called “isPersonOldEnoughToDrink”.

Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToDrink” returns whether the given person is old enough to drink.

Notes:
* The legal drinking age in the United States is 21.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false
*/

const isPersonOldEnoughToDrink = obj => obj.age>=21 ? true : false;

/*
37. Write a function called “addArrayProperty”.

Given an object, a key, and an array, “addArrayProperty” sets a new property on the object 
at the given key, with its value set to the given array.

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]
*/

const addArrayProperty = (obj, key, arrayAsValue) => obj[key]=arrayAsValue;

/*
38. Write a function called “getNthElement”.

Given an array and an integer, “getNthElement” returns the element at the given integer,
within the given array.

Notes:
* If the array has a length of 0, it should return ‘undefined’.

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
*/

const getNthElement = (arr, integer) => arr[integer];

/*
39. Write a function called “getFirstElement”.

Given an array, “getFirstElement” returns the first element of the given array.

Notes:
* If the given array has a length of 0, it should return undefined.

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
*/

const getNthElement = arr => arr[0];

/*
40. Write a function called “getLastElement”.

Given an array, “getLastElement” returns the last element of the given array.

Notes:
* If the given array has a length of 0, it should return ‘undefined’.

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
*/

const getLastElement = arr => arr[arr.length-1]; 

/*
41. Write a function called “addToFront”.

Given an array and an element, “addToFront” adds the given element to the front of the given array, 
and returns the given array.

Notes: 
* It should be the SAME array, not a new array.

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

*/

const addToFront = (arr, element) => arr.unshift(element);

/*
42. Write a function called “addToBack”.

Given an array and an element, “addToBack” returns the given array with the given element added to the end.

Note: It should be the SAME array, not a new array.

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]

*/

const addToBack = (arr, element) => arr.push(element);

/*
43. Write a function called “computeAreaOfARectangle”.

Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

*/

const computeAreaOfRectangle =(length, width) => length*width;

/*
44. Write a function called “computePerimeterOfARectangle”.

Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14

*/

const computePerimeterOfArectangle = (length, width) => length+length+width+width;

/*
45. Write a function called “computePerimeterOfATriangle”.

Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20

*/

const computePerimeterOfATriangle = (a, b, c) => a+b+c;

/*
46. Write a function called “computeTripledAreaOfARectangle”.

Given a length and width of a rectangle, “computeTripledAreaOfARectangle” 
returns the rectangle’s area, multiplied by 3.

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 12

*/

const computeTripleAreaOfArectangle = (length, width) => ((length*width)/2)*3;

/*
47. Write a function called “computePerimeterOfACircle”.

Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter.

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345

*/

const computePerimeterOfACircle = r => 2*Math.PI*r;

/*
48. Write a function called “computeAreaOfACircle”.

Given the radius of a circle, “computeAreaOfACircle” returns its area.

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
*/

const computeAreaOfACircle = r => 2*Math.PI*r*2;

/*
49. Write a function called “computePower”.

Given a number and an exponent, “computePower” returns the given number, raised to the given exponent.

var output = computePower(2, 3);
console.log(output); // --> 8

*/

const computePower = (num, exp) => Math.pow(num, exp);

/*
50. Write a function called “computeSquareRoot”.
Given a number, “computeSquareRoot” returns its square root.

var output = computeSquareRoot(9);
console.log(output); // --> 3
*/

const computeSquareRoot = num => Math.sqrt(num);
