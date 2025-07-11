test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expectedDollars = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One dollar should be 145.10 yen", function() {

    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(15);

    const expectedYen = 15 * 145.10; 
    
     expect(fromDollarToYen(15)).toBe(2176.5);
})

test("One Yen should be 194.98 pounds", function() {
    // Import the function from app.js
    const { fromYentoPound } = require('./app.js');

    const dollars = fromYentoPound(100);

    const expectedPounds = 100 * 194.98; 

     expect(fromYentoPound(100)).toBe(19498); 
})