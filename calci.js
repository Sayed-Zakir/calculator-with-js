const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var first = Number(req.body.num1);
    var sec = Number(req.body.num2);
    var result = first + sec;

    res.send("sum is " + result);
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmicalculator", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = weight / (height * height);

    res.send("your BMI is  " + result);
});

app.listen(3000, function() {
    console.log("you are live");
});