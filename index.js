let express = require('express')
let app = express()

app.get('/', function(req,res){
    res.send("This is home page")
})

app.get('/vocabulary', function(req,res){
    res.send("Vocabulary Playground")
})

app.listen(3000, function(){

})