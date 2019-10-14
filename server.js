//Importing relevant libraries
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const express = require('express');
const app = express();
const Vue = require("vue");
var $ = jQuery = require('jquery')(window);

//Assigning a port value
const port = "8080";

//Listen on port 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Api for function sendWeather
app.get('/city/:name',sendWeather)

//Host the website located in the folder
app.use(express.static('website'))

//Function which calls the open weather API and returns the json data as a responce. 
function sendWeather(req, res){
    let city = req.params.name    
    console.log(city)
    console.log("Calling open Weather API...")
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid=6fccb263105c078b7f49de484b9363d1", function(json){
        res.json(json)
    })
}