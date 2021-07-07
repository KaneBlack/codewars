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