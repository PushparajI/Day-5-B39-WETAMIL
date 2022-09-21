//1. Print odd numbers in an array
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// const odds = arr. filter(n => n%2)
// console. log(odds);


//2. Convert all the strings to title caps in a string array

//  var sentence = "Convert all the strings to title caps";
// var captializeString = (str) => str[0].toUpperCase() +
//  str.slice(1).toLowerCase();
// var capitalizeWords = (str) => str.split(' ').map
//  (captializeString).join(' ');
// console.log(capitalizeWords(sentence));


//  3. Sum of all numbers in an array

// var arr = [1, 2, 3, 4, 5];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// console.log("Sum is " + sum);


// 4. Return all the prime numbers in an array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const primeArr = [];
// var i = 0;

// for (var num of arr) {
//     if (num ===2) {
//         primeArr[i] = num;
//         i++;
//     }
//     else if (num > 2) {
//         var flag = true;
//         for (var j = 2; j < num/ 2; j++) {
//             if (num % j === 0) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag) {
//             primeArr[i] = num;
//             i++
            
//         } 
//     }
// }
// console.log(primeArr);


// 5.Return all the palindromes in an array

// let palindromeArray = (arr, start = 0, end = arr.length - 1) => {
//     if(start >= end){
// 	 return true;
// 	 } 
// 	if(arr[start] === arr[end]){
// 	return palindromeArray(arr, start + 1, end - 1);
// 	}else{
// 	 return false;
// 	 }
// }
// console.log(palindromeArray([1,2,3,4,4,3,2,1]));

// 6. Remove duplicates from an array

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let dupChars = chars.filter((c, index) => {
//     return chars.indexOf(c) !== index;
// });
// console.log(dupChars);

// 7. Return median of two sorted arrays of the same size.
// let arr1 = [1, 12, 15, 26, 38];
// let arr2 = [2, 13, 17, 30, 45];

// var n = 5;
// var resArr = [];

// for(var i=0, j=0; i<n || j<n;) {
//     if(arr1[i] < arr2[j]) {
//         resArr.push(arr1[i]);
//         i++;
//     }else if (arr1[i] > arr2[j]){
//         resArr.push(arr2[j]);
//         j++;
//     }else {
//         if (i < n) {
//             resArr.push(arr1[i]);
//             i++;
//         }
//         if (j < n) {
//             resArr.push(arr2[j]);
//             j++;
//         }   
//     }
// }
// console.log((resArr[n - 1] + resArr[n]) /2 );










