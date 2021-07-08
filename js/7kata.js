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



// List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// function filter_list(l) {
// 	return l.filter(i => typeof(i) === 'number')
//   }

// function filter_list(l) {
// 	let newL = [];
// 	l.forEach( i => {
// 	  if(typeof(i) === 'number') {
// 		newL.push(i)
// 	  }
// 	})
// 	return newL
//   }



// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc

// function maskify(cc) {

// 	return cc.split('').map( (item, index) => index < cc.length - 4 ? item.replace(/\w/, '#') : item ).join('')

//   }



// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// function isIsogram(str) {
// 	return !str.match(/([a-z]).*\1/i)
// }

// function isIsogram(str) {
// 	let arr = str.toLowerCase().split('');
// 	let a = true;

// 	for (let i = 0; i < str.length; i++) {
// 		if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
// 			a = false
// 		}
// 	}

// 	return a
// }



// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// function getCount(str) {
// 	return (str.match(/[aeiou]/ig) || []).length;
// }



// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035

// function highAndLow(numbers) {
// 	const fNum = numbers.split(' ').sort((a,b) => a - b);
// 	const res = [fNum[0],fNum[fNum.length - 1]].reverse().join(' ')

// 	return res
// }



// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// function DNAStrand(dna) {
// 	return dna.split('').map(i => {
// 		switch (i) {
// 			case 'T':
// 				return 'A'
// 				break;
// 			case 'A':
// 				return 'T'
// 				break;
// 			case 'C':
// 				return 'G'
// 				break;
// 			case 'G':
// 				return 'C'
// 				break
// 			default:
// 				return i
// 		}
// 	}).join('')
// }



// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// function sumTwoSmallestNumbers(numbers) {
// 	return numbers.sort((a,b) => (a > b) ? 1 : (a == b) ? 0 : -1).slice(0,2).reduce((a,b) => a + b)
// }



// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// function XO(str) {
// 	let x = 0,o = 0;
// 	str.toLowerCase().split('').map(i => {
// 		i === 'x' ? x += 1 : i === 'o' ? o += 1 : i
// 	})
// 	return x === o ? true : false
// }