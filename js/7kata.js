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