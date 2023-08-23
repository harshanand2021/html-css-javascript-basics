// currySum(1,2,3)(4,5,6)(7,8,9)
let sum = 0;
function currySum(...args) {
  args.forEach((item) => {
    sum += item;
  });
  return (...b) => {
    if (b.length === 0) {
        return sum;
    } else {
        return currySum(...b);
    }
  };
}

console.log(currySum(1, 2, 3, 4)(5, 6, 7)(8, 9, 10)(11, 12, 13, 15)());

console.log(this);
