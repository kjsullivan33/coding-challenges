const createArrayFromList = require('./index');
const createList = require('../createList/index');

const list = createList([40,15,20,10]);

test('The function createArrayFromList exists', () => {
  expect(createArrayFromList).toBeDefined();
});

test('The function createArrayFromList should equal', () => {
  expect(createArrayFromList(list)).toEqual([40,15,20,10]);
});