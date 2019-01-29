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

var myObj ={};

function addProperty(obj, key) {
  
  obj[key] = true;
  return obj;

}
var output = addProperty(myObj,"myProperty");
console.log(output);

// or
function addProperty(obj, key) {
  return obj[key] = true;
}
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-007-removeProperty

Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined

Your Code Should Pass:

describe("removeProperty", function() {
  it("should remove the property from the passed in object at the passed in key", function() {

    var testObj = {
      name: "Mel",
      age: 88
    };

    removeProperty(testObj, "name");
    expect(testObj.name).toBeUndefined();
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  name: "Sam",
  age: 20
}

function removeProperty(obj, key) {
  return delete obj[key];
};

removeProperty(obj, "name");
***********************************************************************************************************************************
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
preImmersive-buildingBlocksMastery-032-addObjectProperty

Write a function called “addObjectProperty”.

Given two objects and a key, “addObjectProperty” sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.

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

Your Code Should Pass:

describe("addObjectProperty", function() {
  var obj1;
  var obj2;
  beforeEach(function() {
    obj1 = {};
    obj2 = {
      name: "Dude"
    };
  });
  it('should add a property to the passed in object at the passed in key', function() {
    addObjectProperty(obj1, 'testKey', obj2);
    expect(obj1.testKey).toBeDefined();
  });
  it('should set the value at the passed in key on the passed in object to be the second passed in object', function() {
    addObjectProperty(obj1, 'testKey', obj2);
    expect(obj1.testKey).toEqual(obj2);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addObjectProperty(obj1, key, obj2) {
  return obj1[key] = obj2;
};
******************************************************************************************************************************
preImmersive-buildingBlocksMastery-033-isPersonOldEnoughToDrinkAndDrive

Write a function called “isPersonOldEnoughToDrinkAndDrive”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrinkAndDrive” returns whether the given person is old enough to legally drink and drive in the United States.

Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false

Your Code Should Pass:

describe("isPersonOldEnoughToDrinkAndDrive", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToDrinkAndDrive(person)).toBe("boolean");
  });
  it("should return false", function() {
    expect(isPersonOldEnoughToDrinkAndDrive()).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mike = {
  age: 45
};
function isPersonOldEnoughToDrinkAndDrive(person) {
 return false;
};
// its always illegal to drink and drive
*******************************************************************************************************************************************
preImmersive-buildingBlocksMastery-034-isPersonOldEnoughToDrive

Write a function called “isPersonOldEnoughToDrive”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrive” returns whether the given person is old enough to drive.

Notes:
* The legal driving age in the United States is 16.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true

Your Code Should Pass:

describe("isPersonOldEnoughToDrive", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToDrive(person)).toBe("boolean");
  });
  it("should return true if a person has an age of over 16", function() {
    var person = {
      age: 55
    };
    expect(isPersonOldEnoughToDrive(person)).toBe(true);
  });
  it("should return true if a person has an age of 16", function() {
    var person = {
      age: 16
    };
    expect(isPersonOldEnoughToDrive(person)).toBe(true);
  });
  it("should return false if a person has an age under 16", function() {
    var person = {
      age: 15
    };
    expect(isPersonOldEnoughToDrive(person)).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isPersonOldEnoughToDrive(person) {
  return person["age"] > 15 ? true : false;
};
***********************************************************************************************************************************************
preImmersive-buildingBlocksMastery-035-isPersonOldEnoughToVote

Write a function called “isPersonOldEnoughToVote”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToVote” returns whether the given person is old enough to vote.

Notes:
* The legal voting age in the United States is 18.

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true

Your Code Should Pass:

describe("isPersonOldEnoughToVote", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToVote(person)).toBe("boolean");
  });
  it("should return true if a person has an age of over 18", function() {
    var person = {
      age: 55
    };
    expect(isPersonOldEnoughToVote(person)).toBe(true);
  });
  it("should return true if a person has an age of 18", function() {
    var person = {
      age: 18
    };
    expect(isPersonOldEnoughToVote(person)).toBe(true);
  });
  it("should return false if a person has an age under 18", function() {
    var person = {
      age: 15
    };
    expect(isPersonOldEnoughToVote(person)).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isPersonOldEnoughToVote(person) {
  return person["age"] > 17 ? true : false;
};
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-036-isPersonOldEnoughToDrink

Write a function called “isPersonOldEnoughToDrink”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrink” returns whether the given person is old enough to drink.

Notes:
* The legal drinking age in the United States is 21.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false

Your Code Should Pass:

describe("isPersonOldEnoughToDrink", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToDrink(person)).toBe("boolean");
  });
  it("should return true if a person has an age of over 21", function() {
    var person = {
      age: 55
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(true);
  });
  it("should return true if a person has an age of 21", function() {
    var person = {
      age: 21
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(true);
  });
  it("should return false if a person has an age under 21", function() {
    var person = {
      age: 20
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(false);
  });
});
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function isPersonOldEnoughToDrink(person) {
  return person["age"] >20 ? true : false;
};
*****************************************************************************************************************************
preImmersive-buildingBlocksMastery-037-addArrayProperty

Write a function called “addArrayProperty”.

Given an object, a key, and an array, “addArrayProperty” sets a new property on the object at the given key, with its value set to the given array.

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]

Your Code Should Pass:

describe("addArrayProperty", function() {
  var testObj;
  var testArray;
  beforeEach(function() {
    testObj = {};
    testArray = [1, 4];
  });
  it("should add a property to the passed in object at the passed in key", function() {
    addArrayProperty(testObj, "testKey", testArray);
    expect(testObj.testKey).toBeDefined();
  });
  it("should set the value at the passed in key on the passed in object to be the passed in array", function() {
    addArrayProperty(testObj, "testKey", testArray);
    expect(testObj.testKey).toEqual(testArray);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addArrayProperty(obj, key, arr) {
  return obj[key] = arr;
};
***************************************************************************************************************************
preImmersive-buildingBlocksMastery-038-getNthElement

Write a function called “getNthElement”.

Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.

Notes:
* If the array has a length of 0, it should return ‘undefined’.

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

Your Code Should Pass:

describe("getNthElement", function() {
  it("should return the nth element of an array", function() {
    expect(getNthElement([1, 3, 5], 1)).toBe(3);
  });
  it("should return undefined if the array is empty", function() {
    expect(getNthElement([], 1)).toBe(undefined);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getNthElement(array, n) {
  return array[n];
};
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-039-getFirstElement

Write a function called “getFirstElement”.

Given an array, “getFirstElement” returns the first element of the given array.

Notes:
* If the given array has a length of 0, it should return undefined.

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

Your Code Should Pass:

describe("getFirstElement", function() {
  it("should return the first element of an array", function() {
    expect(getFirstElement([1, 3, 5])).toBe(1);
  });
  it("should return undefined if the array is empty", function() {
    expect(getFirstElement([])).toBe(undefined);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getFirstElement(array) {
  return array[0];
};
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-040-getLastElement

Write a function called “getLastElement”.

Given an array, “getLastElement” returns the last element of the given array.

Notes:
* If the given array has a length of 0, it should return ‘undefined’.

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

Your Code Should Pass:

describe("getLastElement", function() {
  it("should return the last element of an array", function() {
    expect(getLastElement([1, 3, 5])).toBe(5);
  });
  it("should return undefined if the array is empty", function() {
    expect(getLastElement([])).toBe(undefined);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLastElement(array) {
  return array[array.length-1];
};  
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-041-addToFront

Write a function called “addToFront”.

Given an array and an element, “addToFront” adds the given element to the front of the given array, and returns the given array.

Notes: 
* It should be the SAME array, not a new array.

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

Your Code Should Pass:

describe("addToFront", function() {
  it("should return an array", function() {
    expect(Array.isArray(addToFront([1, 2], 3))).toBe(true);
  });

  it("addToFront should add an element to the beginning of an array", function() {
    expect(addToFront([1, 2], 3)).toEqual([3, 1, 2]);
  });

  it("should add an element to the beginning of an empty array", function() {
    expect(addToFront([], 3)).toEqual([3]);
  });

  it("should be the same array instance that was passed in", function() {
    var input = [1, 2, 3];
    expect(addToFront(input, 4)).toBe(input);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}
***********************************************************************************************************************************
preImmersive-buildingBlocksMastery-042-addToBack

Write a function called “addToBack”.

Given an array and an element, “addToBack” returns the given array with the given element added to the end.

Note: It should be the SAME array, not a new array.

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]

Your Code Should Pass:

describe("addToBack", function() {
  it("should return an array", function() {
    expect(Array.isArray(addToBack([1, 2], 3))).toBe(true);
  });

  it("should add an element to the end of an array", function() {
    expect(addToBack([1, 2], 3)).toEqual([1, 2, 3]);
  });

  it("should add an element to the end of an empty array", function() {
    expect(addToBack([], 3)).toEqual([3]);
  });

  it("should be the same array instance that was passed in", function() {
    var input = [1, 2, 3];
    expect(addToBack(input, 4)).toBe(input);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addToBack(arr, element) {
  arr.push(element);
  return arr;
}
******************************************************************************************************************************************