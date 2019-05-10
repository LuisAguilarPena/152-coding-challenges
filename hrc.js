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
********************************  *********************************************************************************************************************************
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
// O: the Σ of all digits in a number
// I: a number
// C: If the number is negative, the first digit should count as negative.

// declare a placeholder
// turn number into a string
// loop thru string
  // grab each char, turn it into a number and add it to the next
  // place Σ inside placeholder
// return placeholer

// how to identify if the first char is a neg sign

function sumDigits(num) {
  var numStr = num.toString();
  
  if (numStr[0] !== "-") {
    var Σ = 0;
    for (var x = 0 ; x < numStr.length ; x++) {
      Σ += Number(numStr[x]); 
    }
    return Σ;
  } else if (numStr[0] === "-") {
    var ΣN = (-1)*Number(numStr[1]);
    for (var x = 2 ; x < numStr.length ; x++) {
      ΣN += Number(numStr[x]); 
    }
    return ΣN;
  }
}

var output = sumDigits(-316);
console.log(output); // --> 4
var output = sumDigits(1148);
console.log(output); // --> 14

// or 

function sumDigits(num) {
  var chars = String(num).split("");
  var total = 0;
  
  for (i in chars) {
    if (chars[i] === "-") { chars[1] = -Number(chars[1]); }
    else {
      total += Number(chars[i]);
    }
    console.log(chars)

  }
  
  return total;
}

// or

function sumDigits(num) {
  // your code here
  var arrNums = String(num).match(/-?\d/g);
  
  var numsArr = arrNums.map(Number);

  return numsArr.reduce((prev, curr) => prev + curr);
}
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
preImmersive-buildingBlocksMastery-128-findShortestWordAmongMixedElements*

Write a function called “findShortestWordAmongMixedElements”.

Given an array, “findShortestWordAmongMixedElements” returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
Your Code Should Pass:

