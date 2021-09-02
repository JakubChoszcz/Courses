'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const { puzzle, coordinate, value } = req.body;
      let valid = false;
      const conflict = [];

      // check if props are not missing
      if ( !puzzle || 
        !coordinate || 
        !value
      ) return res.json({ error: "Required field(s) missing" });

      // validate puzzle format
      const validate = solver.validate(puzzle);
      if (validate) return res.json({ error: validate });

      // valid coordinate format
      if (coordinate.length !== 2) return res.json({ error: "Invalid coordinate" });
      if (!coordinate[0].match(/[a-iA-I]/) || !coordinate[1].match(/[1-9]/)) return res.json({ error: "Invalid coordinate" });

      // validate value
      if (!value.match(/[1-9]{1,1}$/)) return res.json({ error: 'Invalid value' });

      // validate row, col, region placements
      if (solver.checkRowPlacement(puzzle, coordinate[0], coordinate[1], value)) conflict.push("row");
      if (solver.checkColPlacement(puzzle, coordinate[0], coordinate[1], value)) conflict.push("column");
      if (solver.checkRegionPlacement(puzzle, coordinate[0], coordinate[1], value)) conflict.push("region");
      if (conflict.length) return res.json({ valid, conflict });

      res.json({ valid: true });
    });
    
    app.route('/api/solve')
    .post((req, res) => {
      let { puzzle } = req.body;
      let solution;

      const validate = solver.validate(puzzle);
      if (validate) return res.json({ error: validate });

      solution = solver.solve(puzzle);

      if (!solution) return res.json({ error: "Puzzle cannot be solved" });

      res.json({ solution });
    });
};
