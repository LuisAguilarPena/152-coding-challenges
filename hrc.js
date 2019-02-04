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
preImmersive-buildingBlocksMastery-043-computeAreaOfARectangle

Write a function called “computeAreaOfARectangle”.

Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

Your Code Should Pass:

describe("computeAreaOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfARectangle(7, 6)).toBe("number");
  });
  it("should return the area of a rectangle", function() {
    expect(computeAreaOfARectangle(7, 6)).toBe(42);
  });
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeAreaOfARectangle(length, width) {
  //return (length*width)/2; // A = (h*b)/2
  return (length*width);
}
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-044-computePerimeterOfARectangle

Write a function called “computePerimeterOfARectangle”.

Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14

Your Code Should Pass:

describe("computePerimeterOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfARectangle(5, 2)).toBe("number");
  });
  it("should return the perimeter of a rectangle", function() {
    expect(computePerimeterOfARectangle(5, 2)).toBe(14);
  });
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computePerimeterOfARectangle(length, width) {
  return (length*2)+(width*2);
};
*****************************************************************************************************************************************
preImmersive-buildingBlocksMastery-045-computePerimeterOfATriangle

Write a function called “computePerimeterOfATriangle”.

Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20

Your Code Should Pass:

describe("computePerimeterOfATriangle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfATriangle(6, 4, 10)).toBe("number");
  });
  it("should return the perimeter of a triangle", function() {
    expect(computePerimeterOfATriangle(6, 4, 10)).toBe(20);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}
*****************************************************************************************************************************************
preImmersive-buildingBlocksMastery-046-computeTripledAreaOfARectangle

Write a function called “computeTripledAreaOfARectangle”.

Given a length and width of a rectangle, “computeTripledAreaOfARectangle” returns the rectangle’s area, multiplied by 3.

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24

Your Code Should Pass:

describe("computeTripledAreaOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computeTripledAreaOfARectangle(7, 6)).toBe("number");
  });
  it("should return the area of a rectangle", function() {
    expect(computeTripledAreaOfARectangle(7, 6)).toBe(126);
  });
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeTripledAreaOfARectangle(length, width) {
  //return ((length*width)/2)*3; // (Height*Base)/2 for area
  return (length*width)*3;
}
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-047-computePerimeterOfACircle

Write a function called “computePerimeterOfACircle”.

Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter.

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345

Your Code Should Pass:

