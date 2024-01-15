const capitalise = require('./capitalise');

test('name', () => {
    expect(capitalise('nathan')).toMatch('Nathan');
});