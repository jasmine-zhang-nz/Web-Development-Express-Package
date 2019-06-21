let express = require('express');
let app = express();
let indexRouter = require('./Routes/index');
let vocabularyRouter = require('./Routes/vocabulary');

app.use('/', indexRouter)
app.use('/vocabulary',vocabularyRouter);
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'pug');

app.listen(3000, function(){

})
