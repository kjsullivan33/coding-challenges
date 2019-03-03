const countdown = require('./index');

test('The function countdown exists', () => {
  expect(countdown).toBeDefined();
});

test('The result of countdown should equal', () => {
  expect(countdown(5)).toEqual('5,4,3,2,1,All done!');
});

test('The result of countdown should equal', () => {
  expect(countdown(0)).toEqual('All done!');
});

test('The result of countdown should equal', () => {
  expect(countdown(7)).toEqual('7,6,5,4,3,2,1,All done!');
});