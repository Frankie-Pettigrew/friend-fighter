
app.get("/",function(req,res){
    res.sendFile(path.join("app/public/", "home.html"));
});

app.get("/survey",function(req,res){
    res.sendFile(path.join("app/public/", "survey.html"));
})