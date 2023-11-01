function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Please, enter only numbers!'));
    }
    
    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Value too low!'));
    }

    resolve(result);
  });
}

async function firstResolve() {
  try {
    const result = await doMath(10, 10, 10);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
firstResolve();

async function secondResolve() {
  try {
    const result = await doMath(10, 10, '10');
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
secondResolve();

async function thirdResolve() {
  try {
    const result = await doMath(1, 1, 1);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
thirdResolve();