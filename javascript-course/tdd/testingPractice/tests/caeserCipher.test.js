const ceaserCipher = require('./caeserCipher');

test('ceaserCipher', () => {
    expect(ceaserCipher('hello')).toBe('URYYB');
});