describe("computePerimeterOfACircle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfACircle(4)).toBe("number");
  });
  it("should return the perimeter of a circle", function() {
    expect(computePerimeterOfACircle(4)).toBe(25.132741228718345);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computePerimeterOfACircle(radius) {
  return 2*Math.PI*radius; // Perimeter (P) = 2 · π · R
}
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-048-computeAreaOfACircle

Write a function called “computeAreaOfACircle”.

Given the radius of a circle, “computeAreaOfACircle” returns its area.

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669

Your Code Should Pass:

describe("computeAreaOfACircle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfACircle(4)).toBe("number");
  });
  it("should return the area of a circle", function() {
    expect(computeAreaOfACircle(4)).toBe(50.26548245743669);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeAreaOfACircle(radius) {
  return Math.PI*(radius*radius) //A=π(square of radius)
}
********************************************************************************************************************************************
preImmersive-buildingBlocksMastery-049-computePower

Write a function called “computePower”.

Given a number and an exponent, “computePower” returns the given number, raised to the given exponent.

var output = computePower(2, 3);
console.log(output); // --> 8

Your Code Should Pass:

describe("computePower", function() {
  it("should return a number", function() {
    expect(typeof computePower(2, 4)).toBe("number");
  });
  it("should return a number raised to a given exponent", function() {
    expect(computePower(2, 4)).toBe(16);
  });
  it("should return a negative number raised to a given exponent", function() {
    expect(computePower(-2, 4)).toBe(16);
  });
  it("should return a number raised to 0", function() {
    expect(computePower(-2, 0)).toBe(1);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computePower(num, exponent) {
  return Math.pow(num, exponent);
}
//or
function computePower(num, exponent) {
  return num**exponent;
}
******************************************************************************************************************************************
preImmersive-buildingBlocksMastery-050-computeSquareRoot

Write a function called “computeSquareRoot”.
Given a number, “computeSquareRoot” returns its square root.

var output = computeSquareRoot(9);
console.log(output); // --> 3

Your Code Should Pass:

describe("computeSquareRoot", function() {
  it("should return a number", function() {
    expect(typeof computeSquareRoot(4)).toBe("number");
  });
  it("should return the square root of a number", function() {
    expect(computeSquareRoot(4)).toBe(2);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeSquareRoot(num) {
  return Math.sqrt(num);
}
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-051-doubleSquareRootOf

Write a function called “doubleSquareRootOf”.
Given a number, “doubleSquareRootOf” returns double its square root.

var output = doubleSquareRootOf(121);
console.log(output); // --> 22

Your Code Should Pass:

describe("doubleSquareRootOf", function() {
  it("should return a number", function() {
    expect(typeof doubleSquareRootOf(9)).toBe("number");
  });
  it("should return the doubled square root of the passed in number", function() {
    expect(doubleSquareRootOf(9)).toBe(6);
  });
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function doubleSquareRootOf(num) {
 return (Math.sqrt(num))*2;
}
*******************************************************************************************************************************
preImmersive-buildingBlocksMastery-052-getLengthOfThreeWords

Write a function called “getLengthOfThreeWords”.

Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14

Your Code Should Pass:

describe("getLengthOfThreeWords", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfThreeWords("three", "random", "words")).toBe("number");
  });
  it("should return the sum length of three words", function() {
    expect(getLengthOfThreeWords("some", "other", "words")).toBe(14)
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}
****************************************************************************************************************************
preImmersive-buildingBlocksMastery-053-joinArrays

Write a function called “joinArrays”.

Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, followed by the elementsin “arr2”.

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
You should be familiar with the “concat” method for this problem.

Your Code Should Pass:

describe("joinArrays", function() {
  it("should return an array", function() {
    expect(Array.isArray(joinArrays(['a', 'b'], [1, 3]))).toBe(true);
  });
  it("should return an array with the elements from the first and then the second array", function() {
    expect(joinArrays(['a', 'b'], [1, 3])).toEqual(['a', 'b', 1, 3]);
  });
  it("should handle empty arrays in the first position", function() {
    expect(joinArrays([], [1, 3])).toEqual([1, 3]);
  });
  it("should handle empty arrays in the second position", function() {
    expect(joinArrays(['a', 'b'], [])).toEqual(['a', 'b']);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function joinArrays(arr1, arr2) {
  var arr = arr1.concat(arr2);
  return arr;
}
**************************************************************************************************************************
preImmersive-buildingBlocksMastery-054-getElementsAfter

Write a function called “getElementsAfter”.

Given an array and an index, “getElementsAfter” returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']

Your Code Should Pass:

describe("getElementsAfter", function() {
  it("should return an array", function() {
    expect(Array.isArray(getElementsAfter([4, 5, 6], 2))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array getElementsAfter the nth", function() {
    expect(getElementsAfter([4, 5, 6, 7, 8, 9], 3)).toEqual([8, 9]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getElementsAfter([4], 0)).toEqual([]);
  });
  it("should return an empty array when passed an n out of range", function() {
    expect(getElementsAfter([4], 11)).toEqual([]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getElementsAfter([])).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getElementsAfter(array, n) {
  arr = array.slice(n+1);
  return arr;
}
// or
function getElementsAfter(array, n) {
  // create new array
  var newArray = [];
  // loop through the input array 
  for(var i = n + 1; i < array.length; i++ ){
  // if index > n
    // if(i >= n){
  // add to the new array
      newArray.push(array[i])
    // }  
  }
    // return  the new array
   return newArray
}
**********************************************************************************************************************************
preImmersive-buildingBlocksMastery-055-getElementsUpTo

Write a function called “getElementsUpTo”.

Given an array and a index, “getElementsUpTo”, returns an array with all the elements up until, but not including, the element at the given index.

Notes:
* In order to do this you should be familiar with the ‘slice’ method.

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']

Your Code Should Pass:

describe("getElementsUpTo", function() {
  it("should return an array", function() {
    expect(Array.isArray(getElementsUpTo([4, 5, 6], 2))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array up until the nth", function() {
    expect(getElementsUpTo([4, 5, 6], 2)).toEqual([4, 5]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getElementsUpTo([4], 0)).toEqual([]);
  });
  it("should return a mirror of the original array when passed an n out of range", function() {
    expect(getElementsUpTo([4], 10)).toEqual([4]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getElementsUpTo([])).toEqual([]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getElementsUpTo(array, n) {
   return array = array.slice(0, n)
};

//Or loop method:

function getElementsUpToWithLoop(array,n){
  var newArray = [];
  
  for(i = 0; array[i] < array[n]; i++){
    newArray.push(array[i]);
  }
  
  return newArray;
}
var output = getElementsUpToWithLoop(['a', 'b', 'c', 'd', 'e'],3);
console.log(output);
*************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-056-getAllElementsButFirst

Write a function called “getAllElementsButFirst”.

Given an array, “getAllElementsButFirst” returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

Your Code Should Pass:

describe("getAllElementsButFirst", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllElementsButFirst([4, 5, 6]))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array, except for the first", function() {
    expect(getAllElementsButFirst([4, 5, 6])).toEqual([5, 6]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getAllElementsButFirst([4])).toEqual([]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getAllElementsButFirst([])).toEqual([]);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getAllElementsButFirst(array) {
  return newArr = array.slice(1);
}
************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-057-getAllElementsButLast

Write a function called “getAllElementsButLast”.

Given an array, “getAllElementsButLast” returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

Your Code Should Pass:

describe("getAllElementsButLast", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllElementsButLast([4, 5, 6]))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array, except for the last", function() {
    expect(getAllElementsButLast([4, 5, 6])).toEqual([4, 5]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getAllElementsButLast([4])).toEqual([]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getAllElementsButLast([])).toEqual([]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getAllElementsButLast(array) {
  return newArr = array.slice(0, array.length-1);
}
//or
function getAllElementsButLast(array) {
  // your code here
  /* START SOLUTION */
return array.slice(0, -1);
  /* END SOLUTION */
}
//or
function getAllElementsButLast(array) {
  array.pop();
  return array
}
***************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-058-removeFromFront

Write a function called “removeFromFront”.

Given an array, “removeFromFront” returns the given array with its first element removed.

Notes:
* You should be familiar with the method ‘shift’.

var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]

Your Code Should Pass:

describe("removeFromFront", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromFront([1, 2, 3]))).toBe(true);
  });
  it("should return the array with the first element removed", function() {
    expect(removeFromFront([1, 2])).toEqual([2]);
  });
  it("should handle an empty array", function() {
    expect(removeFromFront([])).toEqual([]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeFromFront(array) {
  array.shift();
  return array;
}
//or
function removeFromFront(array) {
  newArray = array.slice(1);
  return newArray;
}
******************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-059-removeFromBackOfNew

Write a function called “removeFromBackOfNew”.

Given an array, “removeFromBackOfNew” returns a new array containing all but the last element of the given array.

Notes:
* You should be familiar with the ‘slice’ method.

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]

Your Code Should Pass:

describe("removeFromBackOfNew", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromBackOfNew([1, 2], 3))).toBe(true);
  });
  it("should return an array with the last element of the passed in array removed", function() {
    expect(removeFromBackOfNew([1, 2])).toEqual([1]);
  });
  it("should handle an empty array", function() {
    expect(removeFromBackOfNew([])).toEqual([]);
  });
  it("should leave arr unmodified", function() {
    var originalArray = [1, 2];
    var newArray = removeFromBackOfNew(originalArray);
    expect(originalArray).toEqual([1, 2]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeFromBackOfNew(arr) {
  var newArray = arr.slice(0, arr.length-1);
  return newArray;
}
*************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-060-removeFromFrontOfNew

Write a function called “removeFromFrontOfNew”.

Given an array, “removeFromFrontOfNew” returns a new array containing all but the first element of the given array.

Notes:
* You should be familiar with the ‘slice’ method.

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

Your Code Should Pass:

describe("removeFromFrontOfNew", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromFrontOfNew([1, 2]))).toBe(true);
  });
  it("should remove an element from the front of an array", function() {
    expect(removeFromFrontOfNew([1, 2])).toEqual([2]);
  });
  it("should handle an empty array", function() {
    expect(removeFromFrontOfNew([])).toEqual([]);
  });
  it("should leave arr unmodified", function() {
    var originalArray = [1, 2];
    var newArray = removeFromFrontOfNew(originalArray);
    expect(originalArray).toEqual([1, 2]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeFromFrontOfNew(arr) {
  var newArr = arr.slice(1);
  return newArr;
}
************************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-061-countCharacter

Write a function called “countCharacter”.

Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

Your Code Should Pass:

describe("countCharacter", function() {
  it("should return a number", function() {
    expect(typeof countCharacter("say what!?", "a")).toBe("number");
  });
  it("should return the number of occurences of a character in a string when the character exists", function() {
    expect(countCharacter("say what!?", "a")).toBe(2);
  });
  it("should return the number of occurences of a character in a string when the character does not exist", function() {
    expect(countCharacter("say what!?", "x")).toBe(0);
  });
  it("should return the number of occurences of a non-alphanumeric character in a string when the character exists", function() {
    expect(countCharacter("say what!?", " ")).toBe(1);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countCharacter(str, char) {
  var counter = 0;
  for (x = 0 ; x < str.length ;  x++) {
    if (str[x] === char) {
      counter += 1;
    }
  }
  return counter;
}

var output = countCharacter('test', 'z');
console.log(output);
************************************************************************************************************************************************
preImmersive-buildingBlocksMastery-062-getAllLetters

Write a function called “getAllLetters”.

Given a word, “getAllLetters” returns an array containing every character in the word.

Notes:
* If given an empty string, it should return an empty array.

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

Your Code Should Pass:

describe("getAllLetters", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllLetters("something like this here"))).toBe(true);
  });
  it("should return an array containing all the letters in the word", function() {
    expect(getAllLetters("Eowin")).toEqual(["E", "o", "w", "i", "n"]);
  });
  it("should return an empty array when given an empty string", function() {
    expect(getAllLetters("")).toEqual([]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getAllLetters(str) {
  var newArr = str.split("");
  return newArr;
}
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
// or
function getAllLetters(str) {
return array = str.split('');
}
// or
// Given a word
var output = getAllLetters('Xoalxiyetl');

//Write a function called “getAllLetters”.
function getAllLetters(str) {
  // your code here
  /* START SOLUTION */
  // returns an array containing every character in the word.
  var arr1=[]; // create an array
  for (var i = 0; i < str.length; i ++){ //for loop to  go trough all the letters 
    arr1.push(str[i]); // adds the letters to the string 
  }
  return arr1;
  /* END SOLUTION */
}

console.log(output); // --> [ 'X', 'o', 'a', 'l', 'x', 'i', 'y', 'e', 't', 'l' ]
******************************************************************************************************************************
preImmersive-buildingBlocksMastery-063-getAllWords

Write a function called “getAllWords”.

Given a sentence, “getAllWords” returns an array containing every word in the sentence.

Notes:
* If given an empty string, it should return an empty array.

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

Your Code Should Pass:

describe("getAllWords", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllWords("something like this here"))).toBe(true);
  });
  it("should return an array containing all the words in the sentence", function() {
    expect(getAllWords("Something like this here")).toEqual(["Something", "like", "this", "here"]);
  });
  it("should return an empty array when given an empty string", function() {
    expect(getAllWords("")).toEqual([]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getAllWords(str) {
  return str.split(" ", str.length);
}
// or
function getAllWords(str) {
  if (str === "") return [];
  return str.split(" ")
}
// or
function getAllWords(str) {

  return str.length > 0 ? str.split(' ') : [];
}
*****************************************************************************************************************
preImmersive-buildingBlocksMastery-064-countWords

Write a function called “countWords”.

Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

Your Code Should Pass:

describe("countWords", function() {
  it("should return an object", function() {
    expect(typeof countWords("ask a bunch try a bunch get a bunch")).toBe("object");
  });
  it("should return an object where each property gives a word in the string, with its number of appearances", function() {
    var result = {
      ask: 1,
      a: 2,
      bunch: 2,
      get: 1
    };
    expect(countWords("ask a bunch get a bunch")).toEqual(result);
  });
  it("should return an empty object if passed an empty string", function() {
    expect(countWords("")).toEqual({});
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countWords(str){
  
  var obj = {}; // creates an empty object
  
  if (str === '') { // if string is empty
    return obj; // stop function and return empty obj
  }
  
  array = str.split(' ');  // creates an array to store the words ["ask", "a", "bunch", "get", "a", "bunch"]
  for (var x = 0; x <array.length; x++){ // loop over each word in the array (index)
    if (obj[array[x]] === undefined) { // if obj[key] has and undefined value it means that key/word is new
      obj[array[x]] = 1; // so add a value of one to start
    } else // else it means that the key/word has a defined value so its not new 
      obj[array[x]]++; // add one to that key's value
  }
  return obj; // finally return to us the object with all the new properties
}

countWords('ask a bunch get a bunch');

// or

function countWords(str) {
  if (str === "") return {};
  var obj = {};
  str.split(" ").forEach(function (e) {
    if (obj[e] === undefined) { obj[e] = 1; }
    else { obj[e]++; }
  });
  
  return obj;
}
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-065-removeFromBack

Write a function called “removeFromBack”.

Given an array, “removeFromBack” returns the given array with its last element removed.

Notes:
* You should be familiar with the method ‘pop’.

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]

Your Code Should Pass:

describe("removeFromBack", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromBack([1, 2, 3]))).toBe(true);
  });
  it("should remove the last element from a 3-element array", function() {
    expect(removeFromBack([1, 2, 3])).toEqual([1, 2]);
  });
  it("should remove the last element from a 2-element array", function() {
    expect(removeFromBack([1, 2])).toEqual([1]);
  });
  it("should handle an empty array", function() {
    expect(removeFromBack([])).toEqual([]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeFromBack(arr) {
  arr.pop();
  return arr;
}
*************************************************************************************************************************
preImmersive-buildingBlocksMastery-066-or

Write a function called “or”.

Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
Notes:
* Do not use the || operator.
* Use ! and && operators instead.

var output = or(true, false);
console.log(output); // --> true;

Your Code Should Pass:

describe("or", function() {
  it("should not use the logical OR operator", function() {
    var body = or.toString()
    expect(/\|\|/.test(body)).toBe(false);
  });
  it("should return a boolean", function() {
    expect(typeof or(true, true)).toEqual("boolean");
  });
  it("should return true if the first value is true", function() {
    expect(or(true, false)).toBe(true);
  });
  it("should return true if the second value is true", function() {
    expect(or(false, true)).toBe(true);
  });
  it("should return true both values are true", function() {
    expect(or(true, true)).toBe(true);
  });
  it("should return false both values are false", function() {
    expect(or(false, false)).toBe(false);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function or(expression1, expression2) {
return  expression1 && expression2 ? true : !expression1 && !expression2 ? false : !expression1 && expression2 ? true : true;
}
// or
function or(expression1, expression2) {
  if (expression1) { return true; }
  if (expression2) { return true; }
  return false;
}
// or
function or(expression1, expression2) {
 if(!expression1 && !expression2){
  return false;
  }else {
  return true;
  }
}
**********************************************************************************************************************
preImmersive-buildingBlocksMastery-067-isEitherEvenOrAreBoth7

Write a function called “isEitherEvenOrAreBoth7”.

Given two numbers, ‘isEitherEvenOrAreBoth7’ returns whether at least one of them is even, or, both of them are 7.

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true

Your Code Should Pass:

describe("isEitherEvenOrAreBoth7", function() {
  it("should return a boolean", function() {
    expect(typeof isEitherEvenOrAreBoth7(40, 3)).toEqual("boolean");
  });
  it("should return true if the first number is even", function() {
    expect(isEitherEvenOrAreBoth7(4, 3)).toBe(true);
  });
  it("should return true if the second number is even", function() {
    expect(isEitherEvenOrAreBoth7(7, 8)).toBe(true);
  });
  it("should return true if the both numbers are even", function() {
    expect(isEitherEvenOrAreBoth7(2, 4)).toBe(true);
  });
  it("should return true if the both numbers are 7", function() {
    expect(isEitherEvenOrAreBoth7(7, 7)).toBe(true);
  });
  it("should return false if the both numbers are odd and not both 7", function() {
    expect(isEitherEvenOrAreBoth7(7, 3)).toBe(false);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isEitherEvenOrAreBoth7(num1, num2) {
  return (num1%2 === 1 && num2%2 === 1) && (num1 !== 7 || num2 !== 7)  ? false : 
  num1 === 7 || num2 === 7 ? true : num1 === 7 && num2 === 7 ? true :
  num1%2 === 0 || num2%2 === 0 ? true : num1%2 === 0 && num2%2 === 0 ? true : false;  
}
// or
function isEitherEvenOrAreBoth7(num1, num2) {
  return ((num1 === 7 && num2 === 7) || (num1 % 2 === 0 || num2 % 2 === 0))
}
*********************************************************************************************************************************
preImmersive-buildingBlocksMastery-068-isEitherEvenAndLessThan9

Write a function called “isEitherEvenAndLessThan9”.

Given two numbers, ‘isEitherEvenAndLessThan9’ returns whether at least one of them is even, and, both of them are less than 9.

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false

Your Code Should Pass:

describe("isEitherEvenAndLessThan9", function() {
  it("should return a boolean", function() {
    expect(typeof isEitherEvenAndLessThan9(40, 3)).toEqual("boolean");
  });
  it("should return true if the first number is even and both are less than 9", function() {
    expect(isEitherEvenAndLessThan9(4, 3)).toBe(true);
  });
  it("should return true if the second number is even and both are less than 9", function() {
    expect(isEitherEvenAndLessThan9(7, 8)).toBe(true);
  });
  it("should return true if the both numbers are even and both are less than 9", function() {
    expect(isEitherEvenAndLessThan9(2, 4)).toBe(true);
  });
  it("should return false if the both numbers are greater than 9", function() {
    expect(isEitherEvenAndLessThan9(72, 32)).toBe(false);
  });
  it("should return false if the first number is greater than 9", function() {
    expect(isEitherEvenAndLessThan9(72, 2)).toBe(false);
  });
  it("should return false if the second number is greater than 9", function() {
    expect(isEitherEvenAndLessThan9(2, 20)).toBe(false);
  });
  it("should return false if neither is even", function() {
    expect(isEitherEvenAndLessThan9(3, 5)).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isEitherEvenAndLessThan9(num1, num2) {
  return ((num1%2===0 || num2%2===0) && (num1<9 && num2<9));
}
*****************************************************************************************************************
preImmersive-buildingBlocksMastery-069-extend

Write a function called “extend”.

Given two objects, “extend” adds properties from the 2nd object to the 1st object.

Notes:
* Add any keys that are not in the 1st object.
* If the 1st object already has a given key, ignore it (do not overwrite the property value).
* Do not modify the 2nd object at all.

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

Your Code Should Pass:

describe("extend", function() {
  it("should extend the first object with unrepresented properties from the second object", function() {
    var obj1 = {
      a: 1,
      b: 2
    };
    var obj2 = {
      b: 4,
      c: 3
    };
    var result = {
      a: 1,
      b: 2,
      c: 3
    };

    extend(obj1, obj2);
    expect(obj1).toEqual(result);
  });
  it("should extend the first object with unrepresented properties from the second object", function() {
    var obj1 = {
      a: 1,
      b: 2
    };
    var obj2 = {
      b: 4,
      c: 3
    };

    extend(obj1, obj2);
    expect(obj2).toEqual({b: 4, c: 3});
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

function extend(obj1, obj2) {
    for (var propertykey in obj2) {
      if (!obj1[propertykey]) { 
        obj1[propertykey] = obj2[propertykey]
      }
    }
}

extend(obj1, obj2);
console.log(obj1); // --> {a : 1, b : 2, c : 3}
console.log(obj2);
// or
function extend(obj1, obj2) {
  for (k in obj2) {
    if (obj1[k] === undefined) obj1[k] = obj2[k];
  }
}
// or
function extend(obj1, obj2) {
  
 for (var key in obj2){
  if(obj1.hasOwnProperty(key) === false){
   obj1[key] = obj2[key];
  }
 }
   return obj1;
}
************************************************************************************************************
preImmersive-buildingBlocksMastery-070-removeNumbersLargerThan

Write a function called “removeNumbersLargerThan”.

Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

Your Code Should Pass:

describe("removeNumbersLargerThan", function() {
  it("should remove any properties with values that are numbers greater than num", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      a: "hello",
      b: 2,
      c: "montana"
    };
    removeNumbersLargerThan(3, obj);
    expect(obj).toEqual(result);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeNumbersLargerThan(num, obj) {
 
    for (var propertykey in obj) {
      if (obj[propertykey]>num) { 
        delete obj[propertykey];
      }
    }
    return obj;
}
*************************************************************************************************************************
preImmersive-buildingBlocksMastery-071-removeNumbersLessThan

Write a function called “removeNumbersLessThan”.

Given a number and an object, “removeNumbersLessThan” removes any properties whose values are numbers less than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }

Your Code Should Pass:

describe("removeNumbersLessThan", function() {
  it("should remove any properties with values that are numbers less than num", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      a: "hello",
      c: "montana",
      d: 4
    };
    removeNumbersLessThan(3, obj);
    expect(obj).toEqual(result);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeNumbersLessThan(num, obj) {
  
    for (var x input obj) {
      if (obj[x]<num) { 
        delete obj[x];
      }
    }
    
    return obj;
}
****************************************************************************************************************************
preImmersive-buildingBlocksMastery-072-removeStringValuesLongerThan

Write a function called “removeStringValuesLongerThan”.

Given an number and an object, “removeStringValuesLongerThan” removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

Your Code Should Pass:

describe("removeStringValuesLongerThan", function() {
  it("should remove any properties with values that are strings longer than num", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      a: "hello",
      b: 2,
      d: 4
    };
    removeStringValuesLongerThan(5, obj);
    expect(obj).toEqual(result);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function removeStringValuesLongerThan(num, obj) {
  for(var x in obj){
    if (obj[x].length>num) {
      delete obj[x];
    }
  }
  return obj;
}
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
*******************************************************************************************************************************
preImmersive-buildingBlocksMastery-073-removeEvenValues

Write a function called “removeEvenValues”.

Given an object, “removeEvenValues” removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.

Example:

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

Your Code Should Pass:

describe("removeEvenValues", function() {
  it("should remove any properties with values that are even numbers", function() {
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var result = {
      a: 1,
      c: 3
    };
    removeEvenValues(obj);
    expect(obj).toEqual(result);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  a: 2,
  b: 3,
  c: 4
};

function removeEvenValues(obj) {
  for(var x in obj) {
    if (obj[x]%2===0){
      delete obj[x];  
    }
  }
}

removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
*********************************************************************************************************************************
preImmersive-buildingBlocksMastery-074-countNumberOfKeys

Write a function called “countNumberOfKeys”.

Given an object, “countNumberOfKeys” returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3

Your Code Should Pass:

describe("countNumberOfKeys", function() {
  it("should return a number", function() {
    var obj = {};
    expect(typeof(countNumberOfKeys(obj))).toBe("number");
  });
  it("should return the number of keys for an object", function() {
    var obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(countNumberOfKeys(obj)).toBe(3);
  });
  it("should return 0 for an object with no keys", function() {
    var obj = {};
    expect(countNumberOfKeys(obj)).toBe(0);
  });
});  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countNumberOfKeys(obj) {
  return Object.keys(obj).length;
}
// or
function countNumberOfKeys(obj) {
  count = 0;
  
  for (i in obj) { count++; }
  
  return count;
}
******************************************************************************************************************************
preImmersive-buildingBlocksMastery-075-removeOddValues

Write a function called “removeOddValues”.

Given an object, “removeOddValues” removes any properties whose values are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }

Your Code Should Pass:

describe("removeOddValues", function() {
  it("should remove any properties with values that are odd numbers", function() {
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var result = {
      b: 2,
      d: 4
    };
    removeOddValues(obj);
    expect(obj).toEqual(result);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeOddValues(obj) {
  for (var x in obj) {
    if(obj[x]%2===1) {
      delete obj[x];
    }
  }
}
*****************************************************************************************************************************
preImmersive-buildingBlocksMastery-076-removeArrayValues

Write a function called “removeArrayValues”.

Given an object, “removeArrayValues” removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

Your Code Should Pass:

describe("removeArrayValues", function() {
  it("should remove any properties with values that are arrays", function() {
    var obj = {
      a: [true, false],
      b: 2,
      c: [8, 0],
      d: 4
    };
    var result = {
      b: 2,
      d: 4
    };
    removeArrayValues(obj);
    expect(obj).toEqual(result);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

function removeArrayValues(obj) {
  for (var x in obj) {
    if (typeof obj[x] === "object") {
      delete obj[x];
    }
  }
  return obj;
}
// or
function removeArrayValues(obj) {
  for (k in obj) {
    if (Array.isArray(obj[k])) delete obj[k];
  }
}
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-077-removeNumberValues

Write a function called “removeNumberValues”.

Given an object, “removeNumberValues” removes any properties whose values are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
Your Code Should Pass:

describe("removeNumberValues", function() {
  it("should remove any properties with values that are numbers", function() {
    var obj = {
      a: [true, false],
      b: 2,
      c: [8, 0],
      d: 4
    };
    var result = {
      a: [true, false],
      c: [8, 0]
    };
    removeNumberValues(obj);
    expect(obj).toEqual(result);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeNumberValues(obj) {
  for(var x in obj) {
    if (typeof obj[x] === "number") {
      delete obj[x];
    }
  }
  return obj;
}
// or 
function removeNumberValues(obj) {
  for (var key in obj) {
    if (obj[key].length === undefined) {
      delete obj[key];
    }
  }
  return obj;
}
**************************************************************************************************************************+
preImmersive-buildingBlocksMastery-078-removeStringValues

Write a function called “removeStringValues”.

Given an object, “removeStringValues” removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }

Your Code Should Pass:

describe("removeStringValues", function() {
  it("should remove any properties with values that are strings", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      b: 2,
      d: 4
    };
    removeStringValues(obj);
    expect(obj).toEqual(result);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeStringValues(obj) {
  for(var x in obj) {
    if(typeof obj[x] === "string") {
      delete obj[x];
    }
  }
  return obj;
}
*****************************************************************************************************************
preImmersive-buildingBlocksMastery-079-convertDoubleSpaceToSingle

Write a function called “convertDoubleSpaceToSingle”.

Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
Notes:
* In order to do this problem, you should be familiar with “String.split”, and “Array.join”.

Your Code Should Pass:

describe("convertDoubleSpaceToSingle", function() {
  it("should return a string", function() {
    expect(typeof convertDoubleSpaceToSingle("This  here sentence")).toBe("string");
  });
  it("should return the passed in string, with any double spaces converted to single spaces", function() {
    expect(convertDoubleSpaceToSingle("this  here  string")).toBe("this here string");
  });
  it("should return the passed in string when there are no double spaces", function() {
    expect(convertDoubleSpaceToSingle("this here string")).toBe("this here string");
  });
  it("should return an empty string when passed an empty string", function() {
    expect(convertDoubleSpaceToSingle("")).toBe("");
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function convertDoubleSpaceToSingle(str) {
  return  str = str.replace(/  /g, " "); // if str.replace("  ", " ") will only do it once, g is for globally
}
// or 
function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ");
}
********************************************************************************************************************
preImmersive-buildingBlocksMastery-080-joinThreeArrays

Write a function called “joinThreeArrays”.

Given three arrays, “joinThreeArrays” returns an array with the elements of “arr1” in order followed by the elements in “arr2” in order followed by the elements of “arr3” in order.

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
You should be familiar with the “concat” method for this problem.

Your Code Should Pass:

describe("joinThreeArrays", function() {
  it("should return an array", function() {
    expect(Array.isArray(joinThreeArrays(['a', 'b'], [1, 3], [true, false]))).toBe(true);
  });
  it("should return an array with the elements from the first and then the second array", function() {
    expect(joinThreeArrays(['a', 'b'], [1, 3], [true, false])).toEqual(['a', 'b', 1, 3, true, false]);
  });
  it("should handle empty arrays in the first position", function() {
    expect(joinThreeArrays([], [1, 3], [true, false])).toEqual([1, 3, true, false]);
  });
  it("should handle empty arrays in the second position", function() {
    expect(joinThreeArrays(['a', 'b'], [], [true, false])).toEqual(['a', 'b', true, false]);
  });
  it("should handle empty arrays in the third position", function() {
    expect(joinThreeArrays(['a', 'b'], [1, 3], [])).toEqual(['a', 'b', 1, 3]);
  });
  it("should handle empty arrays in all positions", function() {
    expect(joinThreeArrays([], [], [])).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function joinThreeArrays(arr1, arr2, arr3) {
  var arr = arr1.concat(arr2.concat(arr3));
  return arr;
}
// or 
function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);
};
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-081-addToFrontOfNew

Write a function called “addToFrontOfNew”.

Given an array and an element, “addToFrontOfNew” returns a new array containing all the elements of the given array, with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); --> [1, 2]

Your Code Should Pass:

describe("addToFrontOfNew", function() {
  it("should return an array", function() {
    expect(Array.isArray(addToFrontOfNew([1, 2], 3))).toBe(true);
  });
  it("should add an element to the end of an array", function() {
    expect(addToFrontOfNew([1, 2], 3)).toEqual([3, 1, 2]);
  });
  it("should add an element to the end of an empty array", function() {
    expect(addToFrontOfNew([], 3)).toEqual([3]);
  });
  it("should leave arr unmodified", function() {
    var originalArray = [1, 2];
    var newArray = addToFrontOfNew(originalArray, 3);
    expect(originalArray).toEqual([1, 2]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var input = [1, 2];

function addToFrontOfNew(arr, element) {
 return [element].concat(arr); // element can be almost anything but
                               // needs to be inside square brackets
                               // The only use you'll have for square brackets in javascript will be 
                               // for getting/setting a property on an object, or for creating an Array literal

}

var output = addToFrontOfNew(input, 3);
console.log(output);
// or 
function addToFrontOfNew(arr, element) {

arr2 =  arr.slice();
 arr2.unshift(element);
 return arr2;

}
// or
function addToFrontOfNew(arr, element) {
  var newArray = arr.slice();
  newArray.splice((-newArray.length), 0, element);
  return newArray;
}
// or
function addToFrontOfNew(arr, element) {
  var arr = arr.slice();
  arr.unshift(element);
  return arr;
}
******************************************************************************************************************************
preImmersive-buildingBlocksMastery-082-addToBackOfNew

Write a function called “addToBackNew”.

Given an array and an element, “addToBackNew” returns a clone of the given array, with the given element added to the end.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

Your Code Should Pass:

describe("addToBackOfNew", function() {
  it("should return an array", function() {
    expect(Array.isArray(addToBackOfNew([1, 2], 3))).toBe(true);
  });
  it("should add an element to the end of an array", function() {
    expect(addToBackOfNew([1, 2], 3)).toEqual([1, 2, 3]);
  });
  it("should add an element to the end of an empty array", function() {
    expect(addToBackOfNew([], 3)).toEqual([3]);
  });
  it("should leave arr unmodified", function() {
    var originalArray = [1, 2];
    var newArray = addToBackOfNew(originalArray, 3);
    expect(originalArray).toEqual([1, 2]);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var input = [1, 2];

function addToBackOfNew(arr, element) {
  var newArr = arr.concat(element)
  return newArr;
}

var output = addToBackOfNew(input, 3);
console.log(output);
// or
function addToBackOfNew(arr, element) {
  arr2 =  arr.slice();
  arr2.push(element);
  return arr2;
}
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-083-getAllElementsButNth*

Write a function called “getAllElementsButNth”.

Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

Your Code Should Pass:

describe("getAllElementsButNth", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllElementsButNth([4, 5, 6], 2))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array, except for the nth", function() {
    expect(getAllElementsButNth([4, 5, 6], 0)).toEqual([5, 6]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getAllElementsButNth([4], 0)).toEqual([]);
  });
  it("should return a mirror of the original array when passed an n out of range", function() {
    expect(getAllElementsButNth([4], 10)).toEqual([4]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getAllElementsButNth([])).toEqual([]);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var arr = ["a","b","c"];

function getAllElementsButNth(array, n) {
  var newArr = array.slice(); // unnecessary already had the required array
  newArr.splice(n, 1); // use array.splice
  return newArr;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
// or
function getAllElementsButNth(array, n) {
  array.splice(n,1);
  return array;
}
*******************************************************************************************************
preImmersive-buildingBlocksMastery-084-areValidCredentials

Write a function called “areValidCredentials”.

Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true

Your Code Should Pass:

describe("areValidCredentials", function() {
  it("should return a boolean", function() {
    expect(typeof areValidCredentials("Ritu", "mylongpassword")).toEqual("boolean");
  });
  it("should return true if the name is longer than 3 characters and the password is at least 8 characters", function() {
    expect(areValidCredentials("Ritu", "mylongpassword")).toBe(true);
  });
  it("should return false if the name is less than 3 characters", function() {
    expect(areValidCredentials("me", "mylongpassword")).toBe(false);
  });
  it("should return false if the password is not at least 8 characters", function() {
    expect(areValidCredentials("Someone", "1234567")).toBe(false);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function areValidCredentials(name, password) {
  return name.length>3 && password.length>8 ? true : false;
}
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
// or 
function areValidCredentials(name, password) {
  return name.length > 3 && password.length >= 8
}
********************************************************************************************************************
preImmersive-buildingBlocksMastery-085-getIndexOf

Write a function called “getIndexOf”.

Given a character and a string, “getIndexOf” returns the first position of the given character in the given string.

Notes:
* Strings are zero indexed, meaning the first character in a string is at position 0.
* When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
* If the character does not exist in the string, it should return -1.
* Do not use the native indexOf function in your implementation.

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2

Your Code Should Pass:

describe("getIndexOf", function() {
  it("should not use indexOf", function() {
    var body = getIndexOf.toString();
    expect(/indexOf/.test(body)).toBe(false);
    expect(getIndexOf("a", "I am a hacker")).toBe(2);
  });
  it("should return a number", function() {
    expect(typeof getIndexOf("a", "I am a hacker")).toBe("number");
  });
  it("should return the index of the first occurence of a string", function() {
    expect(getIndexOf("a", "I am a hacker")).toBe(2);
  });
  it("should return -1 when the character does not occur in the string", function() {
    expect(getIndexOf("x", "I am a hacker")).toBe(-1);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. iterate through the str
// 2. locate the char in str that is equal
// 3. return that char position
function getIndexOf(char, str) {
  for (var x = 0; x < str.length; x++) { //loop/ite thru str
    if (str[x] === char) { // if char in str index x is equal to char
      return x; // return the index
    }
  }  
  return -1;  //If the character does not exist in the string, it should return -1.
}
// or
function getIndexOf(char, str) {
  return str.search(char, 'i');
}
// or
function getIndexOf(char, str) {
  if (str.includes(char)=== false )
      return -1
 var char_arr = str.split('');
  for (var i = 0; i < char_arr.length; i++) {
    if (char_arr[i] == char) {
      count = i;
      break;
    }
  }
  return count;
} 
*******************************************************************************************************************
preImmersive-buildingBlocksMastery-086-findMinLengthOfThreeWords

Write a function called “findMinLengthOfThreeWords”.

Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

Your Code Should Pass:

describe("findMinLengthOfThreeWords", function() {
  it("should return a number", function() {
    expect(typeof findMinLengthOfThreeWords("a", "be", "see")).toBe("number");
  });
  it("should return the minimimum length of three words", function() {
    expect(findMinLengthOfThreeWords("a", "be", "see")).toBe(1);
  });
  it("should return the minimimum length of three words when there is a tie", function() {
    expect(findMinLengthOfThreeWords("these", "three", "words")).toBe(5);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function findMinLengthOfThreeWords(word1, word2, word3) {
  return Math.min(word1.length, word2.length, word3.length);
}

// or

// 1. check length of individual words
// 2. compare lengths of words
// 3. return the length of the shortest words

function findMinLengthOfThreeWords(word1, word2, word3) {
  var x = word1.length;
  var y = word2.length;
  var z = word3.length;
  if (x<(y&&z)) {
    return x;
  } else if (y<(x&&z)) {
    return y;
  } else {
    return z;
  }
}
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-087-findMaxLengthOfThreeWords

Write a function called “findMaxLengthOfThreeWords”.

Given 3 words, “findMaxLengthOfThreeWords” returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

Your Code Should Pass:

describe("findMaxLengthOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof findMaxLengthOfThreeWords("a", "be", "see")).toBe("number");
  });
  it("should return the maximimum length of three words", function() {
    expect(findMaxLengthOfThreeWords("a", "be", "see")).toBe(3);
  });
  it("should return the maximimum length of three words when there is a tie", function() {
    expect(findMaxLengthOfThreeWords("these", "three", "words")).toBe(5);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+
// 1. check length of individual words
// 2. compare lengths of words
// 3. return the length of the longest word
// Math.max([x[, y[, …]]]) Returns the largest of zero or more numbers.

function findMaxLengthOfThreeWords(word1, word2, word3) {
  var x = word1.length;
  var y = word2.length;
  var z = word3.length;
  if (x>(y&&z)) {
    return x;
  } else if (y>(x&&z)) {
    return y;
  } else {
    return z;
  }
}
// or
function findMaxLengthOfThreeWords(word1, word2, word3) {
 return Math.max(word1.length, word2.length, word3.length);
}
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-088-getElementsThatEqual10AtProperty*

Write a function called “getElementsThatEqual10AtProperty”.

Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements that are equal to 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]

Your Code Should Pass:

describe("getElementsThatEqual10AtProperty", function() {
  it("should return an array containing all the elements that equal 10 in the array located at key", function() {
    var obj = {
      array: [10, 20, 40]
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([10]);
  });
  it("should return an empty array if the array has no elements that equal 10", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. access array property inside object
// 2. check array values
// 3. return an array with the values that are equal to ten

function getElementsThatEqual10AtProperty(obj, key) {
    var newArray = [];
    for (var x in obj[key])
    if (obj[key][x] === 10) {
      newArray.push(obj[key][x]);
    }
  return newArray  
}
// or
function getElementsThatEqual10AtProperty(obj, key) {
  if (!Array.isArray(obj[key])) return [];
  return obj[key].filter((e) => e===10);
}
// or
function getElementsThatEqual10AtProperty(obj, key) {

var array1 = [];

for(var keys in obj){
  for(i = 0; i < obj[keys].length; i++){
   if (obj[keys][i] === 10){
   array1.push(obj[keys][i]); 
   }
}
}
return array1;
}
*****************************************************************************************************************
preImmersive-buildingBlocksMastery-089-select*

Write a function called “select”.

Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.

Notes:
* If keys are present in the given array, but are not in the given object, it should ignore them. 
* It does not modify the passed in object.

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

Your Code Should Pass:

describe("select", function() {
  it("should return an object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    expect(typeof select(keys, obj)).toBe("object");
  });
  it("should return an object with properties in from the passed in object whose keys are present in the given function", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var result = {
      a: 1,
      c: 3
    };
    expect(select(keys, obj)).toEqual(result);
  });
  it("should not modify the passed in object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    select(keys, obj)
    expect(Object.keys(obj).length).toEqual(4);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  0. create a new empty object
//  1. access elements in array and keys in object 
//  2. match elements in array with keys in object
//  3. return the new object only with properties = to the ones on the orginal object
//  && keys = to the elements in the array

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function select(arr, obj) {
  var newObj = {}; // 0. empty object that will store matching elements/properties
  for (var x = 0; x < arr.length; x++) { // 1. with a loop we access elements in array
    if (typeof obj[arr[x]] !== "undefined") { // 1. -> obj[a, b, ...]=1 arr[0, 1, ...]="a"...
      newObj[arr[x]] = obj[arr[x]] // 2. -> newObj[key]=obj[value]...  
    }
  }
  return newObj; // 3
}
var output = select(arr, obj); // to test 
console.log(output); 
console.log(arr); // untouched
console.log(obj);
// or
function select(arr, obj) {
  var newObj = {};
  
  for (key in obj) {
    if (arr.includes(key)) newObj[key] = obj[key];
  }
  
  return newObj;
}
// or
function select(arr, obj) {
  var newObj = {};
  for(var i = 0; i < arr.length; i++){
    for(var prop in obj){
      if(arr[i] === prop){
        newObj[prop] = obj[prop];
      }
    }
  }
  return newObj;
**************************************************************************************************************************
preImmersive-buildingBlocksMastery-090-getElementsLessThan100AtProperty*

Write a function called “getElementsLessThan100AtProperty”.

Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements less than 100, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

Your Code Should Pass:

describe("getElementsLessThan100AtProperty", function() {
  it("should return an array containing all the elements less than 100 in the array located at key", function() {
    var obj = {
      array: [100, 20, 40]
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([20, 40]);
  });
  it("should return an empty array if the array has no elements less than 100", function() {
    var obj = {
      array: [1000, 3000]
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. access array property inside object
// 2. check array values
// 3. return an array with the values that are less than 100

function getElementsLessThan100AtProperty(obj, key) {
    var newArray = [];
    for (var x in obj[key]) {
      if (obj[key][x] < 100) {
        newArray.push(obj[key][x]);
      }
    }
  return newArray  
}
// or
function getElementsLessThan100AtProperty(obj, key) {
  if (!Array.isArray(obj[key])) return [];
  return obj[key].filter((e) => e<100);
}
// or
function getElementsLessThan100AtProperty(obj, key) {
var array1 = [];
for(var keys in obj){
  for(i = 0; i < obj[keys].length; i++){
   if (obj[keys][i] < 100){
   array1.push(obj[keys][i]); 
   }
}
}
return array1;
}
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-091-countAllCharacters

Write a function called “countAllCharacters”.

Given a string, “countAllCharacters” returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

Your Code Should Pass:

describe("countAllCharacters", function() {
  it("should return an object", function() {
    expect(typeof countAllCharacters("banana")).toBe("object");
  });
  it("should return an object where each property gives a character in the string, with its number of appearances", function() {
    var result = {
      s: 1,
      a: 3,
      m: 1,
      n: 1,
      t: 1,
      h: 1
    };
    expect(countAllCharacters("samantha")).toEqual(result);
  });
  it("should return an object empty object if passed an empty string", function() {
    expect(countAllCharacters("")).toEqual({});
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. create an empty object ot store properties
// 2. access all of the characters inside the string (iterate)
// 3. convert those characters into keys for the emptyobject
// 4. The value of each key is going to be determined by the number of times they appear in the string
// 5. return the not empty newobj with the properties

function countAllCharacters(str) {
  var newObj = {}; 
  for (x = 0; x < str.length; x++) {
    if (newObj[str[x]] === undefined) { // newObj[char], str[index]. when you check 
            // inside an empty obj with a key that is not there will return undefined
            // so that means that key has not been added
      newObj[str[x]] = 0; // if thats the case add that key with a 0 value      
    }
    newObj[str[x]]++; // this notation will actually add one to the value of that particular key
  } // so if it was 0 it will now be 1, and does that for every key only new characters will be 
  // created with the if statement otherwise they will just have their values incremented by one
  return newObj;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
// or
function countAllCharacters(str) {
  var chars = {};
  str.split("").forEach((c) => {
    chars[c] = (chars[c] === undefined) ? 1 : chars[c] + 1;
  });
  
  return chars;
}
// or
function countAllCharacters(str) {
  var newObj = {}; // placeholder for the new obj
  for (i = 0; i < str.length; i++) { // looping through given string
    if (!newObj[str[i]]) { // checks if property already exists in the newbj (placeholder)
      newObj[str[i]] = 1; // creates the new property when it does not exist
    } else { 
      newObj[str[i]]++ // adds to the count if the property already exists
    }
  }
  return newObj
}
***************************************************************************************************************************
preImmersive-buildingBlocksMastery-092-getElementsGreaterThan10AtProperty*
Write a function called “getElementsGreaterThan10AtProperty”.

Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements greater than 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]

Your Code Should Pass:

describe("getElementsGreaterThan10AtProperty", function() {
  it("should return an array containing all the elements greater than 10 in the array located at key", function() {
    var obj = {
      array: [10, 20, 40]
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([20, 40]);
  });
  it("should return an empty array if the array has no elements greater than 10", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 0. how to access an array value within an object obj["key"][index];
// 1. how to add elements into an array arr.push(element)

var obj = {
  key: [1, 20, 30]
};

function getElementsGreaterThan10AtProperty(obj, key) {
  var arr =[];
  if (obj[key] === undefined) {
    return arr;
  }
  for (x = 0; x < obj[key].length; x++) {
   if (obj[key][x] > 10) {
     arr.push(obj[key][x]);
   }
  }
  return arr;
}

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
// or
function getElementsGreaterThan10AtProperty(obj, key) {
  if (!Array.isArray(obj[key])) return [];
  return obj[key].filter((e) => e>10);
}
// or
function getElementsGreaterThan10AtProperty(obj, key) {

var array1 = [];

for(var keys in obj){
  for(i = 0; i < obj[keys].length; i++){
   if (obj[keys][i] > 10){
   array1.push(obj[keys][i]); 
   }
  }
 }
return array1;
}
// or
function getElementsGreaterThan10AtProperty(obj, key) {
    return !Array.isArray(obj[key]) ? [] : obj[key].filter(elm => elm > 10)
}
******************************************************************************************************************
preImmersive-buildingBlocksMastery-093-removeElement*

Write a function called “removeElement”.

Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.

Notes:
* If all the elements match, it should return an empty array.
* If an empty array is passed in, it should return an empty array.

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

Your Code Should Pass:

describe("removeElement", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeElement(["there", "it", "is", "there"]))).toBe(true);
  });
  it("return an array with all strings not matching 'discarder'", function() {
    expect(removeElement(["there", "it", "is", "there"], "there")).toEqual(["it", "is"]);
  });
  it("return an array with all numbers not matching 'discarder'", function() {
    expect(removeElement([1, 2, 4, 3, 1, 4], 4)).toEqual([1, 2, 3, 1]);
  });
  it("return an array with all booleans not matching 'discarder'", function() {
    expect(removeElement([true, true, true, false, true], true)).toEqual([false]);
  });
  it("return an emtpy array when all elements match 'discarder'", function() {
    expect(removeElement([true, true, true, true], true)).toEqual([]);
  });
  it("return an emtpy array when given an empty array", function() {
    expect(removeElement([], 4)).toEqual([]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeElement(array, discarder) {
  var arr = [];
  
  for (x = 0; x < array.length; x++) {
    if (array[x] !== discarder) {
      arr.push( array[x] );
    }
  }
  return arr;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
// or
function removeElement(array, discarder) {
  return array.filter((x) => x !== discarder);
}
************************************************************************************************************************
preImmersive-buildingBlocksMastery-094-getFirstElementOfProperty

Write a function called “getFirstElementOfProperty”.

Given an object and a key, “getFirstElementOfProperty” returns the first element of the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1

Your Code Should Pass:

describe("getFirstElementOfProperty", function() {
  it("should return the first element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(1);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(undefined);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// access object property and return the first element of that array

var obj = {
  key: [1, 2, 4]
};

function getFirstElementOfProperty(obj, key) {
  if (obj[key] === undefined) {
    return undefined;
  }
  
  if (typeof obj[key] !== "object") {
    return undefined;
  }
  
  return obj[key][0];
}


var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1

// or

function getFirstElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key])) return undefined;
  return obj[key][0]
}

// or 

function getFirstElementOfProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key][0];
  } else {
    return undefined;
  }
}

// or

function getFirstElementOfProperty(obj, key) {
 //input is array looking for propety values 
 //iterate throught obj  
 // return first key 
if(Array.isArray(obj[key]))
 return obj[key][0]  
}
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-095-getNthElementOfProperty

Write a function called “getNthElementOfProperty”.

Given an object and a key, “getNthElementOfProperty” returns the nth element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If n is out of range, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

Your Code Should Pass:

describe("getNthElementOfProperty", function() {
  it("should return the nth element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getNthElementOfProperty(obj, "array", 2)).toBe(4);
  });
  it("should return undefined if the n is out of range", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// how to access the obj->key->n obj["key"][index]

var obj = {
  key: [1, 2, 6]
};

function getNthElementOfProperty(obj, key, n) {
  
  return Array.isArray(obj[key]) ? obj[key][n] : undefined;
}

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

// or

function getNthElementOfProperty(obj, key, n) {
  if (obj[key] === [] || typeof obj[key] !== 'object' || obj === {}) {
    return undefined;
  } else if (n > obj[key].length) {
    return undefined;
  } else {
    return obj[key][n];
  }
  ****************************************************************************************************
  preImmersive-buildingBlocksMastery-096-getLastElementOfProperty
Write a function called “getLastElementOfProperty”.

Given an object and a key, “getLastElementOfProperty” returns the last element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* if the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
Your Code Should Pass:

describe("getLastElementOfProperty", function() {
  it("should return the last element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(4);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLastElementOfProperty(obj, key) {
return Array.isArray(obj[key]) ? obj[key].pop() : undefined;
}

// or

function getLastElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key])) return undefined;
  return obj[key][obj[key].length-1]
}
**********************************************************************************************************************
preImmersive-buildingBlocksMastery-097-keep*

Write a function called “keep”.

Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.

Notes:
* If no elements match, “keep” should return an empty array.

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); --> [2, 2]

Your Code Should Pass:

describe("keep", function() {
  it("should return an array", function() {
    expect(Array.isArray(keep(["there", "it", "is", "there"]))).toBe(true);
  });
  it("returns an array with all strings matching 'kept'", function() {
    expect(keep(["there", "it", "is", "there"], "there")).toEqual(["there", "there"]);
  });
  it("returns an array with all numbers matching 'kept'", function() {
    expect(keep([1, 2, 4, 3, 1, 4], 4)).toEqual([4, 4]);
  });
  it("returns an array with all booleans matching 'kept'", function() {
    expect(keep([true, true, true, false, true], true)).toEqual([true, true, true, true]);
  });
  it("returns an emtpy array when no elements match 'kept'", function() {
    expect(keep([true, true, true, false, true], 4)).toEqual([]);
  });
  it("returns an emtpy array when given an empty array", function() {
    expect(keep([], 4)).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function keep(array, keeper) {
  var arr =[];
  for (x = 0; x < array.length; x++) {
    if (array[x] === keeper) {
      arr.push(array[x]);
    }
  }
  return arr;
}
// or
function keep(array, keeper) {
  return array.filter((e) => e===keeper);
}
**************************************************************************************************************
preImmersive-buildingBlocksMastery-098-getOddLengthWordsAtProperty*

Write a function called “getOddLengthWordsAtProperty”.

Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

Your Code Should Pass:

describe("getOddLengthWordsAtProperty", function() {
  it("should return an array containing all the odd length elements of the array located at key", function() {
    var obj = {
      array: ["a", "long", "night"]
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual(["a", "night"]);
  });
  it("should return an empty array if the array has only no odd length elements", function() {
    var obj = {
      array: ["It", "is", "gone"]
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  key: ['It', 'has', 'some', 'words']
};

function getOddLengthWordsAtProperty(obj, key) {
  var arr = [];
  if (!Array.isArray(obj[key])) {
    return [];
  }
  
  for (var x in obj[key]) {
    if (obj[key][x].length % 2 !== 0) {
      arr.push(obj[key][x]);
    }
  } 
  return arr;  
}

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

// or 

var obj = {
  key: ['It', 'has', 'some', 'words']
};

function getOddLengthWordsAtProperty(obj, key) {
  var arr = [];
  if (!Array.isArray(obj[key])) {
    return [];
  }
  
  for (x = 0 ; x < obj[key].length ; x++) {
    if (obj[key][x].length % 2 !== 0) {
      arr.push(obj[key][x]);
    }
  } 
  return arr;  
}

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

// or

function getOddLengthWordsAtProperty(obj, key) {
  if (obj[key] === [] || !Array.isArray(obj[key])) return [];
  return obj[key].filter((e) => e.length % 2 === 1);
}
**********************************************************************************************************************
preImmersive-buildingBlocksMastery-099-computeAverageOfNumbers*

Write a function called “computeAverageOfNumbers”.

Given an array of numbers, “computeAverageOfNumbers” returns their average.

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

Your Code Should Pass:

describe("computeAverageOfNumbers", function() {
  it("should return a number", function() {
    expect(typeof(computeAverageOfNumbers([6, 8, 10]))).toBe("number");
  });
  it("should return the average of the numbers in the given array", function() {
    expect(computeAverageOfNumbers([6, 8, 10])).toBe(8);
  });
  it("should return the average of negative numbers in the given array", function() {
    expect(computeAverageOfNumbers([-6, -8, -10])).toBe(-8);
  });
  it("should return 0 if given an empty array", function() {
    expect(computeAverageOfNumbers([])).toBe(0);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var input = [1,2,3,4,5];

function computeAverageOfNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  }

  y = 0;
  for (x = 0; x < nums.length ; x++) {
    y += nums[x];
  }
  return y/nums.length;
}

var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

// or

function computeAverageOfNumbers(nums) {
  if (!nums.length) return 0;
  return nums.reduce((a, b) => a + b) / nums.length;
}

// or

function computeAverageOfNumbers(nums) {

var sum = 0;


for(var i = 0; i < nums.length; i++){
  sum += nums[i];
  var avg = sum/nums.length;
 }
 if(nums.length <= 0){
   return 0;
  }else{
   return avg;
 }
}
**********************************************************************************************************************
preImmersive-buildingBlocksMastery-100-getAverageOfElementsAtProperty*

Write a function called “getAverageOfElementsAtProperty”.

Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

Your Code Should Pass:

describe("getAverageOfElementsAtProperty", function() {
  it("should return the average of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 3, 5]
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(3);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  key: [1, 2, 3]
};

function getAverageOfElementsAtProperty(obj, key) {
  // if the property doesn't exist or array is empty or if property is not an array
  if ( obj[key] === undefined || obj[key].length < 1 || Array.isArray(obj[key]) === false ){
    return 0;
  }
  
  avg = 0;
  for (var x = 0 ; x < obj[key].length ; x++) {
    avg += obj[key][x];
  }
  return avg/obj[key].length;
}

var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

// or 

function getAverageOfElementsAtProperty(obj, key) {
  //edge case
  if (!(obj[key] instanceof Array) || obj[key].length == 0) {
    return 0;
  } else {
    //initilize count
    var total = 0;
    //iterate tgrough obj keys to keep count 
    for (i = 0; i < obj[key].length; i++) {
      //
      total += obj[key][i];
    }
    return total / (obj[key].length);
  }
}

// or

function getAverageOfElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length === 0) return 0;
  
  return obj[key].reduce((a, b) => a + b) / obj[key].length;
}

// or

function getAverageOfElementsAtProperty(obj, key) {

var avg = 0
var sum = 0;
if(!Array.isArray(obj[key]) || (obj[key].length === 0)){
   return 0
}
if(obj[key] === 0){
  return 0;
}

for(var prop in obj[key]){
  sum+= obj[key][prop];
}
avg = sum/obj[key].length;
return avg;
}
*************************************************************************************************************************
preImmersive-buildingBlocksMastery-101-getEvenLengthWordsAtProperty*

Write a function called “getEvenLengthWordsAtProperty”.

Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no even length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

Your Code Should Pass:

describe("getEvenLengthWordsAtProperty", function() {
  it("should return an array containing all the even length elements of the array located at key", function() {
    var obj = {
      array: ["a", "long", "game"]
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual(["long", "game"]);
  });
  it("should return an empty array if the array has only no even length elements", function() {
    var obj = {
      array: ["I", "may", "say"]
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  key: ['a', 'long', 'game']
};

function getEvenLengthWordsAtProperty(obj, key) {
  var arr = [];
  
  for (var x in obj[key]) {
    if (obj[key][x].length % 2 === 0) {
      arr.push(obj[key][x]);
    }
  }
  return arr;
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

// or

function getEvenLengthWordsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) return [];
  
  return obj[key].filter((e) => e.length % 2 === 0);
}

// or

function getEvenLengthWordsAtProperty(obj, key) {

var arr = []
if(!Array.isArray(obj[key]) ){
 return  arr;
}
if(!obj.hasOwnProperty(key)){
  return arr;
}

for(var key in obj){
  for(i = 0; i < obj[key].length; i++){
    if(obj[key][i].length % 2 === 0){
      arr.push(obj[key][i])
    }
  }
  
}

return arr;
}

// or

function getEvenLengthWordsAtProperty(obj, key) {
 if (typeof obj[key] === undefined || !Array.isArray(obj[key]) || obj[key].length < 1 ) { // return 0 if array is empty or if not an array
   return [];
 } else {
    return obj[key].filter((e) => e.length % 2 === 0);
 }
}
******************************************************************************************************************
preImmersive-buildingBlocksMastery-102-filterOddLengthWords*

Write a function called “filterOddLengthWords”.

Given an array of string, “filterOddLengthWords” returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

Your Code Should Pass:

describe("filterOddLengthWords", function() {
  it("should return an array", function() {
    expect(Array.isArray(filterOddLengthWords(["there", "it", "is", "now"]))).toBe(true);
  });
  it("should return an array with odd lengthed words", function() {
    expect(filterOddLengthWords(["there", "it", "is", "now"])).toEqual(["there", "now"]);
  });
  it("should return an empty array when passed an array with no odd lengthed words", function() {
    expect(filterOddLengthWords(["it", "cats"])).toEqual([]);
  });
  it("should return an empty array when passed an empty array", function() {
    expect(filterOddLengthWords([])).toEqual([]);
  });
}); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function filterOddLengthWords(words) {
  
  var arr = [];
  
  for (var x = 0 ; x < words.length ; x++) {
    if (words[x].length % 2 !== 0) {
      arr.push(words[x]);
    }
  }
  return arr;
}


var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

// or

function filterOddLengthWords(words) {
  return words.filter(function (x) {
    return x.length % 2 === 1;
  })
}

// or

function filterOddLengthWords(words) {
  return words.filter((e) => e.length % 2 === 1);
}
********************************************************************************************************************
preImmersive-buildingBlocksMastery-103-getSquaredElementsAtProperty*

Write a function called “getSquaredElementsAtProperty”.

Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

Your Code Should Pass:

describe("getSquaredElementsAtProperty", function() {
  it("should return an array containing all the squared elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 7]
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([1, 4, 49]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  var arr = [];
  
  if (!Array.isArray(obj[key])) {
    return arr;
  }
  
  
  for ( var x = 0; x < obj[key].length ; x++) {
    arr.push((obj[key][x])*(obj[key][x]));   
  }
  return arr;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

// or

function getSquaredElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])
      || obj[key] === []) return [];
  return obj[key].map((x) => x ** 2);
}

// or 

function getSquaredElementsAtProperty(obj, key) {

var arr = [];

 if(!Array.isArray(obj[key]) || (obj[key].length === 0)){
   return arr;
 }
 
   for(var i = 0; i < obj[key].length; i++){
    arr.push(Math.pow(obj[key][i], 2));
   }
return arr;
}
**************************************************************************************************************************
preImmersive-buildingBlocksMastery-104-getOddElementsAtProperty*

Write a function called “getOddElementsAtProperty”.

Given an object and a key, “getOddElementsAtProperty” returns an array containing all the odd elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

Your Code Should Pass:

describe("getOddElementsAtProperty", function() {
  it("should return an array containing all the odd elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 7]
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([1, 7]);
  });
  it("should return an empty array if the array has only no odd elements", function() {
    var obj = {
      array: [2, 30]
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  var arr = [];
  
  if (!Array.isArray(obj[key])) {
    return arr;
  }
  
  for (var x = 0; x < obj[key].length ; x++) {
    if (obj[key][x] % 2 !== 0) {
      arr.push(obj[key][x]);
    }
  }
  return arr;
}

// or

function getOddElementsAtProperty(obj, key) {
  if (obj[key] === [] || !Array.isArray(obj[key])) {
    return [];
  }
  return obj[key].filter((x) => x % 2 === 1);
}

// or

function getOddElementsAtProperty(obj, key) {
 if (!Array.isArray(obj[key]) || obj[key].length < 1 || obj[key] === undefined) {
   return [];
 } else {
   return obj[key].filter((e) => e % 2 === 1)
 }
}
******************************************************************************************************************************************
preImmersive-buildingBlocksMastery-105-getEvenElementsAtProperty*

Write a function called “getEvenElementsAtProperty”.

Given an object and a key, “getEvenElementsAtProperty” returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

Your Code Should Pass:

describe("getEvenElementsAtProperty", function() {
  it("should return an array containing all the even elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([2, 4]);
  });
  it("should return an empty array if the array has only no even elements", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getEvenElementsAtProperty(obj, "array")).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  var arr = [];
  
  if (!Array.isArray(obj[key])) {
    return arr;
  }
  
  for (var x in obj[key]) {
    if (obj[key][x] % 2 === 0) {
      arr.push(obj[key][x]);
    }
  }
  return arr;
}

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

// or 

function getEvenElementsAtProperty(obj, key) {
  if (obj[key] === [] || !Array.isArray(obj[key])) {
    return [];
  }
  return obj[key].filter((x) => x % 2 === 0);
}

// or

function getEvenElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length < 1 || obj[key] === undefined) {
    return [];
  } else {
    return obj[key].filter((e) => e % 2 === 0);
  }
}
*******************************************************************************************************************************
preImmersive-buildingBlocksMastery-106-filterEvenLengthWords*

Write a function called “filterEvenLengthWords”.

Given an array of strings, “filterEvenLengthWords” returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

Your Code Should Pass:

describe("filterEvenLengthWords", function() {
  it("should return an array", function() {
    expect(Array.isArray(filterEvenLengthWords(["there", "it", "is", "now"]))).toBe(true);
  });
  it("should return an array with even lengthed words", function() {
    expect(filterEvenLengthWords(["there", "it", "is", "now"])).toEqual(["it", "is"]);
  });
  it("should return an empty array when passed an array with no even lengthed words", function() {
    expect(filterEvenLengthWords(["there", "now"])).toEqual([]);
  });
  it("should return an empty array when passed an empty array", function() {
    expect(filterEvenLengthWords([])).toEqual([]);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function filterEvenLengthWords(words) {
  var arr = [];
  
  for (var x = 0 ; x < words.length ; x++) {
    if (words[x].length % 2 === 0) {
      arr.push(words[x]);
    }
  }
  return arr;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

// or 

function filterEvenLengthWords(words) {
  return words.filter((e) => e.length % 2 === 0);
}
**********************************************************************************************************************************
preImmersive-buildingBlocksMastery-107-getLengthOfLongestElement*

Write a function called “getLengthOfLongestElement”.

Given an array, “getLengthOfLongestElement” returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

Your Code Should Pass:

describe("getLengthOfLongestElement", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfLongestElement(["one", "two", "three"])).toBe("number");
  });
  it("should return the length of the longest element in an array", function() {
    expect(getLengthOfLongestElement(["one", "two", "three"])).toBe(5);
  });
  it("it should handle ties", function() {
    expect(getLengthOfLongestElement(["one", "two", "no"])).toBe(3);
  });
  it("it should return 0 when given an empty array", function() {
    expect(getLengthOfLongestElement([])).toBe(0);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getLengthOfLongestElement(arr) {
  var y = arr[0];
  
  if(arr.length === 0) {
    return 0;
  }
  
  for (var x = 0 ; x < arr.length ; x++) {
    if (arr[x].length > y.length) {
      y = arr[x]
    }
  }
  return y.length;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

// or

function getLengthOfLongestElement(arr) {
  var longest = "";
  
  arr.forEach((e) => {
    if (e.length > longest.length) longest = e;
  });
  
  return longest.length;
}

// or

function getLengthOfLongestElement(arr) {
  
  var length;

  if (arr.length === 0) {
    return 0;
  }
  
  var lengths = arr.map(x => x.length);
  var max = Math.max(...lengths);
  return max;
}
*****************************************************************************************************************************
preImmersive-buildingBlocksMastery-108-getSmallestElementAtProperty*

Write a function called “getSmallestElementAtProperty”.

Given an object and a key, “getSmallestElementAtProperty” returns the smallest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

Your Code Should Pass:

describe("getSmallestElementAtProperty", function() {
  it("should return the smallest element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(1);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSmallestElementAtProperty(obj, "array")).toBe(undefined);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: smallest element in key: []
// I: obj and key
// C: none
// E: if key arr empty, if property is not array and if obj empty

// access obj -> key -> elements in array
// loop thru array and find smallest
// return smallest element (how to only return smallest)


var obj = {
  key: [2, 1, 5]
};

function getSmallestElementAtProperty(obj, key) {
  
 if (!Array.isArray(obj[key])) {
    return undefined
  }
  
  var y = obj[key][0];

  for (var x = 0 ; x < obj[key].length ; x++) {
    if (obj[key][x] <= y) {
      y = obj[key][x];
    } 
  }
  return y;
}

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

// or


function getSmallestElementAtProperty(obj, key) {
  var large = Infinity;
  
  if (!Array.isArray(obj[key]) || obj[key] === undefined || obj[key].length === 0) {
    return undefined;
  }
  
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] < large) large = obj[key][i];
  }
  
  return large;
}

// or

function getSmallestElementAtProperty(obj, key) {


 if(!Array.isArray(obj[key]) || (obj[key].length < 1) || (obj[key] === false)){
  return undefined;
}

var smallNum = obj[key][0];

for (var prop in obj[key]){
    if (obj[key][prop] < smallNum){
    smallNum = obj[key][prop];
  }
 }
return smallNum;
}

// or 

function getSmallestElementAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) {
    return undefined;
  }
  
  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }
  
  if (obj[key].length === 0) {
    return undefined;
  }
  
  for (var prop in obj[key]) {
    var pmin = Math.min(...obj[key]);
    return pmin;
  }
}
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-109-getLargestElementAtProperty*

Write a function called “getLargestElementAtProperty”.

Given an object and a key, “getLargestElementAtProperty” returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

Your Code Should Pass:

describe("getLargestElementAtProperty", function() {
  it("should return the largest element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(4);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: largest element in key's array
// I: obj and key{}
// C: none
// E: if key arr empty, if property is not array and if obj empty

// access obj -> key -> elements in array
// loop thru array and find largest
// return largest element (how to only return largest)


var obj = {
  key: [1, 2, 4]
};

function getLargestElementAtProperty(obj, key) {
   if (!Array.isArray(obj[key])) {
    return undefined
  }
  var largest = obj[key][0];
  for (var x = 0 ; x < obj[key].length ; x++) {
    if (obj[key][x] > largest) {
      largest = obj[key][x];
    }
  }
  return largest
}

var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

// or

function getLargestElementAtProperty(obj, key) {
  var large = -Infinity;
  
  if (!Array.isArray(obj[key]) || obj[key] === undefined || obj[key].length === 0) {
    return undefined;
  }
  
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] > large) large = obj[key][i];
  }
  
  return large;
}

// or

function getLargestElementAtProperty(obj, key) {


 if(!Array.isArray(obj[key]) || (obj[key].length < 1) || (obj[key] === false)){
  return undefined;
}

var largNum = obj[key][0];

for (var prop in obj[key]){
    if(obj[key][prop] > largNum){
    largNum = obj[key][prop];
  }
 }
return largNum;
}

// or

function getLargestElementAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length < 1) {
    return undefined;
  }

  return Math.max(...obj[key]);
}
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-110-getAllButLastElementOfProperty

Write a function called “getAllButLastElementOfProperty”.

Given an object and a key, “getAllButLastElementOfProperty” returns an array containing all but the last element of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]

Your Code Should Pass:

describe("getAllButLastElementOfProperty", function() {
  it("should return an array containing all but the last element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([1, 2]);
  });
  it("should return an empty array if the array has only 1 element", function() {
    var obj = {
      array: [1]
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an array with all element in key's array, except LAST
// I: obj and key{}
// C: none
// E: if key arr empty, if property is not array and if obj empty

// access obj -> key -> elements in array
// loop thru array and get desired elemnts
// return all element in key's array, except LAST

var obj = {
  key: [1, 2, 3]
};

function getAllButLastElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key])) {
    return [];
  }
  
  var containerArray = []; 
  
  for (var x = 0 ; x < (obj[key].length-1) ; x++) {
    
    containerArray.push(obj[key][x]);
    
  }
  return containerArray;
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]

// or 

function getAllButLastElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key] === undefined) return [];
  return obj[key].slice(0, obj[key].length-1);
}

// or

function getAllButLastElementOfProperty(obj, key) {

var arr = [];

 if(!Array.isArray(obj[key]) || (obj[key] === false) || (obj[key].length < 1)){
  return arr;
 }else if (arr = obj[key].slice(0, -1)){
 
  return arr;
 }
}

// or

function getAllButLastElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key]) || !obj.hasOwnProperty(key)) {
    return [];
  };
  
  return obj[key].slice(0, (obj[key].length - 1));
}

// or

function getAllButLastElementOfProperty(obj, key) {
  var allButLast = [];
  for(key in obj){
    var arr = obj[key];
    if(!Array.isArray(arr) || !arr.length){
      return [];
    }
    arr.forEach((e) => {
      allButLast.push(e);
    });
  }
  return allButLast.slice(0, -1);
}
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-111-getElementOfArrayProperty

Write a function called “getElementOfArrayProperty”.

Given an object, a key, and a numerical index, “getElementOfArrayProperty” returns the value of the element at the given index of the array located within the given object at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the given index is out of range of the array located at the given key, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'

Your Code Should Pass:

describe("getElementOfArrayProperty", function() {

  it("should return the element at the index of the array at the key of the passed in object", function() {
    var obj = {
      numbers: [4, 0, 1]
    };
    expect(getElementOfArrayProperty(obj, "numbers", 1)).toBe(0);
  });
  it("should return undefined if the index is out of range", function() {
    var obj = {
      numbers: [4, 0, 1]
    };
    expect(getElementOfArrayProperty(obj, "numbers", 5)).toBe(undefined);
  });
  it("should return undefined if the property at the key is not an array", function() {
    var obj = {
      name: "you"
    };
    expect(getElementOfArrayProperty(obj, "name", 0)).toBe(undefined);
  });
  it("should return undefined if there is no property at the key", function() {
    var obj = {
      name: "you"
    };
    expect(getElementOfArrayProperty(obj, "what", 0)).toBe(undefined);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: value at obj[key][index]
// I: obj, key, index
// C: none
// E: if key arr empty, if property is not array, if obj empty and 
// if index given is out of range return undefined

// access obj[key][index]
// return desired element

var obj = {
 key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
  
  if (!Array.isArray(obj[key])) {
    return undefined
  }
  return obj[key][index];
}

var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'

// or

function getElementOfArrayProperty(obj, key, index) {
  if (obj[key] === undefined) return undefined;
  if (!Array.isArray(obj[key])) return undefined;
  return obj[key][index];
}

// or

function getElementOfArrayProperty(obj, key, index) {
  
  if(!Array.isArray(obj[key]) || obj[key].length < 1  || obj[key][index] === false){
    return undefined;
  }else{
    var value = obj[key][index];
  }
  return value;
}

// or 

function getElementOfArrayProperty(obj, key, index) {
  // your code here
  
    if (!Array.isArray(obj[key])) {
    return undefined;
  } else  if (!obj.hasOwnProperty(key)) {
    return undefined;
  } else if (obj[key].length === 0) {
    return undefined;
  } else if (index > obj[key].length) {
    return undefined;
  }
   return obj[key][index];

}
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-112-squareElements*

Write a function called “squareElements”.
Given an array of numbers, “squareElements” should return a new array where each element is the square of the element of the given array.
var output = squareElements([1, 2, 3]); 
console.log(output); // --> [1, 4, 9]

Your Code Should Pass:

describe("squareElements", function() {
  it("should return an array", function() {
    expect(Array.isArray(squareElements([1, 2, 3]))).toBe(true);
  });
  it("should return an array with the elements of the passed in array, squared", function() {
    expect(squareElements([1, 2, 3])).toEqual([1, 4, 9]);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an ARRAY with squared element of the original array
// I: an array
// C: none
// E: none

// declare container
// loop thru array's elements
// square elements
// store new values in container
// return new array

function squareElements(arr) {
  var squares = [];
  
  for (var x = 0 ; x < (arr.length) ; x++) {
    squares.push(arr[x]**2);
  }
  return squares;
}

// or

function squareElements(arr) {
  return arr.map((x) => x**2);
}

// or

function squareElements(arr) {
var arr2 = [];
 
   for(var i = 0; i < arr.length; i++){
    arr2.push(Math.pow(arr[i], 2));
   }
return arr2;
}

// or

function squareElements(arr) {
  return arr.map(x => x * x);
}

function squareElements(arr) {
  // your code here
}

function squareElements(arr) {  // HoF
  return arr.map(function(i) {  // squares all element in the array
    return i * i;
  });
}
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-113-filterOddElements*

Write a function called “filterOddElements”.

Given an array of numbers, “filterOddElements” returns an array containing only the odd numbers of the given array.
var output = filterOddElements([1, 2, 3, 4, 5]); console.log(output); // --> [1, 3, 5]

Your Code Should Pass:

describe("filterOddElements", function() {
  it("should return an array", function() {
    expect(Array.isArray(filterOddElements([1, 2, 3, 4]))).toBe(true);
  });
  it("should return an array with the odd elements from the passed in array", function() {
    expect(filterOddElements([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });
  it("should return an array if there are no odd numbers", function() {
    expect(filterOddElements([2, 4, 6])).toEqual([]);
  });
  it("should return an array if given an emtpy array", function() {
    expect(filterOddElements([])).toEqual([]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an ARRAY with the odd elements of the original array
// I: an array
// C: none
// E: none

// declare container
// loop thru array's elements
// get odd elements
// store new values in container
// return new array

function filterOddElements(arr) {
  var odds = [];
  
  for (x = 0 ; x < arr.length ; x++) {
    if (arr[x] % 2 !== 0) {
      odds.push(arr[x]);
    }
  }
  return odds;
}

// or


function filterOddElements(arr) {
  return arr.filter((x) => x % 2 !== 0)
}
***********************************************************************************************************************************
preImmersive-buildingBlocksMastery-114-computeProductOfAllElements*

Write a function called “computeProductOfAllElements”.

Given an array of numbers, “computeProductOfAllElements” returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

Your Code Should Pass:

describe("computeProductOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeProductOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the product of all elements", function() {
    expect(computeProductOfAllElements([1, 2, 4])).toBe(8);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeProductOfAllElements([])).toBe(0);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: the product of all elements in the original array
// I: an array
// C: none
// E: none

// loop thru array's elements
// start multiplying elements, utilize container
// return product

function computeProductOfAllElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  var product = arr[0];
  
  for (x = 0 ; x < arr.length ; x++) {
    product = arr[x]*product;
  }
  return product;
}

// or

function computeProductOfAllElements(arr) {
  if (arr.length === 0) return 0;
  
  return arr.reduce((a, b) => a * b);
}

// or

function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length === 0) {
  return 0;
  }
  var product = arr.reduce((acc, curr) => acc * curr);
  return product;
}
******************************************************************************************************************************************
preImmersive-buildingBlocksMastery-115-filterEvenElements*

Write a function called “filterEvenElements”.

Given an array of numbers, “filterEvenElements” returns an array containing only the even numbers of the given array.
var output = filterEvenElements([2, 3, 4, 5, 6]); console.log(output); // --> [2, 4, 6]

Your Code Should Pass:

describe("filterEvenElements", function() {
  it("should return an array", function() {
    expect(Array.isArray(filterEvenElements([1, 2, 3, 4]))).toBe(true);
  });
  it("should return an array with the even elements from the passed in array", function() {
    expect(filterEvenElements([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
  it("should return an array if there are no even numbers", function() {
    expect(filterEvenElements([1, 3, 5])).toEqual([]);
  });
  it("should return an array if given an emtpy array", function() {
    expect(filterEvenElements([])).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an ARRAY with the even elements of the original array
// I: an array
// C: none
// E: none

// declare container
// loop thru array's elements
// get even elements
// store new values in container
// return new array

function filterEvenElements(arr) {
  var evens = [];
  for (x = 0 ; x < arr.length ; x++) {
    if (arr[x] % 2 === 0) {
      evens.push(arr[x]);
    }
  }
  return evens;
}

// or 

function filterEvenElements(arr) {
  return arr.filter((x) => x % 2 === 0)
}
******************************************************************************************************************************************
preImmersive-buildingBlocksMastery-116-getLengthOfShortestElement*

Write a function called “getLengthOfShortestElement”.

Given an array, “getLengthOfShortestElement” returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

Your Code Should Pass:

describe("getLengthOfShortestElement", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfShortestElement(["one", "two", "three"])).toBe("number");
  });
  it("should return the length of the shortest element in an array", function() {
    expect(getLengthOfShortestElement(["one", "four", "three"])).toBe(3);
  });
  it("it should handle ties", function() {
    expect(getLengthOfShortestElement(["one", "to", "no"])).toBe(2);
  });
  it("it should return 0 when given an empty array", function() {
    expect(getLengthOfShortestElement([])).toBe(0);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: the length of the shortest element of the original array
// I: an array
// C: none
// E: return 0 if the array is empty.

// declare container to store element with the shortest length
// loop thru array's elements
// check the element's length
// store value if shortest than last value
// return shortes

function getLengthOfShortestElement(arr) {
  if (arr === []){
    return 0;
  }
  
  for (var x = 0 ; x < arr.length ; x++) {
    var shortest = arr[0].length;
    if (arr[x].length < shortest) {
      shortest = arr[x].length;
    }
  }
  if (shortest === undefined) {
    return 0;
  } else {
    return shortest;
  }
}

// or

function getLengthOfShortestElement(arr) {
  var s = Infinity;
  
  if (arr.length === 0) return 0;
  
  arr.forEach((x) => { if (x.length < s) s = x.length });
  
  return s;
}

// or

function getLengthOfShortestElement(arr) {
  // your code here
  var length;

  if (arr.length === 0) {
    return 0;
  }
  
  var lengths = arr.map(x => x.length);
  var min = Math.min(...lengths);
  return min;
}
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-117-getLongestElement*

Write a function called “getLongestElement”.

Given an array, “getLongestElement” returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, it should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

Your Code Should Pass:

describe("getLongestElement", function() {
  it("should return a string", function() {
    expect(typeof(getLongestElement(["one", "two", "three"]))).toBe("string");
  });
  it("should return the longest element in an array", function() {
    expect(getLongestElement(["one", "two", "three"])).toBe("three");
  });
  it("should return the first longest element in an array when there are ties", function() {
    expect(getLongestElement(["one", "two", "one"])).toBe("one");
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: longest string in arr
// I: array
// C: none
// E: with ties returns first element that appears, if arr empty ret empty str

// declare container to store element with the longest length
// loop thru array's elements
// check the element's length
// store longest str if longest than last value
// return longest str

function getLongestElement(arr) {
  if (arr === []){
    return "";
  }
  
  for (var x = 0 ; x < arr.length ; x++) {
    var longestStr = arr[0];
    if (arr[x].length > longestStr.length) {
      longestStr = arr[x];
    }
  }
  if (longestStr === undefined) {
    return "";
  } else {
    return longestStr;
  }
}

// or

function getLongestElement(arr) {
  var longest = "";
  
  arr.forEach((x) => {
    if (x.length > longest.length) longest = x;
  });
  
  return longest;
}

// or 

function getLongestElement(arr) {
  // your code here

  if (arr.length === 0) {
    return '';
  }
  
  arr.sort(function(a, b) { return b.length - a.length; });
  return arr[0];
}
*************************************************************************************************************************************
preImmersive-buildingBlocksMastery-118-findSmallestElement*

Write a function called “findSmallestElement”.

Given an array of numbers, “findSmallestElement” returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

Your Code Should Pass:

describe("findSmallestElement", function() {
  it("should return a number", function() {
    expect(typeof findSmallestElement([3, 5, 3, 1])).toBe("number");
  });
  it("should return the smallest element in an array", function() {
    expect(findSmallestElement([3, 5, 3, 1])).toBe(1);
  });
  it("should return the smallest element in an array when there are ties", function() {
    expect(findSmallestElement([3, 1, 3, 1, 5])).toBe(1);
  });
  it("should return the smallest element in an array when they are all negative", function() {
    expect(findSmallestElement([-1, -5, -3])).toBe(-5);
  });
  it("should return 0 if the array is empty", function() {
    expect(findSmallestElement([])).toBe(0);
  })
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: smallest number from the given array
// I: an array
// C: none
// E: if arr empty ret 0

// declare a container for smallest element / placeholder
// loop thru arr
  // check values of elements to find smallest
  // store smallest in container
// return container

function findSmallestElement(arr) {
    if (arr.length < 1) {  
      return 0;
    }
    var smallest = arr[0]; 
    for (var i in arr) {
      if (arr[i] < smallest) {  
        smallest = arr[i];
      }
    }
    return smallest;
  }

  console.log(findSmallestElement([4, 1, 9, 10]));

  // or

  // O: smallest number from the given array
// I: an array
// C: none
// E: if arr empty ret 0

// declare a container for smallest element / placeholder
// loop thru arr
  // check values of elements to find smallest
  // store smallest in container
// return container

function findSmallestElement(arr) {
    if (arr.length < 1) {  
      return 0;
    }
    var smallest = arr[0]; 
    for (var x = 0 ; x < arr.length ; x++) {
      if (arr[x] < smallest) {  
        smallest = arr[x];
      }
    }
    return smallest;
  }
  console.log(findSmallestElement([4, 1, 9, 10]));

  // or

  function findSmallestElement(arr) {
  if (arr.length === 0) return 0;
  
  var smallest = Infinity;
  
  for (i in arr) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  
  return smallest;
}

// or 

function findSmallestElement(arr) {
  // your code here

  if (arr.length === 0) {
    return 0;
  }
  
  var min = Math.min(...arr);
  return min;
  
}
*************************************************************************************************************************************
preImmersive-buildingBlocksMastery-119-findShortestElement*

Write a function called “findShortestElement”.

Given an array, “findShortestElement” returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

Your Code Should Pass:

describe("findShortestElement", function() {
  it("should return a string", function() {
    expect(typeof(findShortestElement(["one", "two", "three"]))).toBe("string");
  });
  it("should return the shortest element in an array", function() {
    expect(findShortestElement(["a", "two", "three"])).toBe("a");
  });
  it("should return the first shortest element in an array when there are ties", function() {
    expect(findShortestElement(["one", "to", "no"])).toBe("to");
  });
  it("should return an empty string if the array is empty", function() {
    expect(findShortestElement([])).toBe("");
  })
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: shortest str from the given array
// I: shortest str
// C: none
// E: if arr empty ret "" and ties ret first element

// declare a container as placeholder
// loop thru arr
  // check values of elements to find shortest
  // store shortest in container
// return container

function findShortestElement(arr) {
  if (arr.length < 1) {  
      return "";
    }
    var shortest = arr[0]; 
    for (var x in arr) {
      if (arr[x].length < shortest.length) {  
        shortest = arr[x];
      }
    }
    return shortest;
}

// or

function findShortestElement(arr) {
  var shortest = arr[0];
  
  if (shortest === undefined) { shortest = ""; }
  
  arr.forEach((element) => {
    if (element.length < shortest.length) shortest = element;
  });
  
  return shortest;
}

// or

function findShortestElement(arr) {
  
  if (arr.length === 0) {
    return '';
  }
  
  arr.sort(function(a, b) {
    return a.length - b.length
  });
  return arr[0];
  
}
*************************************************************************************************************************************
preImmersive-buildingBlocksMastery-120-getLargestElement*

Write a function called “getLargestElement”.

Given an array, “getLargestElement” returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

Your Code Should Pass:

describe("getLargestElement", function() {
  it("should return a number", function() {
    expect(typeof getLargestElement([3, 5, 3, 1])).toBe("number");
  });
  it("should return the largest element in an array", function() {
    expect(getLargestElement([3, 5, 3, 1])).toBe(5);
  });
  it("should return the largest element in an array when there are ties", function() {
    expect(getLargestElement([3, 5, 3, 1, 5])).toBe(5);
  });
  it("should return the largest element in an array when they are all negative", function() {
    expect(getLargestElement([-1, -5, -3])).toBe(-1);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: largest number from the given array
// I: an array
// C: none
// E: if arr empty ret 0

// declare a container as placeholder
// loop thru arr
  // check values of elements to find largest
  // store largest in container
// return container

function getLargestElement(arr) {
  if (arr.length < 0) {
    return 0;
  }
  
  var largest = -Infinity;
  for (var x in arr) {
    if (largest < arr[x]) {
      largest = arr[x];
    }
  }
  return largest;
}

// or 

function getLargestElement(arr) {
  var largest = -Infinity;
  
  if (arr === []) return 0;
  
  arr.forEach((x) => { if (x > largest) largest = x });
  
  return largest;
}

// or

var largNum = arr[0];
 if(arr.length < 1){
  return 0;
}

for(i = 0; i < arr.length; i++){
  if(arr[i] > largNum){
    largNum = arr[i];
  }
 }
return largNum;
}

// or

function getLargestElement(arr) {
  // your code here
  
  if (arr.length === 0) {
    return 0;
  }
  
  var max = Math.max(...arr);
  return max;
  
}
***************************************************************************************************************************************
preImmersive-buildingBlocksMastery-121-computeSumOfAllElements*

Write a function called “computeSumOfAllElements”.

Given an array of numbers, “computeSumOfAllElements” returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6

Your Code Should Pass:

describe("computeSumOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeSumOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the sum of all elements", function() {
    expect(computeSumOfAllElements([1, 2, 4])).toBe(7);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeSumOfAllElements([])).toBe(0);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: Σ
// I: an arr
// C: none 
// E: none

// declare placeholder/container
// loop/ iterate thru arr
  // start adding values and storing them in placeholder
// return placeholder

function computeSumOfAllElements(arr) {
  var Σ = 0;
  
  for (x in arr) {
    Σ += arr[x];
  }
  return Σ;
}

// or 

function computeSumOfAllElements(arr) {
  if (arr.length === 0) return 0;
  
  return arr.reduce((a, b) => a + b);
}

// or

function computeSumOfAllElements(arr) {
  return arr.length ? arr.reduce((num1, num2) => { return num1 + num2 }) : 0;
}
*************************************************************************************************************************************
preImmersive-buildingBlocksMastery-122-calculateBillTotal

Write a function called “calculateBillTotal”.

Given the pre tax and pre tip amount of a meal, “calculateBillTotal” returns the total amount due after tax and tip.

Notes:
* Assume that sales tax is 9.5% and tip is 15%.
* Do NOT tip on the sales tax, only on the pre tip amount.

var output = calculateBillTotal(20);
console.log(output); // --> 24.9

Your Code Should Pass:

describe("calculateBillTotal", function() {
  it("should return a number", function() {
    expect(typeof calculateBillTotal(20)).toBe("number");
  });
  it("should return the bill total, incuding tax and tip", function() {
    expect(calculateBillTotal(20)).toBe(24.9);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: total amount after tax (0.095) and tip (0.15)
// I: preTaxAndTipAmount
// C: none
// E: tip is only for the meal

// declare placeholder
// obtain the tip amount
// obtain sales tax
// add tip and tax to placeholder

function calculateBillTotal(preTaxAndTipAmount) {
  var tip = preTaxAndTipAmount*0.15
  var tax = preTaxAndTipAmount*0.095
  return preTaxAndTipAmount + tip + tax;
}

// or

function calculateBillTotal(p) {
  return p + (p * .15) + (p * .095);
}
***********************************************************************************************************************************
preImmersive-buildingBlocksMastery-123-getStringLength

Write a function called “getStringLength”.

Given a string, “getStringLength” returns the length of the given string.

Notes:
* Do NOT use any native ‘length’ methods.
* You might consider using ‘substring’ or ‘slice’ as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5

Your Code Should Pass:

describe("getStringLength", function() {
  it("should return a number", function() {
    expect(typeof getStringLength("heyo")).toBe("number");
  });
  it("should not use the native length operator", function() {
    var body = getStringLength.toString();
    expect(/length/.test(body)).toBe(false);
  });
  it("should return the length of a string", function() {
    expect(getStringLength("heyo")).toBe(4);
  });
  it("should return the length of an empty string", function() {
    expect(getStringLength("")).toBe(0);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: length of given string
// I: a string
// C: Do NOT use any native ‘length’ methods.
// E: none

// declare placeholder
// condition to extract letters
  // a way to count them
  // add values to placeholder
// return value of placeholder

function getStringLength(string) {
  
  y = 0;
  for (var x in string) {
    y +=1;
  }
  return y;
}

var output = getStringLength('hello');
console.log(output); // --> 5

// or

function getStringLength(string) {
  var strArr = string.split("");
  var count = 0;
  while (strArr.pop() != undefined) {
    count++;
  }
  
  return count;
}

// or

function getStringLength(string) {

var charNum = 0;

for(char in string){
  charNum += 1;
}
return charNum;

}

// or 

function getStringLength(string) {
  // your code here
  
  var letters = string.split('');
  const count = letters.reduce((tally, letter) => {
  tally[letter] = (tally[letter] || 0) + 1 ;
  return tally;
} , {});
  var sum = Object.values(count);
  const finalCount = sum.reduce((prev, curr) => prev + curr, 0);
  
  return finalCount;

}

// or

function getStringLength(string) {
  var count = 0;
  for(char in string){
    count ++;
  }
  return count;
}

************************************************************************************************************************************
preImmersive-buildingBlocksMastery-124-joinArraysOfArrays

Write a function called “joinArrayOfArrays”.

Given an array of arrays, “joinArrayOfArrays” returns a single array containing the elements of the nested arrays.

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
You should be familiar with the “concat” method for this problem.

Your Code Should Pass:

describe("joinArrayOfArrays", function() {
  it("should return an array", function() {
    expect(Array.isArray(joinArrayOfArrays([['a', 'b'], [1, 3], [true, false]]))).toBe(true);
  });
  it("should return an array with the elements from all the nested arrays", function() {
    expect(joinArrayOfArrays([['a', 'b'], [1, 3], [true, false]])).toEqual(['a', 'b', 1, 3, true, false]);
  });
  it("should handle empty arrays in the first position", function() {
    expect(joinArrayOfArrays([[], [1, 3], [true, false]])).toEqual([1, 3, true, false]);
  });
  it("should handle empty arrays in the second position", function() {
    expect(joinArrayOfArrays([['a', 'b'], [], [true, false]])).toEqual(['a', 'b', true, false]);
  });
  it("should handle empty arrays in the third position", function() {
    expect(joinArrayOfArrays([['a', 'b'], [1, 3], []])).toEqual(['a', 'b', 1, 3]);
  });
  it("should handle empty arrays in all positions", function() {
    expect(joinArrayOfArrays([[], [], []])).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: a single array containing all arrays within the given array
// I: an array of arrays
// C: none
// E: none

// check concat arr[0].concat(arr[1]);
// create placeholder
// split arrays into vars
// concat vars
// return big array


function joinArrayOfArrays(arr) {
 var bigArray = [];
 for (var x = 0 ; x < arr.length ; x++ ) {
   bigArray = bigArray.concat(arr[x]);
 }
 return bigArray;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

// or

function joinArrayOfArrays(arr) {
  var bigArr = [];
  
  arr.forEach(function (subArr) {
    bigArr = bigArr.concat(subArr);
  });
  
  return bigArr;
}

// or

function joinArrayOfArrays(arr) {
  // your code here
  var store = [];
  for(i in arr){
    store = store.concat(arr[i]);
  }
  return store;
}

// or

function joinArrayOfArrays(arr) {
  var flat = arr.reduce((total, amount) => total.concat(amount), []);
  return flat;
}
**************************************************************************************************************************************
preImmersive-buildingBlocksMastery-125-getProductOfAllElementsAtProperty*

Write a function called “getProductOfAllElementsAtProperty”.

Given an object and a key, “getProductOfAllElementsAtProperty” returns the product of all the elements in the array located at the given key.

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

Your Code Should Pass:

describe("getProductOfAllElementsAtProperty", function() {
  it("should return the product of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(8);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: the product of all the elements in array obj[key]
// I: obj[key]
// C: none
// E: if obj[key] 's array empty ret 0, if property not an array and if no prop

// create placeholder
// loop thru array
  // multiply elements in array
// return placeholder

var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length < 1) {
    return 0;
  }
  var product = obj[key][0];
  for (var x in obj[key]) {
    product = obj[key][x]*product;
  }
  return product;
}

var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

// or

function getProductOfAllElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key] === undefined || obj[key].length === 0)
    return 0;
    
  var total = 1;
  
  obj[key].forEach(function (element) {
    total *= element;
  });
  
  return total;
}

// or

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  
   if (!Array.isArray(obj[key])) {
    return 0;
  } else  if (!obj.hasOwnProperty(key)) {
    return 0;
  } else if (obj[key].length === 0) {
    return 0;
  } 
   return obj[key].reduce((acc, curr) => acc * curr);

}

// or

function getProductOfAllElementsAtProperty(obj, key) {
  var arr = obj[key];
  // Method 1:
  // if(!Array.isArray(arr) || !arr.length){
  //   return 0;
  // }else{
  //   return arr.reduce((e1, e2) => e1 * e2);
  // }
  
  //Method 2:
  return (!Array.isArray(arr) || !arr.length) ? 0 : arr.reduce((e1, e2) => e1 * e2);
}
*************************************************************************************************************************************
preImmersive-buildingBlocksMastery-126-sumDigits*

Write a function called “sumDigits”.

Given a number, “sumDigits” returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4
Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the “toString” method, as well as the “Number” function.

Your Code Should Pass:

describe("sumDigits", function() {
  it("should return a number", function() {
    expect(typeof sumDigits(2002)).toBe("number");
  });
  it("should sum the digits of a positive number", function() {
    expect(sumDigits(2002)).toBe(4);
  });
  it("should sum the digits of a negative number", function() {
    expect(sumDigits(-2004)).toBe(2);
  });
  it("should sum return 0 if the number is 0", function() {
    expect(sumDigits(0)).toBe(0);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

**********************************************************************************************************************************
preImmersive-buildingBlocksMastery-127-getSumOfAllElementsAtProperty*

Write a function called “getSumOfAllElementsAtProperty”.

Given an object and a key, “getSumOfAllElementsAtProperty” returns the sum of all the elements in the array located at the given key.

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the key, it should return 0.

var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

Your Code Should Pass:

describe("getSumOfAllElementsAtProperty", function() {
  it("should return the sum of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(7);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: Σ in the obj[key]'s array
// I: obj[key]
// C: none
// E: if obj[key] 's array empty, if property not an array and if no prop  ret 0

// declare placeholder
// loop thru array
  // add all elements inside that array
// return placeholder


function getSumOfAllElementsAtProperty(obj, key) {
   if (!Array.isArray(obj[key]) || obj[key].length < 1) {
    return 0;
  }
  var Σ = 0;
  for (x in obj[key]) {
    Σ += obj[key][x];
  }
  return Σ;
}

// or

function getSumOfAllElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) { return 0; }
  if (obj[key].length === 0) return 0;
  return obj[key].reduce(function (a, b) {
    return a + b;
  });
}

// or

function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  if (!obj.hasOwnProperty(key) || !obj[key].length || !Array.isArray(obj[key])) {
    return 0;
  }
  
  return obj[key].reduce((acc, curr) => acc + curr);
}
************************************************************************************************************************************
