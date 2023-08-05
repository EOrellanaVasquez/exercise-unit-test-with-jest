test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test ("One dollar should be 127.9 Yen", function (){
    const { fromDollartoYen } = require('./app.js')
    const yen = fromDollartoYen(8)
    const expected = 8*127.9;
});

test ("One Yen should be 0.8 Gbp", function(){
    const { fromYentoPound } = require('./app.js')
    const gbp = fromYentoPound(32)
    const expect = 32*0.8
});




test('adds 14 + 9 to equal 23', () => {
  const { sum } = require('./app.js');  
  let total = sum (14,9);
    expect(total).toBe(23);
});