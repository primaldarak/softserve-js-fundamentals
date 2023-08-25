// const filterMostOftenNumber = (numsArr) => {
//   let count = {};

//   numsArr.forEach((i) => {
//     count[i] = count[i] ? count[i] + 1 : 1;
//   });

//   let newArr = Object.values(count);
//   let maxItem = Math.max(...newArr);
//   const index = +Object.keys(count).find((key) => count[key] === maxItem);
//   const result = numsArr.filter((e) => e !== index);

//   return result;
// };

// console.log(filterMostOftenNumber([4, 5, 2, 1, 6, 5, 3, 5, 2, 5]));

// const primeNumbers = (numsArr) => {
//   const result = numsArr.map((e) => {
//     if (
//       e % 3 === 0 ||
//       e % 5 === 0 ||
//       e % 7 === 0 ||
//       e % 11 === 0 ||
//       e % 13 === 0
//     ) {
//       return e;
//     }
//   });

//   return result.filter((e) => {
//     return e !== undefined;
//   });
// };

// console.log(primeNumbers([13, 2, 4, 7]));

// const triangleArea = (a, b, c) => {
//   if (a + b <= c || b + c <= a || a + c <= b) {
//     return "Incorrect data";
//   }

//   const s = (a + b + c) / 2;
//   const areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//   return areaValue.toFixed(3);
// };

// ------------------------------------------------------

// const greetings = (time) => {
//   switch (true) {
//     case time >= 23 || time < 5:
//       return "Good night";
//     case time >= 5 && time < 11:
//       return "Good morning";
//     case time >= 11 && time < 17:
//       return "Good afternoon";
//     case time >= 17 && time < 23:
//       return "Good evening";
//     default:
//       break;
//   }
// };

// -----------------------------------------------

// class Circle {
//   constructor({ x = Number, y = Number } = {}, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }
//   getLength() {
//     const L = 2 * Math.PI * this.r;
//     return L;
//   }
//   static getLengthFromRadius(r) {
//     const L = 2 * Math.PI * r;
//     return L;
//   }

//   static createCircle(x, y, r) {
//     return `Circle with center in ${x},${y} and radius ${r}`;
//   }

//   getCopy() {
//     return new Circle({ x: this.x, y: this.y }, this.r);
//   }

//   checkPointInside(point) {
//     return (point.x - this.x) ** 2 + (point.y - this.y) ** 2 < this.r ** 2;
//   }
// }
// Circle.prototype.toString = function () {
//   return `Circle with center in ${this.x},${this.y} and radius ${this.r}`;
// };

// --------------------------------------------------------------------------

// function propsCount(currentObject) {
//   return Object.keys(currentObject).length;
// }

// -----------------------------------------------------

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     return `${this.surname} ${this.name} `;
//   }
// }

// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   getFullName(middleName) {
//     return `${this.surname} ${this.name} ${middleName}`;
//   }

//   getCourse() {
//     const currentDate = new Date();
//     return currentDate.getFullYear() - this.year + 1;
//   }
// }

// ----------------------------------------------------

// class Marker {
//   #color;
//   #amountOfInk = 100;
//   constructor(color) {
//     this.#color = color;
//   }

//   get ink() {
//     return this.#amountOfInk + "%";
//   }

//   get color() {
//     return this.#color;
//   }

//   print(text) {
//     const textArray = text.split("");
//     for (let i = 0; i < textArray.length; i++) {
//       if (this.#amountOfInk == 0) {
//         return;
//       } else {
//         console.log(textArray[i]);
//         if (textArray[i] !== " ") {
//           this.#amountOfInk -= 10;
//         }
//       }
//     }
//   }
// }

// class RefillableMarker extends Marker {
//   #amountOfInk = 100;
//   constructor(color) {
//     super(color);
//   }

//   refill() {
//     this.#amountOfInk = 100;
//   }

//   print(text) {
//     const textArray = text.split("");
//     for (let i = 0; i < textArray.length; i++) {
//       if (this.#amountOfInk == 0) {
//         return;
//       } else {
//         console.log(textArray[i]);
//         if (textArray[i] !== " ") {
//           this.#amountOfInk -= 10;
//         }
//       }
//     }
//   }
// }

// ------------------------------------------------------------

// class Worker {
//   #fullName;
//   #dayRate;
//   #workingDays;
//   #experience;
//   constructor(fullName = String, dayRate = Number, workingDays = Number, experience) {
//     this.#fullName = fullName;
//     this.#dayRate = dayRate;
//     this.#workingDays = workingDays;
//     this.#experience = experience;
//   }

