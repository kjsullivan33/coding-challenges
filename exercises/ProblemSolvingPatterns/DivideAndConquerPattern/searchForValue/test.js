const search = require('./index');

test('The function search exists', () => {
  expect(search).toBeDefined();
});

test('The result of search equals', () => {
  expect(search([1,2,3,4,5,6],4)).toEqual(3);
});

// test('The result of search equals', () => {
//   expect(search([1, 2, 3, 4, 5, 6], 6)).toEqual(5);
// });

test('The result of search equals', () => {
  expect(search([1, 2, 3, 4, 5, 6], 11)).toEqual(-1);
});