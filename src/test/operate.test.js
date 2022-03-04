import operate from '../components/logic/operate';
import '@testing-library/jest-dom';

describe('testing operate', () => {
  test('adds 1 + 2 to equal 3', () => {
    const numberOne = 1;
    const numberTwo = 2;
    const operation = '+';
    expect(operate(numberOne, numberTwo, operation)).toBe('3');
  });

  test('multiply 4 + 2 to equal 8', () => {
    const numberOne = 4;
    const numberTwo = 2;
    const operation = 'x';
    expect(operate(numberOne, numberTwo, operation)).toBe('8');
  });

  test('adds 2 - 1 to equal 1', () => {
    const numberOne = 2;
    const numberTwo = 1;
    const operation = '-';
    expect(operate(numberOne, numberTwo, operation)).toBe('1');
  });

  test('adds 6 ÷ 2 to equal 3', () => {
    const numberOne = 6;
    const numberTwo = 2;
    const operation = '÷';
    expect(operate(numberOne, numberTwo, operation)).toBe('3');
  });

  test('adds 6 ÷ 2 to equal 3', () => {
    const numberOne = 6;
    const numberTwo = 2;
    const operation = '÷';
    expect(operate(numberOne, numberTwo, operation)).toBe('3');
  });
});
