function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    let unitIndex = input.match('[a-zA-Z]');
    let value;

    if (unitIndex == null) {
      value = input;
    } else {
      unitIndex = unitIndex.index;
      value = input.slice(0, unitIndex).toLowerCase();
    }

    if (value !== undefined) {
      if (value === '') {
        result = 1;
      } else if (value.split('/').length - 1 > 1) {
        result = 'invalid number';
      } else if (value !== undefined) {
        result = eval(value);
      }
    } else {
      result = 1;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;

    let unitIndex = input.match('[a-zA-Z]');

    if (unitIndex == null) {
      result = 'invalid unit';
      return result;
    }

    unitIndex = unitIndex.index;

    const unit = input.slice(unitIndex).toLowerCase();
    
    if (unit === 'gal') {
      result = 'gal';
    } else if (unit === 'l') {
      result = 'L';
    } else if (unit === 'mi') {
      result = 'mi';
    } else if (unit === 'km') {
      result = 'km';
    } else if (unit === 'lbs') {
      result = 'lbs';
    } else if (unit === 'kg') {
      result = 'kg';
    } else {
      result = 'invalid unit';
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    const units = {
    'gal': 'L', 
    'L': 'gal', 
    'lbs': 'kg', 
    'kg': 'lbs', 
    'mi': 'km', 
    'km': 'mi',
  }

  result = units[initUnit];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    const spellOut = {
      'gal': 'gallons',
      'L': 'liters',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers',
    }

    result = spellOut[unit]
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit === 'gal') {
      result = initNum * galToL;
    } else if (initUnit === 'L') {
      result = initNum / galToL;
    } else if (initUnit === 'mi') {
      result = initNum * miToKm;
    } else if (initUnit === 'km') {
      result = initNum / miToKm;
    } else if (initUnit === 'lbs') {
      result = initNum * lbsToKg;
    } else if (initUnit === 'kg') {
      result = initNum / lbsToKg;
    }

    result = parseFloat(result.toFixed(5))
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
