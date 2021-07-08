// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b

// function domainName(url) {
// 	url = url.replace("https://",'');
// 	url = url.replace("http://",'');
// 	url = url.replace("www.",'');
// 	return url.split('.')[0];
// }

// function domainName(url) {
// 	let domain;
// 	if (url.indexOf("://") > -1) {
// 		domain = url.split('/')[2];
// 	}
// 	else {
// 		domain = url.split('/')[0];
// 	}

// 	if (domain.indexOf("www.") > -1) {
// 		domain = domain.split('www.')[1];
// 	}

// 	domain = domain.split('.')[0];

// 	return domain;
// }



// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a

// function dirReduc(arr) {
// 	const direction = {
// 		NORTH: 'SOUTH',
// 		SOUTH: 'NORTH',
// 		EAST: 'WEST',
// 		WEST: 'EAST'
// 	}

// 	return arr.reduce((acc,el) => {
// 		if (acc[acc.length - 1] === direction[el])
// 			acc.pop()
// 		else
// 			acc.push(el)
// 		return acc
// 	},[])

// }