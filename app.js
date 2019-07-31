const express = require('express');

//const http = require('http');
const port=process.env.PORT || 3000

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + '/'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html")
})

app.get('/game', (req, res) => {
	res.sendFile(__dirname + "/game.html")
})


//server.listen(port,() => {
app.listen(port,() => {
  console.log(`Server running at port `+port);
});