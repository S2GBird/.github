const sum = require('../../sum'); // this is two lvls from backend 

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
