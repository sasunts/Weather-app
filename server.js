var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const express = require('express');
const app = express();
const Vue = require("vue");
var $ = jQuery = require('jquery')(window);

const port = "3001";

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/city/:name',sendWeather)

app.use(express.static('website'))

function sendWeather(req, res){
    let city = req.params.name    
    console.log(city)
    console.log("Calling open Weather API...")
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid=6fccb263105c078b7f49de484b9363d1", function(json){
        res.json(json)
    })
}