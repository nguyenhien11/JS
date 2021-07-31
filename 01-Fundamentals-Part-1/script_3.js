const scoreDophin1 = 97;
const scoreDophin2 = 112;
const scoreDophin3 = 101;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;

avgscoreDophin = (scoreDophin1 + scoreDophin2 + scoreDophin3) / 3;

avgscoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

console.log(avgscoreDophin, avgscoreKoalas);
console.log(`avgscoreDophin :  (${avgscoreDophin})  avgscoreKoalas:  + (${avgscoreKoalas})`);

if (avgscoreDophin > avgscoreKoalas && avgscoreDophin >= 100) {
  console.log('Dophin win');
} else if (avgscoreDophin < avgscoreKoalas & avgscoreKoalas >= 100) {
  console.log('Koalas win');
} else if (avgscoreKoalas === avgscoreKoalas && avgscoreKoalas >= 100) {
  console.log('Dophin and Koalas win');
}
else {
  console.log('no team win');
}