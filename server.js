var express = require("express");
var path = require("path");
var jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

var PORT = 8080;

app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
​
​
require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

