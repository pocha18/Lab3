/**
 * Comprehensive Unit Tests for Calculator
 * Tests all basic arithmetic operations: addition, subtraction, multiplication, and division
 * Includes edge cases and error handling
 */

const calc = require('../calculator');

describe('Calculator - Addition Tests', () => {
  test('should add two positive numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('should add two negative numbers', () => {
    expect(calc.add(-5, -3)).toBe(-8);
  });

  test('should add positive and negative numbers', () => {
    expect(calc.add(10, -4)).toBe(6);
  });

  test('should add zero to a number', () => {
    expect(calc.add(5, 0)).toBe(5);
  });

  test('should add two zeros', () => {
    expect(calc.add(0, 0)).toBe(0);
  });

  test('should add decimal numbers', () => {
    expect(calc.add(1.5, 2.5)).toBe(4);
  });

  test('should add large numbers', () => {
    expect(calc.add(999999, 1)).toBe(1000000);
  });
});

describe('Calculator - Subtraction Tests', () => {
  test('should subtract two positive numbers', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('should subtract resulting in negative number', () => {
    expect(calc.subtract(5, 10)).toBe(-5);
  });

  test('should subtract two negative numbers', () => {
    expect(calc.subtract(-5, -3)).toBe(-2);
  });

  test('should subtract zero from a number', () => {
    expect(calc.subtract(7, 0)).toBe(7);
  });

  test('should subtract a number from zero', () => {
    expect(calc.subtract(0, 5)).toBe(-5);
  });

  test('should subtract two zeros', () => {
    expect(calc.subtract(0, 0)).toBe(0);
  });

  test('should subtract decimal numbers', () => {
    expect(calc.subtract(5.5, 1.5)).toBe(4);
  });

  test('should subtract negative from positive', () => {
    expect(calc.subtract(10, -5)).toBe(15);
  });
});

describe('Calculator - Multiplication Tests', () => {
  test('should multiply two positive numbers', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('should multiply by zero', () => {
    expect(calc.multiply(5, 0)).toBe(0);
  });

  test('should multiply two negative numbers', () => {
    expect(calc.multiply(-3, -4)).toBe(12);
  });

  test('should multiply positive and negative numbers', () => {
    expect(calc.multiply(6, -2)).toBe(-12);
  });

  test('should multiply by one', () => {
    expect(calc.multiply(42, 1)).toBe(42);
  });

  test('should multiply decimal numbers', () => {
    expect(calc.multiply(2.5, 4)).toBe(10);
  });

  test('should multiply large numbers', () => {
    expect(calc.multiply(1000, 1000)).toBe(1000000);
  });

  test('should multiply very small decimal numbers', () => {
    expect(calc.multiply(0.1, 0.1)).toBeCloseTo(0.01);
  });
});

describe('Calculator - Division Tests', () => {
  test('should divide two positive numbers', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('should divide resulting in decimal', () => {
    expect(calc.divide(7, 2)).toBe(3.5);
  });

  test('should divide two negative numbers', () => {
    expect(calc.divide(-10, -2)).toBe(5);
  });

  test('should divide positive by negative', () => {
    expect(calc.divide(10, -2)).toBe(-5);
  });

  test('should divide zero by a number', () => {
    expect(calc.divide(0, 5)).toBe(0);
  });

  test('should divide a number by one', () => {
    expect(calc.divide(42, 1)).toBe(42);
  });

  test('should divide decimal numbers', () => {
    expect(calc.divide(10.5, 2)).toBeCloseTo(5.25);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => {
      calc.divide(10, 0);
    }).toThrow('Error: Division by zero is not allowed');
  });

  test('should throw error when dividing negative by zero', () => {
    expect(() => {
      calc.divide(-5, 0);
    }).toThrow('Error: Division by zero is not allowed');
  });

  test('should throw error when dividing zero by zero', () => {
    expect(() => {
      calc.divide(0, 0);
    }).toThrow('Error: Division by zero is not allowed');
  });
});

describe('Calculator - Main calculate() Function Tests', () => {
  describe('Basic Operations from Image', () => {
    test('should calculate 2 + 3 = 5 (Addition)', () => {
      expect(calc.calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6 (Subtraction)', () => {
      expect(calc.calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90 (Multiplication)', () => {
      expect(calc.calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4 (Division)', () => {
      expect(calc.calculate(20, '/', 5)).toBe(4);
    });
  });

  describe('calculate() with Various Operations', () => {
    test('should handle addition operator', () => {
      expect(calc.calculate(15, '+', 25)).toBe(40);
    });

    test('should handle subtraction operator', () => {
      expect(calc.calculate(50, '-', 20)).toBe(30);
    });

    test('should handle multiplication operator', () => {
      expect(calc.calculate(12, '*', 3)).toBe(36);
    });

    test('should handle division operator', () => {
      expect(calc.calculate(100, '/', 4)).toBe(25);
    });
  });

  describe('calculate() Error Handling', () => {
    test('should throw error for invalid operator', () => {
      expect(() => {
        calc.calculate(10, '%', 5);
      }).toThrow('Invalid operation: %. Supported operations are: +, -, *, /');
    });

    test('should throw error for unknown operator', () => {
      expect(() => {
        calc.calculate(10, '&', 5);
      }).toThrow('Invalid operation: &. Supported operations are: +, -, *, /');
    });

    test('should throw error for division by zero in calculate()', () => {
      expect(() => {
        calc.calculate(15, '/', 0);
      }).toThrow('Error: Division by zero is not allowed');
    });
  });

  describe('calculate() Edge Cases', () => {
    test('should handle operations with zero', () => {
      expect(calc.calculate(0, '+', 0)).toBe(0);
      expect(calc.calculate(0, '-', 0)).toBe(0);
      expect(calc.calculate(0, '*', 0)).toBe(0);
      expect(calc.calculate(0, '/', 5)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(calc.calculate(-5, '+', 3)).toBe(-2);
      expect(calc.calculate(-5, '-', 3)).toBe(-8);
      expect(calc.calculate(-5, '*', 3)).toBe(-15);
      expect(calc.calculate(-10, '/', 2)).toBe(-5);
    });

    test('should handle decimal numbers', () => {
      expect(calc.calculate(2.5, '+', 1.5)).toBe(4);
      expect(calc.calculate(5.5, '-', 2.5)).toBe(3);
      expect(calc.calculate(2.5, '*', 2)).toBe(5);
      expect(calc.calculate(7.5, '/', 2.5)).toBe(3);
    });

    test('should handle large numbers', () => {
      expect(calc.calculate(1000000, '+', 1)).toBe(1000001);
      expect(calc.calculate(1000000, '-', 1)).toBe(999999);
      expect(calc.calculate(10000, '*', 100)).toBe(1000000);
      expect(calc.calculate(1000000, '/', 1000)).toBe(1000);
    });
  });
});

describe('Calculator - Module Exports', () => {
  test('should export add function', () => {
    expect(typeof calc.add).toBe('function');
  });

  test('should export subtract function', () => {
    expect(typeof calc.subtract).toBe('function');
  });

  test('should export multiply function', () => {
    expect(typeof calc.multiply).toBe('function');
  });

  test('should export divide function', () => {
    expect(typeof calc.divide).toBe('function');
  });

  test('should export calculate function', () => {
    expect(typeof calc.calculate).toBe('function');
  });

  test('should export modulo function', () => {
    expect(typeof calc.modulo).toBe('function');
  });

  test('should export power function', () => {
    expect(typeof calc.power).toBe('function');
  });

  test('should export squareRoot function', () => {
    expect(typeof calc.squareRoot).toBe('function');
  });

  test('should export all eight functions', () => {
    expect(Object.keys(calc).length).toBe(8);
  });
});

describe('Calculator - Modulo Tests', () => {
  test('should calculate modulo with 5 % 2 (from image)', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('should calculate modulo of two positive numbers', () => {
    expect(calc.modulo(10, 3)).toBe(1);
  });

  test('should calculate modulo resulting in zero', () => {
    expect(calc.modulo(20, 5)).toBe(0);
  });

  test('should calculate modulo with odd numbers', () => {
    expect(calc.modulo(7, 2)).toBe(1);
  });

  test('should calculate modulo with negative dividend', () => {
    expect(calc.modulo(-10, 3)).toBe(-1);
  });

  test('should calculate modulo with negative divisor', () => {
    expect(calc.modulo(10, -3)).toBe(1);
  });

  test('should calculate modulo with both negative', () => {
    expect(calc.modulo(-10, -3)).toBe(-1);
  });

  test('should throw error when modulo by zero', () => {
    expect(() => {
      calc.modulo(10, 0);
    }).toThrow('Error: Modulo by zero is not allowed');
  });
});

describe('Calculator - Power (Exponentiation) Tests', () => {
  test('should calculate power with 2 ^ 3 (from image)', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('should calculate positive base with positive exponent', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('should calculate 5 raised to power 2', () => {
    expect(calc.power(5, 2)).toBe(25);
  });

  test('should calculate any number to power 0', () => {
    expect(calc.power(10, 0)).toBe(1);
  });

  test('should calculate number to power 1', () => {
    expect(calc.power(7, 1)).toBe(7);
  });

  test('should calculate negative exponent', () => {
    expect(calc.power(2, -2)).toBe(0.25);
  });

  test('should calculate negative base with even exponent', () => {
    expect(calc.power(-2, 2)).toBe(4);
  });

  test('should calculate negative base with odd exponent', () => {
    expect(calc.power(-2, 3)).toBe(-8);
  });

  test('should calculate fractional exponent', () => {
    expect(calc.power(4, 0.5)).toBe(2);
  });

  test('should handle large exponents', () => {
    expect(calc.power(10, 3)).toBe(1000);
  });
});

describe('Calculator - Square Root Tests', () => {
  test('should calculate square root with √16 (from image)', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('should calculate square root of perfect squares', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('should calculate square root of 25', () => {
    expect(calc.squareRoot(25)).toBe(5);
  });

  test('should calculate square root of 2', () => {
    expect(calc.squareRoot(2)).toBeCloseTo(1.414, 2);
  });

  test('should calculate square root of zero', () => {
    expect(calc.squareRoot(0)).toBe(0);
  });

  test('should calculate square root of one', () => {
    expect(calc.squareRoot(1)).toBe(1);
  });

  test('should calculate square root of decimal numbers', () => {
    expect(calc.squareRoot(2.25)).toBe(1.5);
  });

  test('should calculate square root of large numbers', () => {
    expect(calc.squareRoot(1000000)).toBe(1000);
  });

  test('should throw error when taking square root of negative number', () => {
    expect(() => {
      calc.squareRoot(-4);
    }).toThrow('Error: Cannot calculate square root of a negative number');
  });

  test('should throw error for negative square root with decimal', () => {
    expect(() => {
      calc.squareRoot(-2.5);
    }).toThrow('Error: Cannot calculate square root of a negative number');
  });
});
