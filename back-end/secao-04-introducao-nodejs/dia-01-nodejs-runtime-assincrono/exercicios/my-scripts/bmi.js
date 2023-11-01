const readline = require('readline-sync');

const handleBmi = (weight, height) => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters ** 2);
  return bmi;
}

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
}

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

const main = () => {
  const weight = readline.questionFloat('What is your weight in kg? ');
  const height = readline.questionInt('What is your height in cm? ');

  const bmi = handleBmi(weight, height);
  const bmiResult = handleBMIResult(bmi);

  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(`bmiResult: ${bmiResult}`)
}

main();