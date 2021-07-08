// Snail
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

// const snail = function (array) {
// 	let res = [];
// 	while (array.length) {
// 		res = (res ? res.concat(array.shift()) : array.shift());
// 		for (let i = 0; i < array.length; i++)
// 			res.push(array[i].pop());
// 		res = res.concat((array.pop() || []).reverse());
// 		for (let i = array.length - 1; i >= 0; i--)
// 			res.push(array[i].shift());
// 	}
// 	return res;
// }