//   getSalary() {
//     return this.#dayRate * this.#workingDays;
//   }

//   getSalaryWithExperience() {
//     return this.#dayRate * this.#workingDays * this.#experience;
//   }

//   get fullName() {
//     return this.#fullName;
//   }
//   get dayRate() {
//     return this.#dayRate;
//   }
//   get experience() {
//     return this.#experience;
//   }
//   set fullName(value) {
//     this.#fullName = value;
//   }
//   set dayRate(value) {
//     this.#dayRate = value;
//   }
//   set experience(value) {
//     this.#experience = value;
//   }

//   get workingDays() {
//     return this.#workingDays;
//   }

//   addWorkingDays(n = Number) {
//     this.#workingDays += n;
//   }

//   static sortBySalary(workers) {
//     const workersSalary = new Array(...workers);
//     workersSalary.sort((a, b) => a.getSalary() - b.getSalary());
//     return workersSalary;
//   }
// }

//-----------------------------------------------------------------

// function upperCase(str) {
//   const upperCaseRegExp = /[A-Z]/;
//   return upperCaseRegExp.test(str[0])
//     ? "String's starts with uppercase character"
//     : "String's not starts with uppercase character";
// }

//-----------------------------------------------------------------

// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

//-----------------------------------------------------------------

// function checkLogin(login) {
//   const loginRegex = /^(?![0-9])([a-zA-Z0-9.]){2,10}$/;
//   const numbersRegex = /[+-]?([0-9]*[.])?[0-9]+/g;
//   const result = { isValid: "", numbers: [] };
//   result.isValid = loginRegex.test(login);
//   if (login.match(numbersRegex) != null) {
//     result.numbers = login.match(numbersRegex);
//   }

//   return result;
// }

//-----------------------------------------------------------------

// const names = { first: "Tom", second: "Sam", third: "Ray" };

// let { first: f = "Name №1", second: s = "Name №2", third: t = "Name №3" } = names;

//-----------------------------------------------------------------

// const data = { names: ["Sam", "Tom", "Ray", "Bob"], ages: [20, 24, 22, 26] };

// let {
//   names: [name1, name2, name3, name4],
//   ages: [age1, age2, age3, age4],
// } = data;

//-----------------------------------------------------------------

// function mul(...nums) {
//   const mul = nums.filter((e) => typeof e === "number");
//   return mul.length > 0 ? mul.reduce((a, b) => a * b) : 0;
// }

//-----------------------------------------------------------------

// let server = {
//   data: 0,
//   convertToString: function (callback) {
//     callback(() => this.data + "");
//   },
// };
// let client = {
//   server: server,
//   result: "",
//   calc: function (data) {
//     this.server.data = data;
//     this.server.convertToString(this.notification());
//   },
//   notification: function () {
//     return (callback) => {
//       this.result = callback();
//     };
//   },
// };

//-----------------------------------------------------------------

// function mapBuilder(arr1, arr2) {
//   const map = new Map();
//   arr1.forEach((element, index) => {
//     map.set(element, arr2[index]);
//   });
//   return map;
// }

//-----------------------------------------------------------------

// function getPromise(message, delay) {
//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(message);
//     }, delay);
//   });
//   return promise;
// }

//-----------------------------------------------------------------

// function calcArrProduct(arr) {
//   const promise = new Promise(function (resolve, reject) {
//     if (arr.every((e) => typeof e == "number")) {
//       const product = arr.reduce((acc, e) => acc * e);
//       resolve(product);
//     } else {
//       reject("Error! Incorrect array!");
//     }
//   });
//   return promise;
// }

//-----------------------------------------------------------------

// new Promise(function (resolve, reject) {
//   const number = prompt("Enter number");
//   if (typeof number !== "number" || number.length == 0) {
//     reject();
//   } else {
//     resolve(number);
//   }
// })
//   .catch(function (error) {
//     return new Promise(function (resolve, reject) {
//       let number;
//       while (typeof number !== "number") {
//         number = prompt("Enter number");
//       }
//       resolve(number);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

//-----------------------------------------------------------------

// const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time));
// delays.forEach((d, i) => {
//   delay(i, d).then((result) => console.log(result));
// });

//-----------------------------------------------------------------
// let delays = [300, 200, 100, 150, 500];
// const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time));

// delays.sort((a, b) => a - b);
// delays.forEach((d, i) => {
//   delay(i, d).then((result) => console.log(result));
// });
