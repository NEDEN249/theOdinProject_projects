const reverseString = require('./reverseString');

test('reverseString', () => {
    expect(reverseString('hello')).toMatch('olleh');
});