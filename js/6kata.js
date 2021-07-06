// Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003

// function toCamelCase(str){
// 	let nStr = str.replace(/[^a-zA-Z0-9]/g, ' ')
// 	let res = nStr.split(' ').map( (a, i) => i > 0 ? a.replace(/\b\w/g, c => c.toUpperCase()) : a ).join('')
// 	return res
//   }



// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

// function createPhoneNumber(numbers){
// 	return numbers.join('').replace(/^(\d{3})(\d{3})(\d{4}).*/,"($1) $2-$3"); 
//    }



// Take a Ten Minute Walk
// https://www.codewars.com/kata/54da539698b8a2ad76000228

// function isValidWalk(walk) {
// 	if(walk.length != 10) return false
	
// 	const objList = {
// 	  'n' : 0,
// 	  's' : 0,
// 	  'w' : 0,
// 	  'e' : 0,
// 	}
	
// 	let uniqueNum = [...new Set(walk)]
// 	for(let key in objList) {
// 	  for(let i = 0;i < walk.length;i++) {
// 		if(key == walk[i]) objList[key] += 1
// 	  }
// 	}
// 	return objList['n'] == objList['s'] && objList['e'] == objList['w'] ? true : false
//   }
