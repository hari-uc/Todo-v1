const express = require("express")
const bodyParser = require("body-parser");
const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = []





app.get("/",function(req, res){

    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    var date = new Date();
    
    var current_day = date.toLocaleDateString("en-US",options);


    res.render('index', {indru : current_day, items: items});

    
});

app.post("/", function(request, response){
    var item = request.body.userinput

    items.push(item);
    response.redirect("/")


});





app.listen(3000, function(){
    console.log("server is running")
});


