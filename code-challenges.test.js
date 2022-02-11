// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Set Up Format:
// describe("", () => {
//   it("", () => {
//     expect().toEqual;
//   });
// });

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentenceNamesCaps", () => {
  it("takes in an array of objects and returns array describing the person with their name capitalized", () => {
    
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];
    expect().toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// RED: undefined

// b) Create the function that makes the test pass.

const sentenceNamesCaps = (array) => {
  let mappedArray = array.map (obj => {
    let personName = obj.name
    let splitName = personName.spli(" ")
    let nameMap = splitName.map(word => {
      let firstLetter = word.charAt(0)
      let capFirstLetter = firstLetter.toUpperCase()
      let combineWord = capFirstLetter * word.slice(1)
      let joinedWord = combinedWord.join(" ")
      return joinedWord
    }
    return `${nameMap} is ${obj.occupation}.`
  }
    return mappedArray
}    

//     '${obj.name\
//     .split(" ")
//     .map(word => word.charAt(0)
//     .toUpperCase() + word
//     .slice(1)
//     .join(" ")} is ${obj.occupation}.

// GREEN

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
    // Expected output: [ 2, 1, -1 ]
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  });
});

// RED: undefined

// b) Create the function that makes the test pass.

// psuedocode:
  // create filter that removes data that is not a number
  // iterate where we filter numbers with a modulo of 3
  // outputs the array of remainders 


const remainders = (arrayOfData) => {
  return arrayOfData.filter(value => typeof value === 'number').map(value => value % 3);
};

// GREEN


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfACube", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125
    expect(sumOfACube(cubeAndSum1)).toEqual(99);
    expect(sumOfACube(cubeAndSum2)).toEqual(1125);
  })
})

// RED: undefined

// b) Create the function that makes the test pass.

// psuedocode:
  // sumOfACube takes in an array of numbers
  // variable number = 0
  // iterate over the array
  // add the cubed number to the return variable
  // return variable

const sumOfACube = (array) => {
  let number = 0
  for(let i = 0; i < array.length; i++) {
    number += array[i]**3
  }
  return number
}

// GREEN

