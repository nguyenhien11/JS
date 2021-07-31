const tip1 = 0.15;
const tip2 = 0.20;


let bill = 430;

if (bill >= 50 && bill <= 300) {
  bill = bill + bill * tip1;
} else {
  bill = bill + (bill * tip2);
}
console.log(`total value: ${bill}`);