function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return n * (n+1) / 2;
}

addUpTo1(6);

addUpTo2(6);

exports.addUpTo1 = addUpTo1;
exports.addUpTo2 = addUpTo2;
