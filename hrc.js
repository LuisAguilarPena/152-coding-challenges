HRC beggining 28/01/2019

********************************************************************************************
preImmersive-buildingBlocksMastery-001-isOldEnoughToDrink

Write a function called “isOldEnoughToDrink”.
Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.

var output = isOldEnoughToDrink(22);
console.log(output); // --> true

Your Code Should Pass:

describe("isOldEnoughToDrink", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToDrink(40)).toEqual("boolean");
  });
  it("should return whether the age is greater than 21", function() {
    expect(isOldEnoughToDrink(40)).toBe(true);
  });
  it("should return true if the age is 21", function() {
    expect(isOldEnoughToDrink(21)).toBe(true);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////

function isOldEnoughToDrink(age) {
  if (age > 20) {
  	return true;
  } else {
  	return false;
  }
}

**************************************************************************************************
preImmersive-buildingBlocksMastery-002-isOldEnoughToDrive

Write a function called “isOldEnoughToDrive”.
Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
Notes:
* The legal driving age in the United States is 16.

var output = isOldEnoughToDrive(22);
console.log(output); // --> true

Your Code Should Pass:

describe("isOldEnoughToDrive", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToDrive(40)).toEqual("boolean");
  });
  it("should return true if the age is 16", function() {
    expect(isOldEnoughToDrive(16)).toBe(true);
  });
  it("should return false if the age is less than 16", function() {
    expect(isOldEnoughToDrive(15)).toBe(false);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
function isOldEnoughToDrive(age) {
	output = age > 15 ? true : false;
	return output;
};
******************************************************************************************************
preImmersive-buildingBlocksMastery-003-isOldEnoughToVote

Write a function called “isOldEnoughToVote”.
Given a number, in this case an age, ‘isOldEnoughToVote’ returns whether a person of this given age is old enough to legally vote in the United States.
Notes:
* The legal voting age in the United States is 18.

var output = isOldEnoughToVote(22);
console.log(output); // --> true

Your Code Should Pass:

describe("isOldEnoughToVote", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToVote(40)).toEqual("boolean");
  });
  it("should return whether the age is greater than 18", function() {
    expect(isOldEnoughToVote(40)).toBe(true);
  });
  it("should return true if the age is 18", function() {
    expect(isOldEnoughToVote(18)).toBe(true);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function isOldEnoughToVote(age) {
 return age > 17 ? true : false;
};
************************************************************************************************************
preImmersive-buildingBlocksMastery-004-isOldEnoughToDrinkAndDrive

Write a function called “isOldEnoughToDrinkAndDrive”.
Given a number, in this case an age, “isOldEnoughToDrinkAndDrive” returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

Your Code Should Pass:

describe("isOldEnoughToDrinkAndDrive", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToDrinkAndDrive(19)).toEqual("boolean");
  });
  it("should return false", function() {
    expect(isOldEnoughToDrinkAndDrive(99999)).toBe(false);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isOldEnoughToDrinkAndDrive(age) {
 return age > 0 ? false : true;
};
// or
function isOldEnoughToDrinkAndDrive(age) {
return !age >= 16 
}

********************************************************************************************************************
preImmersive-buildingBlocksMastery-005-getProperty

Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'

Your Code Should Pass:

describe("getProperty", function() {
  var obj;

  beforeEach(function() {
    obj = {
      name: "You"
    }
  });

  it("should return the value of the property located in the object at the passed in key", function() {
    expect(getProperty(obj, "name")).toBe("You");
  });
  it("should return undefined when there is no property at the passed in key", function() {
    expect(getProperty(obj, "age")).toBe(undefined);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var myCar = {
	maker: "Ford",
    model: "Mustang"
}

function getProperty(obj, key) {
	return myCar[key];
};

getProperty(myCar,"maker");
// Or
function getProperty(obj, key) {
    var myCar = {
    	maker: "Ford",
    	model: "Mustang"
	}
    return myCar[key];
};
  
getProperty(myCar, "maker");
// Or
var myCar = {
	maker: "Ford",
	model: "Mustang"
}

function getProperty(obj, key) {  
	return console.log(myCar[key]);
};
  
getProperty(myCar, "maker");

function getProperty(obj, key) {
	var myCar = {
    maker: "Ford",
    model: "Mustang"
  }
    return console.log(myCar[key]);
};

// I was hardcoding, basically creating that function only for that one object so this is the answer that works with any object
function getProperty(obj, key) {
	return obj[key];
};
//or
function getProperty(obj, key) {
	return obj.key;
};

**********************************************************************************************************************************
preImmersive-buildingBlocksMastery-006-addProperty *******************************************************************************

Write a function called “addProperty”.
Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true

Your Code Should Pass:

describe("addProperty", function() {
  var testObj;
  beforeEach(function() {
    testObj = {};
  });
  it("should add a property to the passed in object at the passed in key", function() {
    addProperty(testObj, "testKey");
    expect(testObj.testKey).toBeDefined();
  });
  it("should set the value at the passed in key to true on the passed in object", function() {
    addProperty(testObj, "testKey");
    expect(testObj.testKey).toBe(true);
  });
});

function addProperty(obj, key){
	obj.key = true;
}
// or
function addProperty(obj, key){
	obj.[""] = true;
}

***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-008-checkAge

Write a function called “checkAge”. 
Given a person’s name and age, “checkAge” returns one of two messages:
“Go home, {insert_name_here}!”, if they are younger than 21.
“Welcome, {insert_name_here}!”, if they are 21 or older.
Naturally, replace “{insert_name_here}” with the given name. :)

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'

Your Code Should Pass:

describe("checkAge", function() {
  it("should return a string", function() {
    expect(typeof(checkAge("Dan", "24"))).toBe("string");
  });
  it("should welcome someone over 21", function() {
    expect(checkAge("Dan", "24")).toBe("Welcome, Dan!");
  });
  it("should welcome a 21 year old", function() {
    expect(checkAge("Toni", "21")).toBe("Welcome, Toni!");
  });
  it("should bounce someone under 21", function() {
    expect(checkAge("Rad", "4")).toBe("Go home, Rad!");
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkAge(name, age) {
  return age < 21 ? "Go home, " + name + `!` : "Welcome, " + name + `!`; 
};

checkAge(`Luis`, 20);
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-009-getFullName

Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

Your Code Should Pass:

describe("getFullName", function() {
  it("should return a string", function() {
    expect(typeof(getFullName("Rebecca", "Solnit"))).toBe("string");
  });
  it("should return a full name using firstName and lastName", function() {
    expect(getFullName("Rebecca", "Solnit")).toBe("Rebecca Solnit");
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getFullName(firstName, lastName) {
  return firstName + ` ` + lastName;
};
getFullName(`Luis`, `Aguilar`);

*****************************************************************************************************************************************
preImmersive-buildingBlocksMastery-010-getLengthOfWord

Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.

var output = getLengthOfWord('some');
console.log(output); // --> 4

Your Code Should Pass:

describe("getLengthOfWord", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfWord("something")).toBe("number");
  });
  it("should return the length of the passed in word", function() {
    expect(getLengthOfWord("random")).toBe(6)
  });
  it("should return the length of an empty word", function() {
    expect(getLengthOfWord("")).toBe(0)
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLengthOfWord(word) {
  return word.length;
};
***********************************************************************************************************************************************
preImmersive-buildingBlocksMastery-011-getLengthOfTwoWords

Write a function called “getLengthOfTwoWords”.
Given 2 words, “getLengthOfTwoWords” returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9

Your Code Should Pass:

describe("getLengthOfTwoWords", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfTwoWords("two", "words")).toBe("number");
  });
  it("should return the sum length of two words", function() {
    expect(getLengthOfTwoWords("one", "two")).toBe(6)
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
};
**************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-012-isGreaterThanTen

Write a function called “isGreaterThan10”.
Given a number, “isGreaterThan10” returns whether the given number is greater than 10.

var output = isGreaterThan10(11);
console.log(output); // --> true

Your Code Should Pass:

describe("isGreaterThan10", function() {
  it("should return a boolean", function() {
    expect(typeof isGreaterThan10(40)).toEqual("boolean");
  });
  it("should return false for a number less than 10", function() {
    expect(isGreaterThan10(4)).toBe(false);
  });
  it("should return true for a number greater than 10", function() {
    expect(isGreaterThan10(40)).toBe(true);
  });
  it("should return false for the number 10", function() {
    expect(isGreaterThan10(10)).toBe(false);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isGreaterThan10(num) {
  return num > 10;
};
********************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-013-isLessThan30

Write a function called “isLessThan30”.
Given a number, “isLessThan30” returns whether the given number is less than 30.

var output = isLessThan30(9);
console.log(output); // --> true

Your Code Should Pass:

describe("isLessThan30", function() {
  it("should return a boolean", function() {
    expect(typeof isLessThan30(40)).toEqual("boolean");
  });
  it("should return true for a number less than 30", function() {
    expect(isLessThan30(4)).toBe(true);
  });
  it("should return false for a number greater than 30", function() {
    expect(isLessThan30(400)).toBe(false);
  });
  it("should return false for the number 30", function() {
    expect(isLessThan30(30)).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isLessThan30(num) {
  return num < 30;
};
*****************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-014-equalsTen

Write a function called “equalsTen”.
Given a number, “equalsTen” returns whether or not the given number is 10.

var output = equalsTen(9);
console.log(output); // --> false

Your Code Should Pass:

describe("equalsTen", function() {
  it("should return a boolean", function() {
    expect(typeof equalsTen(10)).toEqual("boolean");
  });
  it("should return true for the number 10", function() {
    expect(equalsTen(10)).toBe(true);
  });
  it("should return false for a number greater than 10", function() {
    expect(equalsTen(400)).toBe(false);
  });
  it("should return false for the number 10", function() {
    expect(equalsTen(3)).toBe(false);
  });
});	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function equalsTen(num) {
  return num===10;
};
*****************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-015-isLessThan


Write a function called “isLessThan”.
Given 2 numbers, “isLessThan” returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true

Your Code Should Pass:

describe("isLessThan", function() {
  it("should return a boolean", function() {
    expect(typeof isLessThan(40, 30)).toEqual("boolean");
  });
  it("should return whether num2 is less than num1", function() {
    expect(isLessThan(20, 200)).toBe(false);
  });
  it("should return false if the numbers are equal", function() {
    expect(isLessThan(20, 20)).toBe(false);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isLessThan(num1, num2) {
  return num1>num2;
};
**********************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-016-isGreaterThan

Write a function called “isGreaterThan”.
Given 2 numbers, “isGreaterThan” returns whether num2 is greater than num1.

var output = isGreaterThan(11, 10);
console.log(output); // --> false

Your Code Should Pass:

describe("isGreaterThan", function() {
  it("should return a boolean", function() {
    expect(typeof isGreaterThan(40, 30)).toEqual("boolean");
  });
  it("should return whether num2 is greater than num1", function() {
    expect(isGreaterThan(20, 200)).toBe(true);
  });
  it("should return false if the numbers are equal", function() {
    expect(isGreaterThan(20, 20)).toBe(false);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isGreaterThan(num1, num2) {
  return num1<num2;
};
********************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-017-isEqualTo

Write a function called “isEqualTo”.
Given 2 numbers, “isEqualTo” returns whether num2 is equal to num1.

var output = isEqualTo(11, 10);
console.log(output); // --> false

Your Code Should Pass:

describe("isEqualTo", function() {
  it("should return a boolean", function() {
    expect(typeof isEqualTo(40, 30)).toEqual("boolean");
  });
  it("should return false if num2 is greater than num1", function() {
    expect(isEqualTo(20, 200)).toBe(false);
  });
  it("should return false if num2 is less than num1", function() {
    expect(isEqualTo(20, 2)).toBe(false);
  });
  it("should return true if the numbers are equal", function() {
    expect(isEqualTo(20, 20)).toBe(true);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isEqualTo(num1, num2) {
  return num1===num2;   
};
****************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-018-isEven

Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

var output = isEven(11);
console.log(output); // --> false

Your Code Should Pass:
describe("isEven", function() {
  it("should return a boolean", function() {
    expect(typeof isEven(40)).toEqual("boolean");
  });
  it("should return if the number is even", function() {
    expect(isEven(8)).toBe(true);
  });
  it("should return true if the number is 0", function() {
    expect(isEven(0)).toBe(true);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isEven(num) {
  return num % 2===0;
};
************************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-019-isOdd

Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true

Your Code Should Pass:

describe("isOdd", function() {
  it("should return a boolean", function() {
    expect(typeof isOdd(40)).toEqual("boolean");
  });
  it("should return if the number is odd", function() {
    expect(isOdd(7)).toBe(true);
  });
  it("should return false if the number is 0", function() {
    expect(isOdd(0)).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isOdd(num) {
 return num % 2 !== 0;
};
*************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-020-isSameLength

Write a function called “isSameLength”.

Given two words, “isSameLength” returns whether the given words have the same length.

var output = isSameLength('words', 'super');
console.log(output); // --> true

Your Code Should Pass:

describe("isSameLength", function() {
  it("should return a boolean", function() {
    expect(typeof isSameLength("hi", "there")).toEqual("boolean");
  });
  it("should return true if the two words are the same length", function() {
    expect(isSameLength("yes", "you")).toBe(true);
  });
  it("should return false if the two words are not the same length", function() {
    expect(isSameLength("hi", "there")).toBe(false);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isSameLength(word1, word2) {
  return word1.length === word2.length;
};
******************************************************************************************************************************
preImmersive-buildingBlocksMastery-021-areBothOdd

Write a function called “areBothOdd”.

Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

var output = areBothOdd(1, 3);
console.log(output); // --> true

Your Code Should Pass:

describe("areBothOdd", function() {
  it("should return a boolean", function() {
    expect(typeof areBothOdd(40, 3)).toEqual("boolean");
  });
  it("should return true if both numbers are odd", function() {
    expect(areBothOdd(41, 3)).toBe(true);
  });
  it("should return false if the first number is even", function() {
    expect(areBothOdd(4, 3)).toBe(false);
  });
  it("should return false if the second number is even", function() {
    expect(areBothOdd(5, 30)).toBe(false);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function areBothOdd(num1, num2) {
  return num1 % 2 !== 0 && num2 % 2 !== 0;
};
****************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-022-isEitherEven	

Write a function called “isEitherEven”.

Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.

var output = isEitherEven(1, 4);
console.log(output); // --> true

Your Code Should Pass:

describe("isEitherEven", function() {
  it("should return a boolean", function() {
    expect(typeof isEitherEven(40, 3)).toEqual("boolean");
  });
  it("should return true if the first number is even", function() {
    expect(isEitherEven(4, 3)).toBe(true);
  });
  it("should return true if the second number is even", function() {
    expect(isEitherEven(7, 30)).toBe(true);
  });
  it("should return true if the both numbers are even", function() {
    expect(isEitherEven(70, 30)).toBe(true);
  });
  it("should return false if both numbers are odd", function() {
    expect(isEitherEven(71, 31)).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isEitherEven(num1, num2) {
  return num1 % 2 === 0 || num2 % 2 === 0;
};
*****************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-023-isOddLength

Write a function called “isOddLength”.

Given a word, “isOddLength” returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true

Your Code Should Pass:

describe("isOddLength", function() {
  it("should return a boolean", function() {
    expect(typeof isOddLength("wow")).toEqual("boolean");
  });
  it("should return if the length of the word is even", function() {
    expect(isOddLength("special")).toBe(true);
  });
  it("should return false if the string is empty", function() {
    expect(isOddLength("")).toBe(false);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isOddLength(word) {
 return word.length % 2 !== 0
};
****************************************************************************************************************************************
preImmersive-buildingBlocksMastery-024-isEvenLength

Write a function called “isEvenLength”.

Given a word, “isEvenLength” returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false

Your Code Should Pass:

describe("isEvenLength", function() {
  it("should return a boolean", function() {
    expect(typeof isEvenLength("wow")).toEqual("boolean");
  });
  it("should return if the length of the word is even", function() {
    expect(isEvenLength("specials")).toBe(true);
  });
  it("should return true if the string is empty", function() {
    expect(isEvenLength("")).toBe(true);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isEvenLength(word) {
  return word.length % 2 === 0;
};
*******************************************************************************************************************
preImmersive-buildingBlocksMastery-025-isEvenAndGreaterThan10

Write a function called “isEvenAndGreaterThanTen”.

Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false

Your Code Should Pass:

describe("isEvenAndGreaterThanTen", function() {
  it("should return a boolean", function() {
    expect(typeof isEvenAndGreaterThanTen(40)).toEqual("boolean");
  });
  it("should return true if the number is even and greater than 10", function() {
    expect(isEvenAndGreaterThanTen(80)).toBe(true);
  });
  it("should return false if the number is odd", function() {
    expect(isEvenAndGreaterThanTen(91)).toBe(false);
  });
  it("should return false if the number is less than 10", function() {
    expect(isEvenAndGreaterThanTen(8)).toBe(false);
  });
  it("should return false if the number is 10", function() {
    expect(isEvenAndGreaterThanTen(10)).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isEvenAndGreaterThanTen(num) {
  return num % 2 ===0 && num > 10;
};
*************************************************************************************************
preImmersive-buildingBlocksMastery-026-average

Write a function called “average”.

Given two numbers, “average” returns their average.

var output = average(4, 6);
console.log(output); // --> 5
Your Code Should Pass:

describe("average", function() {
  it("should return a number", function() {
    expect(typeof average(1, 12)).toBe("number");
  });
  it("should return the average of two numbers", function() {
    expect(average(2, 4)).toBe(3);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////
function average(num1, num2) {
  return (num1 + num2)/2;
};
*****************************************************************************************************************************************
preImmersive-buildingBlocksMastery-027-computeAreaOfATriangle

Write a function called “computeAreaOfATriangle”.

Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
Your Code Should Pass:

describe("computeAreaOfATriangle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfATriangle(6, 4)).toBe("number");
  });
  it("should return the area of a triangle", function() {
    expect(computeAreaOfATriangle(6, 4)).toBe(12);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeAreaOfATriangle(base, height) {
  return (base * height)/2;
};
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-028-cube

Write a function called “cube”.

Given a number, “cube” returns the cube of that number.

var output = cube(3);
console.log(output); // --> 27
Your Code Should Pass:

describe("cube", function() {
  it("should_cube_a_positive_number", function() {
    expect(cube(2)).toBe(8);
  });

  it("should_cube_0", function() {
    expect(cube(0)).toBe(0);
  });

  it("should_cube_a_number_greater_than_10", function() {
    expect(cube(12)).toBe(1728);
  });

  it("should_cube_a_negative_number", function() {
    expect(cube(-5)).toBe(-125);
  });
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cube(num) {
  return num*num*num;
};
***************************************************************************************************************************
preImmersive-buildingBlocksMastery-029-square

Write a function called “square”.

Given a number, “square” should return the square of the given number.

var output = square(5);
console.log(output); // --> 25

Your Code Should Pass:

describe("square", function() {
  it("should_square_a_positive_number", function() {
    expect(square(2)).toBe(4);
  });

  it("should_square_0", function() {
    expect(square(0)).toBe(0);
  });

  it("should_square_a_number_greater_than_10", function() {
    expect(square(12)).toBe(144);
  });

  it("should_square_a_negative_number", function() {
    expect(square(-5)).toBe(25);
  });
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function square(num) {
  return num*num;
};
***************************************************************************************************************************
preImmersive-buildingBlocksMastery-030-computeAverageLengthOfWords

Write a function called “computeAverageLengthOfWords”.

Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

Your Code Should Pass:

describe("computeAverageLengthOfWords", function() {
  it("should return a number", function() {
    expect(typeof computeAverageLengthOfWords("these", "words")).toBe("number");
  });
  it("should return the average length of the two words", function() {
    expect(computeAverageLengthOfWords("is", "this")).toBe(3);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length)/2;
};
****************************************************************************************************************************
preImmersive-buildingBlocksMastery-031-addFullNameProperty

Write a function called “addFullNameProperty”.

Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” returns a “fullName” property whose value is a string with the first name and last name separated by a space.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'

Your Code Should Pass:

describe("addFullNameProperty", function() {
  it("should create a fullName property with the firstName and lastName separated by a space", function() {
    var tim = {
      firstName: "Tim",
      lastName: "Goldfish"
    };
    addFullNameProperty(tim);
    expect(tim.fullName).toBe("Tim Goldfish");
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addFullNameProperty(obj) {
  return obj.fullName = obj.firstName + ` ` + obj.lastName;
};
*******************************************************************************************************************
