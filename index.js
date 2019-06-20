let express = require('express');
let app = express();
let indexRouter = require('Routes/index');
let vocabularyRouter = require('Routes/vocabulary');

app.use('/', indexRouter)
app.use('/vocabulary',vocabularyRouter);

app.listen(3000, function(){

})
