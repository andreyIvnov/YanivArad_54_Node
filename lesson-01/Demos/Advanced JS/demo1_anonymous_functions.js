function func(num) {
  return num * 2;
}

// Option 1
const f1 = function (num) {
  return num * 2;
};

// Option 2 - Arrow Function
const f2 = (num) => {
  return num * 2;
};

const f3 = (num) => num * 2;

console.log(func(2));
console.log(f1(3));
console.log(f2(4));
console.log(f3(5));
