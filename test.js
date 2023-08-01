// let a = 9,
//   b = 9,
//   sum;
// sum = a + b;
// console.log(sum);

// function repeatStringNumTimes(string, times) {
//   if (times > 0) return string.repeat(times);
//   else return "";
// }

// console.log(repeatStringNumTimes("*", 3));
// console.log(result);
// var result = 7;

// var cat = {};
// cat.sound = "meow";
// var catSound = "purr";
// console.log(cat.sound);

//console.log(Math.floor(1 / 10));
//console.log(1 % 10);
//console.log(parseInt("2018@gamil.com"));
//console.log(!(22 % (22 % 10))); // true

// const revBit = (n) => {
//   let t = n.toString(2).split("");
//   let str_len = t.length;
//   for (let i = 0; i < 32 - str_len; i++) {
//     t.unshift("0");
//   }
//   return parseInt(t.reverse().join(""), 2);
// };
// console.log(revBit(1));

// console.log(Math.pow(-2, 31));
// console.log(Math.pow(2, 31));

//console.log(parseInt(100, 2)); // 4

//console.log(Math.max(4, 10));

// let arr = [4, 8, 5, 2, 6, 9, 3, 6, 7, 1, 3];
// arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// arr.sort();
// console.log(arr);

// let array1 = [1, 30, 4, 21, 100000, 201];
// array1.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(array1);

//console.log(Math.floor(2 / 6));

// function frequencyCount(arr, N, P) {
//   //code here+
//   let maxIndex = P + 1;
//   for (let i = 0; i < N; i++) {
//     if (arr[i] > N) {
//       arr[i] = 0;
//     }
//   }
//   console.log(arr);
//   for (let i = 0; i < N; i++) {
//     let temp = arr[i] % maxIndex;
//     console.log(temp);
//     if (temp >= 1 && temp <= N) {
//       console.log(arr[i]);
//       arr[temp - 1] = arr[temp - 1] + maxIndex;
//       console.log(arr[i]);
//     }
//     console.log(arr[temp - 1]);
//   }
//   console.log(arr);
//   for (let i = 0; i < N; i++) {
//     arr[i] = Math.floor(arr[i] / maxIndex);
//     console.log(arr[i]);
//   }
//   return arr;
// }
// console.log(frequencyCount([2, 3, 2, 3, 5], 5, 5));

// let N = 5;
// let counterArray = Array(N).fill(0);
// console.log(counterArray);

// function frequencyCount(arr, N, P) {
//   let counterArray = Array(N).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= N) {
//       counterArray[arr[i] - 1]++;
//     }
//   }
//   arr.forEach((x, i) => {
//     arr[i] = counterArray[i];
//   });
//   return arr;
// }
// console.log(frequencyCount([2, 3, 2, 3, 5], 5, 5));

// Javascript program to count frequencies of
// integers in array using Hashmap

// const frqCount = (arr, size) => {
//   let m = new Map();
//   for (let i = 0; i < size; i++) {
//     m.set(m.get(arr[i++]), i);
//   }
//   for (let i = 0; i < size; i++) {
//     arr[i - 1] = m.get(arr[i], i);
//   }
//   for (let [k, v] of m.entries()) {
//     console.log(v);
//   }
// };
// frqCount([2, 3, 2, 3, 5], 5);

//Merge Sort
// const s = performance.now();
// function merge_Arrays(left_sub_array, right_sub_array) {
//   let array = [];
//   while (left_sub_array.length && right_sub_array.length) {
//     if (left_sub_array[0] < right_sub_array[0]) {
//       array.push(left_sub_array.shift());
//     } else {
//       array.push(right_sub_array.shift());
//     }
//   }
//   return [...array, ...left_sub_array, ...right_sub_array];
// }
// function merge_sort(unsorted_Array) {
//   const middle_index = unsorted_Array.length / 2;
//   if (unsorted_Array.length < 2) {
//     return unsorted_Array;
//   }
//   const left_sub_array = unsorted_Array.splice(0, middle_index);
//   return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
// }
// let unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
// console.log("The sorted array will be: ", merge_sort(unsorted_Array));
// const e = performance.now();
// console.log(`${(e - s).toFixed(2)} ms`);

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [];
let arr3 = [];
// arr3.push(arr.unshift());
// arr2.push(arr.shift());
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
let arr4 = [...arr];
arr4.splice(arr4.indexOf(7), 1);
console.log(arr4);

let arr5 = [...arr];
arr5.unshift(...arr5.splice(3));
console.log(arr5);

for (let i = 1; i <= 5; i++) {
  console.log(`test -> ${i}`);
}

const test1 = (a, b) => {
  return a + b;
};

// html class
