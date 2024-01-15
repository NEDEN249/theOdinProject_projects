const calc = require('./calculator');

test('add', () => {
    expect(calc.add(1, 2)).toBe(3);
});

test('subtract', () => {
    expect(calc.subtract(2, 1)).toBe(1);
});

test('multiply', () => {
    expect(calc.multiply(2, 2)).toBe(4);
});

test('divide', () => {
    expect(calc.divide(4, 2)).toBe(2);
});