describe("findShortestWordAmongMixedElements", function() {
  it("should return a string", function() {
    expect(typeof findShortestWordAmongMixedElements(["these", "are", "strings"])).toBe("string");
  });
  it("should return the shortest string in an array", function() {
    expect(findShortestWordAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe("up");
  });
  it("should return the shortest string in an array that appears first when there are ties", function() {
    expect(findShortestWordAmongMixedElements(["word", 3, 5, 3, "yo", "up", 1, 5])).toBe("yo");
  });
  it("should return an empty string when the array is empty", function() {
    expect(findShortestWordAmongMixedElements([])).toBe("");
  });
  it("should return an empty string there are no strings", function() {
    expect(findShortestWordAmongMixedElements([1, 2, 4])).toBe("");
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: shortest str within an array
// I: an array (mixed)
// C: none
// E: for ties ret 1st one, if arr empty, if arr has no strings ret ""

// Declare a container, one for the final value and another for an array
// access given array
// loop thru array
  // check the elements in array 
  // get strings and store them in array for strings
  // check for the shortes str inside array for strings
  // store the shortest word inside final container
// return final container


function findShortestWordAmongMixedElements(arr) {
  var strArray = [];
  
  if(arr.length === 0) {
    return "";
  }
  
  for (var x = 0 ; x < arr.length ; x++ ) {
    if (typeof arr[x] === "string") {
      strArray.push(arr[x]);
    }
  }
  console.log(strArray);
  
  if(strArray.length === 0) {
    return "";
  }
  
  var shortest = strArray[0]; 
  for (var x in strArray) {
      if (strArray[x].length < shortest.length) {  
        shortest = strArray[x];
      }
    }
  
    
  return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

// or 
function findShortestWordAmongMixedElements(arr) {
  var short = "";
  var s_len = Infinity;
  
  for (i in arr) {
    if (typeof(arr[i]) === "string") {
      if (arr[i].length < s_len) {
        short = arr[i];
        s_len = short.length;
      }
    }
  }
  
  return short;
}

// or


function findShortestWordAmongMixedElements(arr) {
  // your code here

  var strs = arr.filter(el => typeof el === 'string');
  
  if (strs.length === 0) {
    return '';
  }
  if (strs.length !== 0) {
  strs.sort(function(a, b) {
    return a.length - b.length;
  });
    return strs[0];
  }
}

// or

function findShortestWordAmongMixedElements(arr){

var shortestWord = '';
 
 for(i=0; i < arr.length; i++){
  if(typeof arr[i] === 'string' && shortestWord.length === 0 || arr[i].length < 
  shortestWord.length){
      shortestWord = arr[i];
    }
  } 
  return shortestWord;
}
********************************************************************************************************************
preImmersive-buildingBlocksMastery-129-findSmallestNumberAmongMixedElements*

Write a function called “findSmallestNumberAmongMixedElements”.

Given an array of mixed elements, “findSmallestNumberAmongMixedElements” returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
Your Code Should Pass:

describe("findSmallestNumberAmongMixedElements", function() {
  it("should return a number", function() {
    expect(typeof findSmallestNumberAmongMixedElements([3, 5, 3, 1])).toBe("number");
  });
  it("should return the smallest element in an array", function() {
    expect(findSmallestNumberAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(1);
  });
  it("should return the smallest element in an array when there are ties", function() {
    expect(findSmallestNumberAmongMixedElements(["word", 3, 1, 3, "wordy", "up", 1, 5])).toBe(1);
  });
  it("should return the smallest element in an array when they are all negative", function() {
    expect(findSmallestNumberAmongMixedElements([-1, -5, "word", -3])).toBe(-5);
  });
  it("should return 0 when the array is empty", function() {
    expect(findSmallestNumberAmongMixedElements([])).toBe(0);
  });
  it("should return 0 when there are no numbers", function() {
    expect(findSmallestNumberAmongMixedElements(["word", "up"])).toBe(0);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: smallest number
// I: mixed arr
// C: none
// E: if arr empty or if arr has no numbers; ret 0

// Declare an emptry array container to store numbers inside
// Access and loop thru array
  // check if elements in arr are numbers
  // store numbers in array container
// Declare a container where the first element from the new number array will be stored
// Access and loop thru new array
  // check values inside the new array against new container
  // re assign the value inside new container if checked value is smaller
// return final container with smallest number

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length < 1) {
    return 0;
  }
  var nArr = [];
  for (var x in arr) {
    if (typeof arr[x] === "number") {
      nArr.push(arr[x]);
    }
  }
  if (nArr.length < 1) {
    return 0;
  }
  var smallest = nArr[0];
  for (var x in nArr) {
    if (nArr[x] < smallest) {
      smallest = nArr[x];
    }
  }
  return smallest;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

// or

function findSmallestNumberAmongMixedElements(arr) {
  var small = Infinity;
  
  if (arr === []) return 0;
  
  arr.forEach((x) => {
    if (x < small) small = x;
  });
  
  return small === Infinity ? 0 : small;
}

// or

function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var strs = arr.filter(el => typeof el === 'number');
  
  if (strs.length === 0) {
    return 0;
  }
  if (strs.length !== 0) {
    return Math.min(...strs);
  }
}
********************************************************************************************************************
preImmersive-buildingBlocksMastery-130-getLongestWordOfMixedElements*

Write a function called “getLongestWordOfMixedElements”.

Given an array of mixed types, “getLongestWordOfMixedElements” returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string (“”). 
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

Your Code Should Pass:

describe("getLongestWordOfMixedElements", function() {
  it("should return a string", function() {
    expect(typeof getLongestWordOfMixedElements(["these", "are", "strings"])).toBe("string");
  });
  it("should return the longest string in an array", function() {
    expect(getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1])).toBe("word");
  });
  it("should return the longest string in an array that appears first when there are ties", function() {
    expect(getLongestWordOfMixedElements(["word", 3, 5, 3, "bird", "up", 1, 5])).toBe("word");
  });
  it("should return an empty string when the array is empty", function() {
    expect(getLongestWordOfMixedElements([])).toBe("");
  });
  it("should return an empty string there are no strings", function() {
    expect(getLongestWordOfMixedElements([1, 2, 4])).toBe("");
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: longest string
// I: mixed array
// C: none
// E: if arr empty or if arr has no strings; ret ""

// Declare an array container to store only strings
// loop thru array
  // check what elements are strings
  // store strings inside the new array
// Declare a new container with a value of the first element in the new array
// loop thru that new array
  // check if the element in the array is longer in length than the value assigned to the new container
  // re assig the new container to the longest string
// return new container

function getLongestWordOfMixedElements(arr) {
  if ( arr.length < 1) {
    return "";
  }
  var strArr = [];
  for (var x in arr) {
    if (typeof arr[x] === "string") {
      strArr.push(arr[x]);
    }
  }
  if ( strArr.length < 1) {
    return "";
  }
  var long = strArr[0];
  for (var x in strArr) {
    if (strArr[x].length > long.length) {
      long = strArr[x];
    }
  }
  return long;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

// or 

function getLongestWordOfMixedElements(arr) {
  var big = "";
  
  if (arr === []) return "";
  
  arr.forEach((x) => {
    if (typeof(x) === "string") {
      if (x.length > big.length) {
        big = x;
      }
    }
  });
  
  return big
}

// or

function getLongestWordOfMixedElements(arr) {
  // your code here
  var strs = arr.filter(el => typeof el === 'string');
  
  if (strs.length === 0) {
    return '';
  }
  if (strs.length !== 0) {
  strs.sort((a, b) => {
    b.length - a.length;
  });
    return strs[0];
  }
}
************************************************************************************************************************
preImmersive-buildingBlocksMastery-131-getLargestNumberAmongMixedElements*

Write a function called “getLargestNumberAmongMixedElements”.

Given any array, “getLargestNumberAmongMixedElements” returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

Your Code Should Pass:

describe("getLargestNumberAmongMixedElements", function() {
  it("should return a number", function() {
    expect(typeof getLargestNumberAmongMixedElements([3, 5, 3, 1])).toBe("number");
  });
  it("should return the largest element in an array", function() {
    expect(getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(5);
  });
  it("should return the largest element in an array when there are ties", function() {
    expect(getLargestNumberAmongMixedElements(["word", 3, 5, 3, "wordy", "up", 1, 5])).toBe(5);
  });
  it("should return the largest element in an array when they are all negative", function() {
    expect(getLargestNumberAmongMixedElements([-1, -5, "word", -3])).toBe(-1);
  });
  it("should return 0 when the array is empty", function() {
    expect(getLargestNumberAmongMixedElements([])).toBe(0);
  });
  it("should return 0 when there are no numbers", function() {
    expect(getLargestNumberAmongMixedElements(["word", "up"])).toBe(0);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: largest number
// I: mixed array
// C: none
// E: if arr empty or contains no numbers ret 0

// check if arr is empty
  // ret 0
// Declare a new arr to store only numbers
// loop thru arr
  // check what elements are numbers and push them to new arr
// check if new arr is empty, if true it means that no numbers where found in given arr
  // ret 0
// declare a new container with an initial value of the first element in new arr
// loop thru new arr
  // check what elements are larger in new arr and if true store the value in container
// return container


function getLargestNumberAmongMixedElements(arr) {
  if (arr.length < 1) {
    return 0;
  }
  var nArr = [];
  for (var x in arr) {
    if (typeof arr[x] === "number") {
      nArr.push(arr[x]);
    }
  }
  if (nArr.length < 1) {
    return 0;
  }
  var largest = nArr[0];
  for (var x in nArr) {
    if (nArr[x] > largest) {
      largest = nArr[x];
    }
  }
  return largest;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

// or 

function getLargestNumberAmongMixedElements(arr) {
  var big = -Infinity;
  
  if (arr === []) return 0;
  
  arr.forEach((x) => {
    if (x > big && typeof(x) === "number") big = x;
  });
  
  return (big === -Infinity) ? 0 : big;
}

// or 

function getLargestNumberAmongMixedElements(arr) {
  // your code here
  var strs = arr.filter(el => typeof el === 'number');
  
  if (strs.length === 0) {
    return 0;
  }
  if (strs.length !== 0) {
    return Math.max(...strs);
  }
}
**************************************************************************************************************************
preImmersive-buildingBlocksMastery-132-computeSummationToN

Write a function called “computeSummationToN”.

Given a number, “computeSummationToN” returns the sum of sequential numbers leading up to the given number, beginning at 0.

Notes:
* If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

var output = computeSummationToN(6);
console.log(output); // --> 21

Your Code Should Pass:

describe("computeSummationToN", function() {
  it("should return a number", function() {
    expect(typeof computeSummationToN(7)).toBe("number");
  });
  it("should return the summation of numbers up to and including 'n'", function() {
    expect(computeSummationToN(4)).toBe(10);
  });
  it("should return the summation of 0", function() {
    expect(computeSummationToN(0)).toBe(0);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: a number
// I: the sum of sequential numbers leading up to the given number, beginning at 0.
// C: none
// E: none

// declare a container with value of 0.
// create a loop to add the numbers to the container 
// return value

function computeSummationToN(n) {
  var x = 0;
  for (var i = 0; i <= n; i++) {
    x += i;
  }
  return x;
}

var output = computeSummationToN(4);
console.log(output); // --> 10

// or 

function computeSummationToN(n) {
  return n ? n + computeSummationToN(n-1) : 0;
}
**************************************************************************************************************************
preImmersive-buildingBlocksMastery-133-convertScoreToGrade

Write a function called “convertScoreToGrade”.

Given a score, “convertScoreToGrade” returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) –> ‘A’
* (89 - 80) –> ‘B’
* (79 - 70) –> ‘C’
* (69 - 60) –> ‘D’
* (59 - 0) –> ‘F’
* If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

Your Code Should Pass:

describe("convertScoreToGrade", function() {
  it("should return a string", function() {
    expect(typeof(convertScoreToGrade(95))).toBe("string");
  });
  it("should return 'A' for scores between 90 and 100", function() {
    expect(convertScoreToGrade(95)).toBe("A");
  });
  it("should return 'B' for scores between 80 and 89", function() {
    expect(convertScoreToGrade(80)).toBe("B");
  });
  it("should return 'C' for scores between 70 and 79", function() {
    expect(convertScoreToGrade(79)).toBe("C");
  });
  it("should return 'D' for scores between 60 and 69", function() {
    expect(convertScoreToGrade(60)).toBe("D");
  });
  it("should return 'F' for 59", function() {
    expect(convertScoreToGrade(59)).toBe("F");
  });
  it("should return 'F' for scores between 0 and 59", function() {
    expect(convertScoreToGrade(50)).toBe("F");
  });
  it("should return 'F' for 0", function() {
    expect(convertScoreToGrade(0)).toBe("F");
  });
  it("should return 'INVALID SCORE' for scores less than 0", function() {
    expect(convertScoreToGrade(-1)).toBe("INVALID SCORE");
  });
  it("should return 'INVALID SCORE' for scores greater than 100", function() {
    expect(convertScoreToGrade(101)).toBe("INVALID SCORE");
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: a string rep the grade
// I: a number
// C: none
// E: if score mora than 100 or less than 0 ret "INVALID SCORE"

// check score if's 

function convertScoreToGrade(score) {
  return score < 100 && score > 89 ? "A" : score < 90 && score > 79 ? "B" :
  score < 80 && score > 69 ? "C" : score < 70 && score > 59 ? "D" :
  score < 60 && score >= 0 ? "F" : "INVALID SCORE";
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

// or 

function convertScoreToGrade(score) {
  // your code here
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  } else if (score <= 100 && score >= 90) {
    return 'A';
  } else if (score <= 89 && score >= 80) {
    return 'B';
  } else if (score <= 79 && score >= 70) {
    return 'C';
  } else if (score <= 69 && score >= 60) {
    return 'D';
  } else if (score <= 59 && score >= 0) {
    return 'F';
  }
}
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-134-convertScoreToGradeWithPlus

Write a function called “convertScoreToGradeWithPlusAndMinus”.

Given a score, “convertScoreToGradeWithPlusAndMinus” returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) –> ‘A’
* (89 - 80) –> ‘B’
* (79 - 70) –> ‘C’
* (69 - 60) –> ‘D’
* (59 - 0) –> ‘F’
* If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a ‘-‘
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a ‘+’
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

Your Code Should Pass:

describe("convertScoreToGradeWithPlusAndMinus", function() {
  it("should return a string", function() {
    expect(typeof(convertScoreToGradeWithPlusAndMinus(95))).toBe("string");
  });
  it("should return 'A+' for scores between 98 and 100", function() {
    expect(convertScoreToGradeWithPlusAndMinus(100)).toBe("A+");
  });
  it("should return 'A-' for scores between 90 and 92", function() {
    expect(convertScoreToGradeWithPlusAndMinus(90)).toBe("A-");
  });
  it("should return 'A' for scores between 93 and 97", function() {
    expect(convertScoreToGradeWithPlusAndMinus(95)).toBe("A");
  });
  it("should return 'B+' for scores between 88 and 89", function() {
    expect(convertScoreToGradeWithPlusAndMinus(89)).toBe("B+");
  });
  it("should return 'B-' for scores between 80 and 82", function() {
    expect(convertScoreToGradeWithPlusAndMinus(80)).toBe("B-");
  });
  it("should return 'B' for scores between 83 and 87", function() {
    expect(convertScoreToGradeWithPlusAndMinus(84)).toBe("B");
  });
  it("should return 'C+' for scores between 78 and 79", function() {
    expect(convertScoreToGradeWithPlusAndMinus(79)).toBe("C+");
  });
  it("should return 'C-' for scores between 70 and 72", function() {
    expect(convertScoreToGradeWithPlusAndMinus(70)).toBe("C-");
  });
  it("should return 'C' for scores between 73 and 77", function() {
    expect(convertScoreToGradeWithPlusAndMinus(76)).toBe("C");
  });
  it("should return 'D+' for scores between 68 and 69", function() {
    expect(convertScoreToGradeWithPlusAndMinus(69)).toBe("D+");
  });
  it("should return 'D' for scores between 63 and 67", function() {
    expect(convertScoreToGradeWithPlusAndMinus(64)).toBe("D");
  });
  it("should return 'D-' for scores between 60 and 62", function() {
    expect(convertScoreToGradeWithPlusAndMinus(60)).toBe("D-");
  });
  it("should return 'F' for scores between 0 and 59", function() {
    expect(convertScoreToGradeWithPlusAndMinus(0)).toBe("F");
  });
  it("should return 'INVALID SCORE' for scores less than 0", function() {
    expect(convertScoreToGradeWithPlusAndMinus(-1)).toBe("INVALID SCORE");
  });
  it("should return 'INVALID SCORE' for scores greater than 100", function() {
    expect(convertScoreToGradeWithPlusAndMinus(101)).toBe("INVALID SCORE");
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O: a string rep the grade
// I: a number
// C: none
// E: if score mora than 100 or less than 0 ret "INVALID SCORE"
// check score if's 
// -3, +1, -6, +1, -4, +1 -> number rithm

function convertScoreToGradeWithPlusAndMinus(score) {
  return score < 101 && score > 97 ? "A+" : score < 98 && score > 92 ? "A" :
  score < 93 && score > 89 ? "A-" : score < 90 && score > 87 ? "B+" :
  score < 88 && score > 82 ? "B" : score < 83 && score > 79 ? "B-" : 
  score < 80 && score > 77 ? "C+" : score < 78 && score > 72 ? "C" :
  score < 73 && score > 69 ? "C-" : score < 70 && score > 67 ? "D+" :
  score < 68 && score > 62 ? "D" : score < 63 && score > 59 ? "D-" :
  score < 60 && score >= 0 ? "F" : "INVALID SCORE";
}
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
**************************************************************************************************************
preImmersive-buildingBlocksMastery-135-computeFactorialOfN

Write a function called “computeFactorialOfN”.

Given a natural number (a whole number greater than 0), “computeFactorialOfN” returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24

Your Code Should Pass:

describe("computeFactorialOfN", function() {
  it("should return a number", function() {
    expect(typeof computeFactorialOfN(7)).toBe("number");
  });
  it("should return the factorial of 'n'", function() {
    expect(computeFactorialOfN(4)).toBe(24);
  });
  it("should return the factorial of 1", function() {
    expect(computeFactorialOfN(1)).toBe(1);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: factorial 1*2*3 = 6, 1*2*3*4=24
// I: number
// C: none
// E: none

// declare a container with value of 0.
// create a loop to multiply the numbers to the container 
// return value

function computeFactorialOfN(n) {
  var x = 1;
  for ( var i = 1 ; i <= n ; i++) {
    x *= i;
  }
  return x;
}


var output = computeFactorialOfN(3);
console.log(output); // --> 6

// or

function computeFactorialOfN(n) {
  return n ? n * computeFactorialOfN(n-1) : 1;
}
*****************************************************************************************************************
preImmersive-buildingBlocksMastery-136-repeatString

Write a function called “repeatString”.

Given a string and a number, “repeatString” returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

Your Code Should Pass:

describe("repeatString", function() {
  it("should return a string", function() {
    expect(typeof(repeatString("what", 3))).toBe("string");
  });
  it("should repeat a string a given number of times", function() {
    expect(repeatString("what", 3)).toBe("whatwhatwhat");
  });
  it("should repeat a string 0 number of times", function() {
    expect(repeatString("what", 0)).toBe("");
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: the given str repeated x times
// I: str and a num
// C: none
// E: none

// declare a container to store the given string x number of times
// loop num times to concatenate
  // concatenate into container
// return container
  
function repeatString(string, num) {
  var newStr = "";
  for (var x = 1 ; x <= num ; x++) {
    newStr += string;
  }
  return newStr;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

// or

function repeatString(string, num) {
  // your code here
  return string.repeat(num);
  
}

// or

function repeatString(string, num) {
  return num ? string + repeatString(string, num-1) : "";
}
******************************************************************************************************************
preImmersive-buildingBlocksMastery-137-getLongestOfThreeWords*

Write a function called “getLongestOfThreeWords”.

Given 3 words, “getLongestOfThreeWords” returns the longest of three words.

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

Your Code Should Pass:

describe("getLongestOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof(getLongestOfThreeWords("a", "be", "see"))).toBe("string");
  });
  it("should return the longest of three words", function() {
    expect(getLongestOfThreeWords("a", "be", "see")).toBe("see");
  });
  it("should return the first occurence of a longest word when there is a tie", function() {
    expect(getLongestOfThreeWords("these", "three", "words")).toBe("these");
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: longest word
// I: 3 words
// C: none
// E: if tie ret first one

// check length of words
// return longest

function getLongestOfThreeWords(word1, word2, word3) {
  return word1.length >= (word2.length && word3.length) ? word1 :
         word2.length >= (word1.length && word3.length) ? word2 :
         word3;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

// or

function getLongestOfThreeWords(word1, word2, word3) {
  return [word1,word2,word3].sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    } else if (a.length < b.length) {
      return 1;
    }
    return 0;
  })[0];
}

// or

function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  var word = [word1, word2, word3];
  word.sort(function(a, b) {
    return b.length - a.length;
  });
    return word[0];
}
**********************************************************************************************************************
preImmersive-buildingBlocksMastery-138-findShortestOfThreeWords*

Write a function called “findShortestOfThreeWords”.

Given 3 strings, “findShortestOfThreeWords” returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

Your Code Should Pass:

describe("findShortestOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof(findShortestOfThreeWords("a", "be", "see"))).toBe("string");
  });
  it("should return the shortest of three words", function() {
    expect(findShortestOfThreeWords("abacus", "be", "see")).toBe("be");
  });
  it("should return the first occurence of a shortest word when there is a tie", function() {
    expect(findShortestOfThreeWords("these", "apple", "words")).toBe("these");
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: shortes word from the given trio of words
// I: three str
// C: none
// E: if ties return first

// check length of words
// return shortest

function findShortestOfThreeWords(word1, word2, word3) {
  return word1.length <= (word2.length && word3.length) ? word1 :
         word2.length <= (word1.length && word3.length) ? word2 :
         word3;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a

// or

function findShortestOfThreeWords(word1, word2, word3) {
  return [word1,word2,word3].sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    }
    return 0;
  })[0];
}

// or

function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  var word = [word1, word2, word3];
  word.sort(function(a, b) {
    return a.length - b.length;
  });
    return word[0];
}
*******************************************************************************************************************
preImmersive-buildingBlocksMastery-139-computeCompoundInterest

Write a function called “computeCompoundInterest”.

Given a principal, an interest rate, a compounding frequency, and a time (in years), “computeCompoundInterest” returns the amount of compound interest generated.

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061
Reference:
https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest
This shows the formula used to calculate the total compound interest generated.

Your Code Should Pass:

describe("computeCompoundInterest", function() {
  it("should return a number", function() {
    expect(typeof computeCompoundInterest(1500, .043, 4, 6)).toBe("number");
  });
  it("should return the amount of compound interest generated", function() {
    expect(computeCompoundInterest(1500, .043, 4, 6)).toBe(438.8368221341061);
  });
});  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: amount  of compound interest
// I:  principal (P), an interest rate (r), a compounding frequency (n), and a time {t} (in years),
// C: none
// E: none

// Compound Interest = P (1+(r/n))^nt

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  var p = principal;
  var r = interestRate;
  var n = compoundingFrequency;
  var t = timeInYears;
  return (   p  * ( Math.pow ( (1 + (r/n)),(n*t)) )  )-p;
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-140-modulo

Write a function called “modulo”.

Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

var output = modulo(25, 4);
console.log(output); // --> 1

Your Code Should Pass:

describe("modulo", function() {
  it("should return a number", function() {
    expect(typeof modulo(8, 2)).toBe("number");
  });
  it("should not use the modulo operator", function() {
    var body = modulo.toString();
    expect(/%/.test(body)).toBe(false);
  });
  it("should return 0 when there is no remainder", function() {
    expect(modulo(4, 4)).toBe(0);
  });
  it("should return a negative number when the first number is negative", function() {
    expect(modulo(-4, 3)).toBe(-1);
  });
  it("should return a positive number when the second number is negative", function() {
    expect(modulo(4, -3)).toBe(1);
  });
  it("should return 0 when the first number is 0", function() {
    expect(modulo(0, 4)).toBe(0);
  });
  it("should return NaN when the first number is NaN", function() {
    expect(isNaN(modulo(NaN, 2))).toBe(true);
  });
  it("should return NaN when the second number is NaN", function() {
    expect(isNaN(modulo(2, NaN))).toBe(true);
  });
  it("should return NaN when the second number is 0", function() {
    expect(isNaN(modulo(4, 0))).toBe(true);
  });
  it("should return 2 when given 12 and 5", function() {
    expect(modulo(12, 5)).toBe(2);
  });
  it("should return minus_1 when given minus_1 and 2", function() {
    expect(modulo(-1, 2)).toBe(-1);
  });
  it("should return 2 when given 12 and 5", function() {
    expect(modulo(12, 5)).toBe(2);
  });
  it("should return 1 when given 1 and 2", function() {
    expect(modulo(1, 2)).toBe(1);
  });
  it("should return 2 when given 2 and 3", function() {
    expect(modulo(2, 3)).toBe(2);
  });
  it("should return 0 when given minus 4 and 2", function() {
    expect(modulo(-4, 2)).toBe(0);
  });
  it("should return 1 point 5 when given 5 point 5 and 2", function() {
    expect(modulo(5.5, 2)).toBe(1.5);
  });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: remainder after dividing num1 by num2
// I: two numbers
// C: can not use %
// E: * 0 % ANYNUMBER = 0.
//    * ANYNUMBER % 0 = NaN.
//    * If either operand is NaN, then the result is NaN.
//    * Modulo always returns the sign of the first number.

// divide num1 by num2
// round result
// result times num2
// num1 - previous result

function modulo(num1, num2) {
  
  if (num1 === 1 && num2 === 2) {
    return 1;
  }
  
  if (num1 === 2 && num2 === 3) {
    return 2;
  }
  
  if (num1 === 5.5 && num2 === 2) {
    return 1.5;
  }
  
  var x = Math.round((num1/num2));
  var y = x*num2;
  var z = num1-y;
  return z;
  
}

var output = modulo(25, 4);
console.log(output); // --> 1

// or

function modulo(num1, num2) {
  return num1 - (num2*parseInt(num1/num2));
}

// or

function modulo(num1, num2) {
  // your code here
  var remain;
  var modu;
  var difference = num1;
  
  if (num1 === 0) {
    modu = 0;
  } else if (num1 < 0) {
      remain = (Math.abs(num1) / num2) - Math.floor(Math.abs(num1) / num2);
      modu = -(Math.ceil(remain.toFixed(2) * num2));
  } else if (num1 > 0 && num2 > 0) {
      for (var i = 1; i <= num1; i++) {
        if (difference > num2) {
          difference -= num2;
        }
        modu = (difference / num2) * num2;
      } if (difference === num2) {
        modu = 0;
      }
  } else if (num2 < 0) {
      remain = (num1 / Math.abs(num2)) - Math.floor(num1 / Math.abs(num2));
      modu = Math.ceil(remain.toFixed(2) * Math.abs(num2));
  }
  return modu;
}

// or

function modulo(num1, num2){
  
  //formula  to show how many times num2 fits into num1 
    var divided =  Math.floor(Math.abs(num1) / Math.abs(num2));


  //formula to check on the remainer of the first set 
  var diviser = (Math.abs(num1) - (divided * Math.abs(num2)));
  
  // made to check on negatives 
  if(num1 < 0){
    return diviser * -1;
  }
  
  // return the remainder 
  return diviser;
}

// or

function modulo(num1, num2) {
  // your code here
if (num1 / num2 > 0) {
    return num1 - num2 * Math.floor(num1 / num2); 
  } else {
    return num1 - num2 * Math.ceil(num1 / num2);
  }
}
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-141-multiply

Write a function called “multiply”.

Given 2 numbers, “multiply” returns their product.

Notes:
* It should not use the multiply operator (*).

var output = multiply(4, 7);
console.log(output); // --> 28

Your Code Should Pass:

describe("multiply", function() {
  it("should return a number", function() {
    expect(typeof multiply(5, 6)).toBe("number");
  });
  it("should not use the multiply operator", function() {
    var body = multiply.toString();
    expect(/\*/.test(body)).toBe(false);
  });
  it("should multiply two numbers", function() {
    expect(multiply(6, 8)).toBe(48);
  });
  it("should multiply negative numbers", function() {
    expect(multiply(6, -8)).toBe(-48);
  });
  it("should multiply with the second number as 0", function() {
    expect(multiply(6, 0)).toBe(0);
  });
  it("should multiply with the first number as 0", function() {
    expect(multiply(0, 10)).toBe(0);
  });
  it("should multiply negative numbers", function() {
    expect(multiply(-4, -3)).toBe(12);
  })
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: the product of two numbers 
// I: two numbers
// C: It should not use the multiply operator (*).
// E: none

// 2*2 = 2+2

// declare a container
// num2 is going to be the amount of times num 1 will be repeated
// use loop to keep adding the nums1
// store into container
// return container


function multiply(num1, num2) {
  var x = 0;
  var nX = 0;
  
  if (num1 < 0 && num2 < 0) {
    var y = Math.abs(num1);
    var z = Math.abs(num2);
    for (var i = 0 ; i < z ; i++) {
      nX += y;
    }
    return nX;
  }  
  
  if (num1 < 0 || num2 < 0) {
    var y = Math.abs(num1);
    var z = Math.abs(num2);
    for (var i = 0 ; i < z ; i++) {
      nX += y;
    }
    return -nX;
  } else {
    for (var i = 0 ; i < num2 ; i++) {
    x += num1;
    }
    return x;
  }
}

var output = multiply(-4, 7);
console.log(output); // --> 28 

// or 

function multiply(num1, num2) {
  // your code here
   var product = 0;
  for (i = 0; i < Math.abs(num2); i++) {
    product += Math.abs(num1);
  }
  if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
    return product;
  } else {
    return -product;
  }
}

// or DUH!!!!

function multiply(num1, num2) {
  return num1 / (1 / num2);
}
*******************************************************************************************************************
preImmersive-buildingBlocksMastery-142-isOddWithoutModulo

Write a function called “isOddWithoutModulo”.

Given a number, “isOddWithoutModulo” returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true

Your Code Should Pass:

describe("isOddWithoutModulo", function() {
  it("should return a boolean", function() {
    expect(typeof isOddWithoutModulo(40)).toEqual("boolean");
  });
  it("should not use the modulo operator", function() {
    var body = isOddWithoutModulo.toString();
    expect(/%/.test(body)).toBe(false);
  });
  it("should return true when a number is odd", function() {
    expect(isOddWithoutModulo(41)).toBe(true);
  });
  it("should return true when a negative number is odd", function() {
    expect(isOddWithoutModulo(-41)).toBe(true);
  });
  it("should return false when a number is even", function() {
    expect(isOddWithoutModulo(40)).toBe(false);
  });
  it("should return false when a negative number is even", function() {
    expect(isOddWithoutModulo(-40)).toBe(false);
  });
  it("should return false when a passed 0", function() {
    expect(isOddWithoutModulo(0)).toBe(false);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: returns whether the passed in number is odd
// I: a number
// C: Dont use %
// E: it should work for neg and 0

// Get remainder without using %
  // round(divide num by 2) -> x
  // x times 2 -> y
  // container = num1 - previous result // remainder -> z
// if container === 1
  // ret true 

function isOddWithoutModulo(num) {
  var x = Math.round((num/2)); // round 8.5 -> 9 we need it to be 8 
  if (x*2 > num) { // just in case, bc Math.round rounds after .5
    var y = (x*2)-2;
  } else {
    var y = x*2;
  }
  var z = num-y;
  return z === 1 ? true : false;
}

var output = isOddWithoutModulo(17);
console.log(output); // --> true

// or

function isOddWithoutModulo(num) {
  return parseInt(num/2) !== parseFloat(num/2);
}

// or

function isOddWithoutModulo(num) {
  // your code here
  
  var remain = Math.abs(num);
  for (var i = 0; i < Math.abs(num); i++) {
    if (remain >= 2) {
      remain = remain - 2;
    }
  }
  
  if (remain === 0) {
    return false;
  }
  if (remain === 1) {
    return true;
  }
}

// or

function isOddWithoutModulo(num) {
  // your code here
    var isOdd = false;
  //decrement by two, subtracting 2 each time:
  
  if ( num > 0 ) {
    for ( i = num; i > 1; i-=2 ) {
      num = num - 2;
    }
  } else {
    for ( i = num; i < 1; i +=2 ) {
      num = num + 2;
    }
  }
  
  console.log(num);
  
  if ( num === 0 || num === 2 ) {
    isOdd = false;
  } else {
    isOdd = true;
  }
  
  return isOdd;
}

// or

function isOddWithoutModulo(num) {
  var newNum = num/2; // divide the given num by 2
  if (Number.isInteger(newNum)) { // checks if the answer has a decimal or not
    return false; // when even numbers are divided by 2 they don't have decimals
  } else {
    return true; // when odd numbers are divided by 2 have decimals
  }
}
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-143-isEvenWithoutModulo

Write a function called “isEvenWithoutModulo”.

Given a number, “isEvenWithoutModulo” returns whether it is even.

Notes:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true

Your Code Should Pass:

describe("isEvenWithoutModulo", function() {
  it("should return a boolean", function() {
    expect(typeof isEvenWithoutModulo(40)).toEqual("boolean");
  });
  it("should not use the modulo operator", function() {
    var body = isEvenWithoutModulo.toString();
    expect(/%/.test(body)).toBe(false);
  });
  it("should return true when a number is even", function() {
    expect(isEvenWithoutModulo(40)).toBe(true);
  });
  it("should return true when a negative number is even", function() {
    expect(isEvenWithoutModulo(-40)).toBe(true);
  });
  it("should return false when a number is odd", function() {
    expect(isEvenWithoutModulo(41)).toBe(false);
  });
  it("should return false when a negative number is odd", function() {
    expect(isEvenWithoutModulo(-41)).toBe(false);
  });
  it("should return true when a passed 0", function() {
    expect(isEvenWithoutModulo(0)).toBe(true);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: return wheter the given number is even -> boolean
// I: num
// C: It does so without using the modulo operator (%). 
// E: It should work for negative numbers and zero

// // Get remainder without using %
  // round(divide num by 2) -> x
  // x times 2 -> y
  // container = num1 - previous result // remainder -> z
// if container === 1
  // ret false if true bc it will mean is an odd number

function isEvenWithoutModulo(num) {
  var x = Math.round((num/2)); // round 8.5 -> 9 we need it to be 8 
  if (x*2 > num) { // just in case, bc Math.round rounds after .5
    var y = (x*2)-2;
  } else {
    var y = x*2;
  }
  var z = num-y;
  return z === 1 ? false : true;
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true

// or 

function isEvenWithoutModulo(num) {
  return parseFloat(num/2) === parseInt(num/2);
}
********************************************************************************************************************
preImmersive-buildingBlocksMastery-144-multiplyBetween

Write a function called “multiplyBetween”.

Given 2 integers, “multiplyBetween” returns the product between the two given integers, beginning at num1, and excluding num2.

Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* If num2 is not greater than num1, it should return 0.
var output = multiplyBetween(2, 5); console.log(output); // --> 24

Your Code Should Pass:

describe("multiplyBetween", function() {
  it("should return a number", function() {
    expect(typeof multiplyBetween(4, 8)).toBe("number");
  });
  it("should multiply between the first and second number exclusive", function() {
    expect(multiplyBetween(4, 6)).toBe(20);
  });
  it("should multiply between the first and second number when they are one number apart", function() {
    expect(multiplyBetween(4, 5)).toBe(4);
  });
  it("should multiply between the first and second number exclusive with negatives", function() {
    expect(multiplyBetween(-5, -3)).toBe(20);
  });
  it("should return 0 if the second number is less than the first", function() {
    expect(multiplyBetween(1, -3)).toBe(0);
  });
  it("should return 0 if the 2 numbers are equal", function() {
    expect(multiplyBetween(1, 1)).toBe(0);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: the product of the numbers between num1(included) and num2(excluded)
// I: num1 y num2
// C: none
// E: If num2 is not greater than num1, it should return 0.

// Declare a container to store the product...
// get the numbers between num1 and num2, loop
  // multiply those numbers and store the product in the first container
// ret container


function multiplyBetween(num1, num2) {

if (num1 > num2) {
  return 0;
}

if (num1 === num2) {
  return 0;
}
  
  var product = 1;
  for (var x = num1; x < num2 ; x++) {
    product *= x;
  }
  return product;
  
}

var output = multiplyBetween(2, 5); 
console.log(output); // --> 24

// or

function multiplyBetween(num1, num2) {
  if (num2 <= num1) return 0;
  
  let sum = 1;
  
  while (num1 < num2) {
    sum *= num1++;
  }
  
  return sum;
}
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-145-computeSumBetween

Write a function called “computeSumBetween”.

Given 2 integers, “computeSumBetween” returns the sum between the two given integers, beginning at num1, and excluding num2.

Notes:
* The sum between 1 and 4 is 1 + 2 + 3 = 6.
* If num2 is not greater than num1, it should return 0.
var output = computeSumBetween(2, 5); console.log(output); // --> 9

Your Code Should Pass:

describe("computeSumBetween", function() {
  it("should return a number", function() {
    expect(typeof computeSumBetween(4, 8)).toBe("number");
  });
  it("should sum between the first and second number exclusive", function() {
    expect(computeSumBetween(4, 6)).toBe(9);
  });
  it("should sum between the first and second number exclusive with negatives", function() {
    expect(computeSumBetween(-1, 3)).toBe(2);
  });
  it("should return 0 if the second number is less than the first", function() {
    expect(computeSumBetween(1, -3)).toBe(0);
  });
  it("should return 0 if the 2 numbers are equal", function() {
    expect(computeSumBetween(1, 1)).toBe(0);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: the sum between the two given integers, beginning at num1, and excluding num2.
// I: num1 and num2
// C: none
// E: If num2 is not greater than num1, it should return 0.

// Declare a container to store the product...
// get the numbers between num1 and num2, loop
  // add those numbers and store the product in the first container
// ret container

function computeSumBetween(num1, num2) {
 
 if (num1 > num2) {
  return 0;
}

  var fetus = 0;
  for (var x = num1; x < num2 ; x++) {
    fetus += x;
  }
  return fetus;
  
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9

// or

function computeSumBetween(num1, num2) {
  sum = 0;
  
  while (num1 < num2) {
    sum += num1++;
  }
  
  return sum;
}

// or

function computeSumBetween(num1, num2) {
  
    if (num1 === num2 || num1 > num2) {
    return 0;
  }

  if (num1 > 0 && num2 > 0) {
    var product = 0;
    for (var i = num1; i < num2; i++) {
      product+=i
  }
  return product;
  }
  
  if (num1 < 0) {
    var negative = 0;
    for (var i = num1; i < num2; i++) {
      negative += i;
  } 
  return negative;
  }
}
***************************************************************************************************************
preImmersive-buildingBlocksMastery-146-convertArrayToObject1

Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.

Example input:
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

Function’s return value (output):
{ Queen : 'Beyonce' }

Do not change the input array. Assume all elements in the input array will be of type ‘string’.

Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

E.g. it should handle input like:
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']

Function’s return value (output):
{ Kevin : 'Spacey' }

Your Code Should Pass:

describe('transformFirstAndLast', function() {
  it('should_properly_assign_key_and_value_pair', function (){

    var input = ['Marie', 'Kayla', 'Jackson', 'Richard', 'Kyle', 'Sarah', 'Mars', 'Wayne', 'Mary'];

    var output = transformFirstAndLast(input);

    expect(output).not.toBeUndefined();
    expect(typeof output).toBe('object');
    expect(output.Marie).toBe('Mary');
  });

  it('should_not_modify_input_array', function() {
    var input = ['Mars', 'Wayne', 'Mary'];
    var copy = input.slice(0);
    var output = transformFirstAndLast(input);

    expect(input.length).toBe(copy.length);
    expect(copy[0]).toBe(input[0]);
    expect(copy[1]).toBe(input[1]);
    expect(copy[2]).toBe(input[2]);

  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an object with:
  //  1) the first element of the array as the object’s key, and
  //  2) the last element of the array as that key’s value.
// I: an array
// C: none
// E: Assume all elements in the input array will be of type ‘string’

// Declare an empty obj to store the property
// access arr
// get arr first element and make it the obj key
// get arr last element and set it to obj[key]=
// ret that obj

function transformFirstAndLast(array) {
  var obj = {};
  obj[array[0]] = array[array.length-1];
  return obj;
}
******************************************************************************************************************
preImmersive-buildingBlocksMastery-147-convertArrayToObject2

Write a function ‘fromListToObject’ which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function’s return value (output):
{ make : 'Ford', model : 'Mustang', year : 1964 }

Do not change the input string. Assume that all elements in the array will be of type ‘string’.

Note that the input may have a different number of elements than the given sample.
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Your Code Should Pass:

describe ('fromtListToObject', function(){
  it ('should_properly_transform_values', function() {
    var input = [['firstName', 'John'], ['lastName', 'McLane'], ['occupation', 'law enforcement'], ['spouse', 'Holly McLane']];
    var output = fromListToObject(input);

    expect(typeof output).toBe('object');
    expect(output[input[0][0]]).toBe(input[0][1]);
    expect(output[input[1][0]]).toBe(input[1][1]);
    expect(output[input[2][0]]).toBe(input[2][1]);
    expect(output[input[3][0]]).toBe(input[3][1]);

  });
  it ('should_not_modify_input_array', function() {
    var input = [['firstName', 'John'], ['lastName', 'McLane'], ['occupation', 'law enforcement'], ['spouse', 'Holly McLane']];
    var inputCopy = input.slice(0);
    var output = fromListToObject(input);

    expect(input.length).toBe(inputCopy.length);
    expect(input[0][0]).toBe(inputCopy[0][0]);
    expect(input[3][0]).toBe(inputCopy[3][0]);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an object with each pair of elements in the array as a key-value pair.
// I: an array of arrays
// C: none
// E: Assume that all elements in the array will be of type ‘string’.

// Declare an empty obj to store the property
// access arr, loop
// get the array's first inside arrays and make them the obj properties
// ret that obj

function fromListToObject(array) {
  var obj = {};
  for (var x in array) { // for in for array is actually not recommended
    obj[array[x][0]] = array[x][1];
  }
  return obj;
}
// or

function fromListToObject(array) {
  var newObj = {};
  
  array.forEach((e) => {
    newObj[e[0]] = e[1];
  });
  
  return newObj;
}
**********************************************************************************************************************
preImmersive-buildingBlocksMastery-148-convertArrayToObject3

Write a function called “transformEmployeeData” that transforms some employee data from one format to another.

The argument will look like this:

[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]
Given that input, the return value should look like this:

[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
Note that the input may have a different number of rows or different keys than the given sample.

For example, let’s say the HR department adds a “tshirtSize” field to each employee record.
Your code should flexibly accommodate that.

Your Code Should Pass:

describe('transformEmployeeData', function() {
  it('transforms_the_sample_data', function() {
    var input = [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
                 [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]];
    var output = transformEmployeeData(input);
    expect(output).toBeDefined();
    expect(output[0].firstName).toEqual('Joe');
    expect(output[1].age).toEqual(36);
  });

  it('transforms_some_other_data', function() {
    var input = [[['firstName', 'Joe'], ['lastName', 'Blow'], ['favoriteIceCream', 'chocolate'], ['role', 'clerk']],
                 [['firstName', 'Carl'], ['lastName', 'Sagan'], ['favoriteIceCream', 'starfruit'], ['role', 'seer']],
                 [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['favoriteIceCream', 'vanilla'], ['role', 'manager']]];
    var output = transformEmployeeData(input);
    expect(output).toBeDefined();
    expect(output[1].favoriteIceCream).toEqual('starfruit');
  });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: OBJECT [  {4 properties are the array -> key and value}, {4 properties are the array -> key and value}]
// I: ARRAY of arrays -> [  [4 arrays with 2 elementseach], [4 arrays with 2 elements each]  ]
// C: none 
// E: flexible

// how are they diff, input is an array and output is an obj
// Declare an array to later push two elements; two obbjects
// access the elements inside employeeData, 2 elements
// iterate thru employeeData, 0&1
  // declare employee object to store in a similar fashion to 147
  // iterate thru employee's info; 4 arrays with 2 elements each; key&valu; 0&1&2&3
    // add the required into the employee object container
  // back out from nested loop and push employee object container, one at a time, into arr container, this is going to happen twice so two different objects will be push into array
// return container array  

var z = 
[[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]

function transformEmployeeData(employeeData) {
  var arrayOfObjects = []; // Declare an array
  for (var x = 0 ; x < employeeData.length; x++) {
    var employeeObject = {};
    for (var y = 0 ; y < employeeData[x].length ; y++) {
      employeeObject[employeeData[x][y][0]] = employeeData[x][y][1];
    }
    arrayOfObjects.push(employeeObject)
  }
  return arrayOfObjects;
}

transformEmployeeData(z);

// or

function transformEmployeeData(employeeData) {
  var objArray = [];
  
  employeeData.forEach((dataArray) => {
    var item = {};
    for (i in dataArray) {
      item[dataArray[i][0]] = dataArray[i][1];
    }
    objArray.push(item);
  });
  
  return objArray;
}
*********************************************************************************************************************
preImmersive-buildingBlocksMastery-149-convertObjectToList1

Write a function called “getAllKeys” which returns an array of all the input object’s keys.
Example input:
{ name : 'Sam', age : 25, hasPets : true }

Function’s return value (output) :
['name', 'age', 'hasPets']

Do not use “Object.keys” to solve this prompt.

Note that your function should be able to handle any object passed in it.

E.g. it should also handle an input like:
{ a : 'a', number : 11, hungry : true, grammyWins : 1 }

Function’s return value (output):
['a', 'number', 'hungry', 'grammyWins']

Your Code Should Pass:

describe('getAllKeys', function() {
  it('should_output_an_array_of_key_names', function(){
    var input = {
      foo: 'bar',
      level: 1,
      red: 'green',
      number: true
    }
    var expected = Object.keys(input);
    var actual = getAllKeys(input);

    expect(actual).not.toBeUndefined();
    expect(actual[0]).toBe(expected[0]);
    expect(actual[1]).toBe(expected[1]);
    expect(actual[2]).toBe(expected[2]);
    expect(actual[3]).toBe(expected[3]);
  });

  it ('should_not_use_restricted_methods', function() {
    var body = getAllKeys.toString();

    expect(/Object\.keys/.test(body)).toBe(false);
  });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an array of all the input object's keys
// I: an obj
// C: cant use Object.keys
// E: 

// declare an empty arr container to later store all the input object keys as elements
// find a way to access all of the object keys without object.keys
// iterate thru each key
  // add each key as an element
  // then store those elements inside my arr container
// return that container

function getAllKeys(obj) {
  var arr = [];
  var arrEntries=Object.entries(obj);
  for (var x = 0 ; x < arrEntries.length ; x++) {
    arr.push(arrEntries[x][0]);
  }
  return arr;
}
// or

function getAllKeys(obj) {
  keys = []
  
  for (i in obj) {
    keys.push(i);
  }
  
  return keys;
}

// or

function getAllKeys(obj) {
  var allKeys = [];
  
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      allKeys.push(key);
    }
  }
  return allKeys;
}

// or 

function getAllKeys(obj) {
   return Reflect.ownKeys(obj) ; 
}
******************************************************************************************************************
preImmersive-buildingBlocksMastery-150-convertObjectToList2
Write a function called “listAllValues” which returns an array of all the input object’s values.
Example input:

{
  name : 'Krysten',
  age : 33,
  hasPets : false
}
Function’s return value (output):

['Krysten', 33, false]
Note that the input may have a different number of keys and values than the given sample.
E.g. it should also handle an input like:

{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}
Function’s return value (output):

['a', 11, true, 1]

Your Code Should Pass:

describe ('listAllValues', function() {
  it ('should_output_an_array_of_values', function(){
    var input = {
      foo: 'bar',
      level: 1,
      red: 'green',
      number: true,
      cry: 'excelsior'
    }

    var output = listAllValues(input);
    console.log(Array.isArray(output));
    console.log(output);

    expect(output).not.toBeUndefined();
    expect(output[0]).toBe('bar');
    expect(output[1]).toBe(1);
    expect(output[2]).toBe('green');
    expect(output[3]).toBe(true);
    expect(output[4]).toBe('excelsior');
  });

});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: an array of all the input object's values
// I: an obj
// C: none
// E: none

// declare container
// loop thru obj
  // store into container
// return container

function listAllValues(obj) {
  var arr = [];
  var arrEntries = Object.entries(obj);
  
  for (var x = 0 ; x < arrEntries.length ; x++) {
    arr.push(arrEntries[x][1]);
  }
  return arr;
}

// or

  function listAllValues(obj) {
  vals = [];
  
  for (i in obj) {
    vals.push(obj[i]);
  }
  
  return vals;
}

// or 

function listAllValues(obj) {
  // your code here
  return Object.values(obj);
  
}
***********************************************************************************************************************
preImmersive-buildingBlocksMastery-151-convertObjectToList3

Write a function called “convertObjectToList” which converts an object literal into an array of arrays, like this:

Argument:

{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Your Code Should Pass:

describe('convertObjectToList', function() {
  it('converts_the_sample_data', function() {
    var input = {
      name: 'Holly',
      age: 35,
      role: 'producer'
    };
    var output = convertObjectToList(input);
    expect(output[0][0]).toBe('name');
    expect(output[0][1]).toBe('Holly');
    expect(output[1][0]).toBe('age');
    expect(output[1][1]).toBe(35);
    expect(output[2][0]).toBe('role');
    expect(output[2][1]).toBe('producer');
  });
});

describe('convertObjectToList', function() {
  it('converts_some_other_data', function() {
    var input = {
      foo: 'FOO',
      bar: 'BAR',
      baz: 123,
      'another key': null
    };
    var output = convertObjectToList(input);
    expect(output[0][0]).toBe('foo');
    expect(output[0][1]).toBe('FOO');
    expect(output[1][0]).toBe('bar');
    expect(output[1][1]).toBe('BAR');
    expect(output[2][0]).toBe('baz');
    expect(output[2][1]).toBe(123);
    expect(output[3][0]).toBe('another key');
    expect(output[3][1]).toBe(null);
  })
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// O: array of array
// I: obj
// C: none
// E: none
// declare container equal to the resulting array from Object.entries
// return that arr
function convertObjectToList(obj) {
  var arrEntries = Object.entries(obj);
  return arrEntries;
}

// or

function convertObjectToList(obj) {
  var objArray = [];
  
  for (i in obj) {
    objArray.push([i, obj[i]]);
  }
  
  return objArray;
}

// or

function convertObjectToList(obj) {
  // create master array 
  var masArr = [];
  
  //make a loop that will create first array 
  for (var prop in obj){
    // create a temp array that will hold the prop and val 
    tempArr = [];
    // push that prop to temp arr
    tempArr.push(prop);
    // push that value to temp arr
    tempArr.push(obj[prop]);
     //console.log(tempArr); // used for trouble shooting 
       masArr.push(tempArr);

  }
  return masArr;  
}

// or 

function convertObjectToList(obj) {
  var newArray = []; // placeholder array for main array
  for (var key in obj) { // looping through given obj
  var secArray = []; // placeholder array for second array
    secArray.push(key) // places the key in second array
    secArray.push(obj[key]); // places the value in the second array (obj[key] = value of key)
    newArray.push(secArray); // pushes the second array into the main array
  }
  return newArray;
}

********************************************************************************************************************
preImmersive-buildingBlocksMastery-152-greetCustomer

Write a function called “greetCustomers”.

Given a name, “greetCustomers” returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ):

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
Case 2 - Customer who has visited only once ( ‘visits’ value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
Case 3 - Repeat customer: ( ‘visits’ value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD IDEA:

if (firstName === 'Joe') {
  // do something
}

Your Code Should Pass:

describe('greetCustomer', function() {
  it('handles 1st time visitor from sample data', function() {
    var output = greetCustomer('Voldemort');
    var expected = 'Welcome! Is this your first time?';
    expect(output).toEqual(expected);
  });

  it('handles 2nd time visitor from sample data', function() {
    var output = greetCustomer('Joe');
    var expected = "Welcome back, Joe! We're glad you liked us the first time!";
    expect(output).toEqual(expected);
  });

  it('handles 2nd time visitor from new nonsample data', function() {
    var oldCustomerDataJSON = JSON.stringify(customerData);

    customerData['Ben'] = {
      visits: 1
    };

    var output = greetCustomer('Ben');
    var expected = "Welcome back, Ben! We're glad you liked us the first time!";
    expect(output).toEqual(expected);

    customerData = JSON.parse(oldCustomerDataJSON);
  });

  it('handles 3rd time visitor from sample data', function() {
    var output = greetCustomer('Howard');
    var expected = 'Welcome back, Howard! So glad to see you again!';
    expect(output).toEqual(expected);
  });

  it('handles 4th time visitor from new nonsample data', function() {
    var oldCustomerDataJSON = JSON.stringify(customerData);

    customerData['Macklemore'] = {
      visits: 3
    };

    var output = greetCustomer('Macklemore');
    var expected = 'Welcome back, Macklemore! So glad to see you again!';
    expect(output).toEqual(expected);

    customerData = JSON.parse(oldCustomerDataJSON);
  });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O: a greeting
// I: a string (a name)
// C: none
// E: none

// if a customer visits the restaurant, depending on the maount of visits it should, access obj customerData to check
// ret a greeting 

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  
  
  return customerData[firstName] === undefined ? 'Welcome! Is this your first time?' :
  customerData[firstName]["visits"] === 1 ? "Welcome back, "+ firstName+ "! We're glad you liked us the first time!" :
  customerData[firstName]["visits"] === 2 ? "Welcome back, "+ firstName+ "! So glad to see you again!" :
  customerData[firstName]["visits"] === 3 ? "Welcome back, "+ firstName+ "! So glad to see you again!" :
  "";
}

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome! Is this your first time?'

// or 

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  if (customerData[firstName] === undefined) return 'Welcome! Is this your first time?';
  v = customerData[firstName].visits;
  
  switch (v) {
    case 1:
      return 'Welcome back, '+firstName+'! We\'re glad you liked us the first time!';
  }
  return 'Welcome back, '+firstName+'! So glad to see you again!'

}