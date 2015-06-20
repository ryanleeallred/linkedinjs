'use strict';

var getUserData = require("./node_modules/getUserData/getUserData");
var fs = require('fs');

var profileLink = 'https://www.linkedin.com/pub/danaan-clarke/24/482/b6b?trk=pub-pbmap'



getUserData.getMyStuff(profileLink, function (res) {
	console.log(res);

	var url = '';

	if (res.companyURL.slice(0,7) === "http://"){
		url = res.companyURL.slice(7,res.companyURL.length);
	} else if (res.companyURL.slice(0,8) === "https://"){
		url = res.companyURL.slice(8,res.companyURL.length);
	}

	if (url[url.length-1] === "/") {
		url = url.slice(0,url.length-1);
	}

	var stringToWrite = res.firstName + ',' + res.lastName + ',' + url + "\n";


	fs.appendFile('leads.txt', stringToWrite, function(err) {
		if (err) return console.log(err);
		console.log("response.data > leads.csv");
	});
});













