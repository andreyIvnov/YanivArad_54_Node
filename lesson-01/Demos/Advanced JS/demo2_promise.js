function getResultOfPositiveNumber(num) {
  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 0) {
        resolve(num * 2);
      } else {
        reject('Negative Number!');
      }
    }, 3000);
  });

  return prom;
}

// Option 1
getResultOfPositiveNumber(4)
  .then((data) => console.log(data))
  .catch(console.log);

// Option 2.1
async function exec_func1(num) {
  try {
    const data = await getResultOfPositiveNumber(num); // await 3 seconds
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

exec_func1(-10);

// Option 2.2
async function exec_func2(num) {
  try {
    const data = await getResultOfPositiveNumber(num); // await 3 seconds
    return data;
  } catch (error) {
    return error;
  }
}

exec_func2(3).then(console.log).catch(console.log);

console.log('End');
