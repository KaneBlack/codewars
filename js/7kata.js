// String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// function solution(str, ending){
// 	return ending.length ? str.slice(-ending.length) === ending : true
//   }



// Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// function reverseWords(str) {
// 	const rev = str.split(' ').map(i => {
// 	  return i.split('').reverse().join('')
// 	} ).join(' ')
	
// 	return rev
//   }



// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e

// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi,'');
//   }



// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

// String.prototype.toJadenCase = function () {
// 	let arrStr = this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
// 	return arrStr
//   };