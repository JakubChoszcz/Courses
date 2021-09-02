const rowDictionary = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6,
  'H': 7,
  'I': 8,
}

const placementDictionary = {
  1: 0,
  2: 0,
  3: 0,
  4: 1,
  5: 1,
  6: 1,
  7: 2,
  8: 2,
  9: 2,
  'A': 0,
  'B': 0,
  'C': 0,
  'D': 1,
  'E': 1,
  'F': 1,
  'G': 2,
  'H': 2,
  'I': 2,
}

class SudokuSolver {

  validate(puzzleString) {
    // check if puzzle is not missing
    if (!puzzleString) return "Required field missing";

    // check if puzzle length is equal 81
    if (puzzleString.length !== 81 ) return "Expected puzzle to be 81 characters long";

    // check if puzzle contains only valid characters
    if (!/^[0-9.]+$/.test(puzzleString)) return "Invalid characters in puzzle";

    return false;
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const puzzle = puzzleString.match(/.{1,9}/g);

    if (puzzle[rowDictionary[row.toUpperCase()]].includes(value) && puzzle[rowDictionary[row.toUpperCase()]][column-1] !== value) return true;

    return false;
  }

  checkColPlacement(puzzleString, row, column, value) {
    const colIndex = column - 1 % 9;
    const col = []

    Object.keys(puzzleString).forEach((e, i) => {
      if (i % 9 === colIndex) return col.push(puzzleString[i]);
    })

    if (col.includes(value) && col[rowDictionary[row.toUpperCase()]] !== value) return true;

    return false;
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    const puzzle = puzzleString.match(/.{1,3}/g);
    const placements = [];

    Object.keys(puzzle).forEach((e, i) => {
      if (placements[i % 3] === undefined) {
        placements[i % 3] = puzzle[i];
      } else {
        placements[i % 3] += puzzle[i];
      }
    })

    placements.forEach((e, i) => {
      placements[i] = e.match(/.{1,9}/g);
    });

    if (placements[placementDictionary[column]][placementDictionary[row.toUpperCase()]].match(/.{1,3}/g)[rowDictionary[row.toUpperCase()]][column-1] === value) return false;

    if (placements[placementDictionary[column]][placementDictionary[row.toUpperCase()]].includes(value)) return true;

    return false;
  }

  solve(puzzleString) {
    const _board = puzzleString.match(/.{1,9}/g)

    _board.forEach((e, i) => {
      _board[i] = _board[i].match(/.{1,1}/g);
    })

    sodokoSolver(_board);

    const solution = ([].concat.apply([], _board).join(''));

    if (solution.includes('.')) return false;

    return solution;
    
    function isValid(board, row, col, k) {
        for (let i = 0; i < 9; i++) {
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;
            if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
              return false;
            }
        }
        return true;
    }
    
    function sodokoSolver(data) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (data[i][j] == '.') {
            for (let k = 1; k <= 9; k++) {
              if (isValid(data, i, j, k)) {
                data[i][j] = `${k}`;
              if (sodokoSolver(data)) {
              return true;
              } else {
              data[i][j] = '.';
              }
            }
          }
          return false;
        }
      }
    }
    return true;
    }
  }
}

module.exports = SudokuSolver;

