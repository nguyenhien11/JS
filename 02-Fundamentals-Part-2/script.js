const callAverage = (values1, values2, values3) => avg = (values1 + values2 + values3) / 3;

function checkWinner(avg1, avg2) {
  let showResult;
  if (avg1 >= (2 * avg2)) {
    console.log(`Dolphin win ( ${avg1} , ${avg2})`);
  } else if (avg2 >= (2 * avg1)) {
    console.log(`Koalas win ( ${avg2} , ${avg1})`);
  } else {
    console.log(`both not win ( ${avg1} , ${avg2})`);
  }
}
let avgDolphins = callAverage(44, 23, 71);
let avgKoalas = callAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);

avgDolphins = callAverage(85, 54, 41);
avgKoalas = callAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);