const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver;

suite('Unit Tests', () => {
    suite('validate', () => {
        test('Logic handles a valid puzzle string of 81 characters', (done) => {
            assert.equal(solver.validate('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'), false)
            done()
        })
        
        test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', (done) => {
            assert.equal(solver.validate('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.w'), 'Invalid characters in puzzle')
            done()
        })
        
        test('Logic handles a puzzle string that is not 81 characters in length', (done) => {
            assert.equal(solver.validate('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.'), 'Expected puzzle to be 81 characters long')
            done()
        })
    })

    suite('checkRowPlacement', () => {
        test('Logic handles a valid row placement', (done) => {
            assert.equal(solver.checkRowPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 'A', '1', '7'), false)
            done()
        })
        
        test('Logic handles an invalid row placement', (done) => {
            assert.equal(solver.checkRowPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 'A', '1', '5'), true)
            done()
        })
    })

    suite('checkColPlacement', () => {
        test('Logic handles a valid column placement', (done) => {
            assert.equal(solver.checkColPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 'A', '1', '7'), false)
            done()
        })
        
        test('Logic handles an invalid column placement', (done) => {
            assert.equal(solver.checkColPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 'A', '1', '5'), true)
            done()
        })
    })

    suite('checkRegionPlacement', () => {
        test('Logic handles a valid region (3x3 grid) placement', (done) => {
            assert.equal(solver.checkRegionPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 'A', '1', '7'), false)
            done()
        })
        
        test('Logic handles an invalid region (3x3 grid) placement', (done) => {
            assert.equal(solver.checkRegionPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..', 'A', '1', '5'), true)
            done()
        })
    })

    suite('solve', () => {
        test('Valid puzzle strings pass the solver', (done) => {
            assert.equal(solver.solve('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'), '135762984946381257728459613694517832812936745357824196473298561581673429269145378')
            done()
        })

        test('Invalid puzzle strings fail the solver', (done) => {
            assert.equal(solver.solve('1.5..2.84..63.12.7.2..5..5..9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.377'), false)
            done()
        })

        test('Solver returns the expected solution for an incomplete puzzle', (done) => {
            assert.equal(solver.solve('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'), '135762984946381257728459613694517832812936745357824196473298561581673429269145378')
            done()
        })
    })
});
