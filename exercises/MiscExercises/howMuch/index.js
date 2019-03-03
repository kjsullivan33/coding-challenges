function howmuch(m, n) {
  // your code
  //Zloty is between m and n
  // n could be greater than m, or m could be greater than n
  // money = amount of zlotty
  // money - 9*c = 1
  // money - 7*b = 2
  // 9c = money - 1
  // c = (money-1)/9
  // b = (money-2)/7
  // money = 37
  // (37-1)/9 = 4
  // (37-2)/7 = 5
  let start = 0;
  let max = 0;
  const solutions = [];
  if (m >= n) {
    start = n;
    max = m
  } else {
    start = m;
    max = n;
  }

  for (start; start <= max; start++) {
    console.log(start);
    if ((start - 1) % 9 === 0 && (start - 2) % 7 === 0) {
      console.log(start);
      let money = start;
      let boats = (start - 2) / 7;
      let cars = (start - 1) / 9;
      solutions.push(['M: ' + money + '', 'B: ' + boats + '', 'C: ' + cars + '']);
    }
  }
  console.log(solutions);
  return solutions;
}

howmuch(1,100);