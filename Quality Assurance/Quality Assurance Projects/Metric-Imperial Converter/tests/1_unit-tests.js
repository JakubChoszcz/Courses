const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('convertHandler should correctly read a whole number input.', (done) => {
        assert.equal(convertHandler.getNum('24kg'), 24)
        done();
    })

    test('convertHandler should correctly read a decimal number input.', (done) => {
        assert.equal(convertHandler.getNum('2.4kg'), 2.4)
        done();
    })

    test('convertHandler should correctly read a fractional input.', (done) => {
        assert.equal(convertHandler.getNum('2/4kg'), 0.5)
        done();
    })

    test('convertHandler should correctly read a fractional input with a decimal.', (done) => {
        assert.equal(convertHandler.getNum('2.4/2kg'), 1.2)
        done();
    })

    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', (done) => {
        assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number')
        done();
    })

    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', (done) => {
        assert.equal(convertHandler.getNum('kg'), 1)
        done();
    })

    test('convertHandler should correctly read each valid input unit.', (done) => {
        assert.equal(convertHandler.getUnit('gal'), 'gal')
        assert.equal(convertHandler.getUnit('L'), 'L')
        assert.equal(convertHandler.getUnit('mi'), 'mi')
        assert.equal(convertHandler.getUnit('km'), 'km')
        assert.equal(convertHandler.getUnit('lbs'), 'lbs')
        assert.equal(convertHandler.getUnit('kg'), 'kg')
        done();
    })

    test('convertHandler should correctly return an error for an invalid input unit.', (done) => {
        assert.equal(convertHandler.getUnit('kgg'), 'invalid unit')
        done();
    })

    test('convertHandler should return the correct return unit for each valid input unit.', (done) => {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L')
        assert.equal(convertHandler.getReturnUnit('L'), 'gal')
        assert.equal(convertHandler.getReturnUnit('mi'), 'km')
        assert.equal(convertHandler.getReturnUnit('km'), 'mi')
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg')
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
        done();
    })

    test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', (done) => {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons')
        assert.equal(convertHandler.spellOutUnit('L'), 'liters')
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds')
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms')
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles')
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers')
        done();
    })

    test('convertHandler should correctly convert gal to L.', (done) => {
        assert.equal(convertHandler.convert(1, 'gal'), 3.78541)
        done();
    })

    test('convertHandler should correctly convert L to gal.', (done) => {
        assert.equal(convertHandler.convert(1, 'L'), 0.26417)
        done();
    })

    test('convertHandler should correctly convert mi to km.', (done) => {
        assert.equal(convertHandler.convert(1, 'mi'), 1.60934)
        done();
    })

    test('convertHandler should correctly convert km to mi.', (done) => {
        assert.equal(convertHandler.convert(1, 'km'), 0.62137)
        done();
    })

    test('convertHandler should correctly convert lbs to kg.', (done) => {
        assert.equal(convertHandler.convert(1, 'lbs'), 0.45359)
        done();
    })

    test('convertHandler should correctly convert kg to lbs.', (done) => {
        assert.equal(convertHandler.convert(1, 'kg'), 2.20462)
        done();
    })
});