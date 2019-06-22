let express = require('express');
let app = express();
let indexRouter = require('./routes/index');
let vocabularyRouter = require('./routes/vocabulary');

app.use('/', indexRouter)
app.use('/vocabulary',vocabularyRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000, function(){

})
