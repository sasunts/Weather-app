const express = require('express');
const app = express();
const Vue = require("vue");

const port = "3001";

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use(express.static('website'))

