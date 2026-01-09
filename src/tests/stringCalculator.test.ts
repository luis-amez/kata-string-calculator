import { stringCalculator } from '../core/stringCalculator';

describe('stringCalculator', () => {
  it('should return 0 given an empty string', () => {
    const result = stringCalculator('');

    expect(result).toBe(0);
  });

  it('should return 0 given null', () => {
    const result = stringCalculator(null);

    expect(result).toBe(0);
  });

  it('should return a number given a string containing a single number', () => {
    const result = stringCalculator('123');

    expect(result).toBe(123);
  });

  it('should return the sum of the numbers given a string containing several numbers separated by commas', () => {
    const result = stringCalculator('1,2,3');

    expect(result).toBe(6);
  });

  it('should ignore no numeric elements', () => {
    const result = stringCalculator('1,b,3');

    expect(result).toBe(4);
  });

  it('should return 0 given only no numeric elements', () => {
    const result = stringCalculator('a,b');

    expect(result).toBe(0);
  });

  it('should accept custom separators', () => {
    const result = stringCalculator('//-/1-2-3');

    expect(result).toBe(6);
  });

  it('should ignore commas if custom separators are provided', () => {
    const result = stringCalculator('//-/1,2');

    expect(result).toBe(0);
  });
});
