

const countdown = (num) => {
  if (num <=0) {
    return 'All done!';
  }
  return `${num},${countdown(num-1)}`;
}

console.log(countdown(5));

module.exports = countdown;