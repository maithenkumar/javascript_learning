const http = require("https");

const options = {
	"method": "POST",
	"hostname": "openai80.p.rapidapi.com",
	"port": null,
	"path": "/images/generations",
	"headers": {
		"content-type": "application/json",
		"X-RapidAPI-Key": "3ad99d10femsh0a955a8d63290fbp1ec168jsn65697aba631c",
		"X-RapidAPI-Host": "openai80.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(JSON.stringify({prompt: 'A cute baby sea otter', n: 2, size: '1024x1024'}));
req.end();
//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9363cdac554a47aba5ee03037f8b059a&q=tech