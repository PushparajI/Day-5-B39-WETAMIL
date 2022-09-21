// 1. Print odd numbers in an array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const resarr = [];
// arr.forEach(num => {
//     if ( num % 2 ===1) {
//         resarr.push (num);
//      }
// });
// console.log(resarr);

// // 2.Convert all the strings to title caps in a string array

//  var sentence = "Convert all the strings to title caps";
// var capitalizeString = (str) => str[0].toUpperCase() +
//  str.slice(1).toLowerCase();
// var capitalizeWords = (str) => str.split(' ').map
//  (capitalizeString).join(' ');
// console.log(capitalizeWords(sentence));

// 3. Sum of all numbers in an array

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

// 5. Return all the palindromes in an array

let palindromeArray = (arr, start = 0, end = arr.length - 1) => {
    if(start >= end){
	 return true;
	 } 
	if(arr[start] === arr[end]){
	return palindromeArray(arr, start + 1, end - 1);
	}else{
	 return false;
	 }
}
console.log(palindromeArray([1,2,3,4,4,3,2,1]));