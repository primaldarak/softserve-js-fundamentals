// ## 1. Return only unique array values

const compact = (arr) => {
  return [...new Set(arr)];
};
console.log(`1. ${compact([5, 3, 4, 5, 6, 7, 3])}`);
// -------------------------------------------------

// ## 2. Create an array from range of numbers

const createArray = (start, end) => {
  const arr = [];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(`2. ${createArray(1, 9)}`);
// -------------------------------------------------

// ## 3. Return all numbers in radius a-b, each next number must be displayed +1 time

const displayNums = (a, b) => {
  const arr = [];
  let count = 0;
  for (let i = a; i <= b; i++) {
    count++;
    for (let j = count; j > a - 1; j--) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(`3. ${displayNums(2, 9)}`);
// -------------------------------------------------

// ## 4. Fill array with random n numbers from range 1-500

const randArray = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (500 - 1) + 1));
  }
  return arr;
};
console.log(`4. ${randArray(5)}`);
// -------------------------------------------------

// ## 5. Function to filter input array into new array of numbers and array of strings

const arrFilter = (arr) => {
  const testArr = arr.flat(Infinity);

  const numArr = testArr.filter((e) => {
    return typeof e == "number";
  });
  const stringArr = testArr.filter((e) => {
    return typeof e == "string";
  });

  const finalArr = [numArr, stringArr];

  return finalArr;
};

console.log(
  `5.`,
  arrFilter([
    5,
    "Limit",
    12,
    "a",
    "3",
    99,
    2,
    [2, 4, 3, "33", "a", "text"],
    "strong",
    "broun",
  ])
);
// --------------------------------------------------

// ## 6. Function with operands a,b and operator op depending on case
const calc = (a, b, op) => {
  let res;
  switch (op) {
    case 1:
      res = a - b;
      break;
    case 2:
      res = a * b;
      break;
    case 3:
      res = a / b;
      break;
    default:
      res = a + b;
  }
  return res;
};

console.log(`6. ${calc(10, 51, 2)}`);
// ------------------------------------------------------

// ## 7. Check is array has only unique elements

const findUnique = (arr) => {
  return arr.length === new Set(arr).size;
};

console.log(`7. ${findUnique([1, 2, 3, 5, 3])}`);
// -----------------------------------------------

// ## ***
function create(str) {
  return (s) => s == str;
}

const tom = create("pass_for_Tom");
console.log(`*** ${tom("pass_for_Tom")}`);
console.log(`*** ${tom("pass_for_tom")}`);
