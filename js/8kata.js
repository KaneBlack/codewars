// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f

// function squareSum(numbers){
// 	return numbers.reduce( (a,b) => {
// 	  return a + (b*b)
// 	},0)
//   }



// Reversed Strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// function solution(str){
// 	return str.split('').reverse().join('')
//   }



// Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004

// function multiply(a, b){
// 	return a * b
//   }



// Convert a Number to a String!
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// function numberToString(num) {
// 	return num.toString()
//   }



// Convert boolean values to strings 'Yes' or 'No'.
// https://www.codewars.com/kata/53369039d7ab3ac506000467

// function boolToWord( bool ){
// 	return bool ? 'Yes' : 'No'
//   }



// Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// function even_or_odd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd'
// }



// Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// function sum (numbers) {
//     "use strict";

//     return numbers.reduce( (a, b) => a + b, 0 )
// };



// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556

// function countSheeps(arrayOfSheep) {
// 	const countArr = arrayOfSheep.map( a => {
// 	  return +a ? 1 : 0
// 	} ).reduce( (a, b) => a + b )

// 	return countArr
//   }



// DNA to RNA Conversion
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
// 	return dna.split('').map(item => {
// 		return item === 'T' ? 'U' : item
// 	}).join('');
// }



// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102

// function makeNegative(num) {
// 	return -Math.abs(num)
//   }



// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// function digitize(n) {
// 	return String(n).split('').reverse().map(i => Number(i))
// }



// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// class SmallestIntegerFinder {
// 	findSmallestInt(args) {
// 		return args.sort((a,b) => a - b)[0]
// 	}
// }



// Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// var summation = function (num) {
// 	let res = 0;
// 	for (let i = 0; i < num; i++) {
// 		res += i + 1
// 	}
// 	return res
// }



// L1: Set Alarm
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// function setAlarm(employed,vacation) {
// 	return employed && !vacation ? true : false
// }