let bmiMark, bmiJohn;
let massMark, heightMark;
let massMJohn, heightJohn;

massMark = 72;
heightMark = 1.70;

massMJohn = 92;
heightJohn = 1.95;

let markHigherBMI = false;

let strOutput;

bmiMark = massMark / (heightMark ** 2);

bmiJohn = massMJohn / (heightJohn * heightJohn);

markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
  strOutput = `Mark's BMI ${bmiMark} is higher than John's  ${bmiJohn} `;

} else {
  strOutput = `John's BMI ${bmiJohn} is higher than  Mark's ${bmiMark} `;
}
console.log(strOutput);
