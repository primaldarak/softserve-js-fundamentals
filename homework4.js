//## 1. Function to add `first` array ellement to `second`, create exeptions when input elements are bigger then array length or not a number
// const sumSliceArray = (arr, first, second) => {
//   if (first > arr.length || isNaN(first)) {
//     return "First element is bigger than array length or not a number!";
//   } else if (second > arr.length || isNaN(second)) {
//     return "Second element is bigger than array length or not a number!";
//   } else {
//     const sum = arr[first] + arr[second];
//     return sum;
//   }
// };

// console.log(sumSliceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "0", "0"));
//-----------------------------------------------------------------------

//## 2. Check users name, age, and status. Throw errors if there are any.
// const checkAge = () => {
//   let userInfo = {
//     userName: "",
//     userAge: 0,
//     userStatus: "",
//   };

//   try {
//     userInfo.userName = prompt("Write your name:");

//     switch (true) {
//       case userInfo.userName == "":
//         throw new Error("The field is empty! Please enter your Name.");
//       default:
//         break;
//     }

//     userInfo.userAge = +prompt("Write your age:");

//     switch (true) {
//       case userInfo.userAge == "":
//         throw new Error("The field is empty! Please enter your Age.");
//       case isNaN(userInfo.userAge):
//         throw new EvalError("Age should be a number.");
//       case userInfo.userAge < 18 || userInfo.userAge > 70:
//         throw new RangeError("Invalid age.");
//       default:
//         break;
//     }

//     userInfo.userStatus = prompt(
//       "Write your Status: \n 1. Admin\n 2. Moderator\n 3. User"
//     ).toLowerCase();

//     switch (true) {
//       case userInfo.userStatus === "":
//         throw new Error("The field is empty! Please enter your Status.");
//       case userInfo.userStatus == 1:
//         userInfo.userStatus = "admin";
//         break;
//       case userInfo.userStatus == 2:
//         userInfo.userStatus = "moderator";
//         break;
//       case userInfo.userStatus == 3:
//         userInfo.userStatus = "user";
//         break;
//       case userInfo.userStatus !== "admin" &&
//         userInfo.userStatus !== "moderator" &&
//         userInfo.userStatus !== "user":
//         throw new EvalError(
//           "Your status is not recognized! Enter valid status."
//         );
//       default:
//         break;
//     }
//   } catch (error) {
//     alert(`${error.name}: ${error.message}`);
//   }
//   return userInfo;
// };

// console.log(checkAge());
//-----------------------------------------------------------------

//## 3. Calculate rectangle area and throw errors if params are not numbers

// const calcRectangleArea = (width, height) => {
//   let s = 0;
//   try {
//     if (isNaN(width) || isNaN(height)) {
//       throw new TypeError("Value should be a number.");
//     } else if (width == "" || height == "") {
//       throw new Error("The field is empty! Please enter your value.");
//     }

//     s = width * height;
//   } catch (error) {
//     alert(`${error.name}: ${error.message}`);
//   }

//   return s;
// };

// console.log(
//   calcRectangleArea(prompt("Enter width: "), prompt("Enter heigth: "))
// );
//-------------------------------------------------------------------------

//## 4. Return month name from inputed number, return exeption if number is out of month range

// class MonthExeption {
//   constructor(message) {
//     this.name = message;
//   }
// }

// function showMonthName(month) {
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   if (month < 1 || month > 12) {
//     return new MonthExeption("Incorrect month number");
//   } else return monthNames[month - 1];
// }
// console.log(showMonthName(13));

//--------------------------------

//## 5

// const showUser = (id) => {
//   const userId = {};
//   if (id < 0) {
//     alert(`Error: ID must not be negative: ${id}`);
//   } else {
//     userId.id = id;
//     return userId;
//   }
// };

// const showUsers = (ids) => {
//   const usersId = ids
//     .map((e) => {
//       return showUser(e);
//     })
//     .filter((nUndefined) => nUndefined != undefined);
//   return usersId;
// };

// console.log(showUsers([7, -12, 44, 22]));
