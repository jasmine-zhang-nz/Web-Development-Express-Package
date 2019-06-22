let express = require('express');
let router = express.Router();
let vocabularyController = require('../controllers/VocabularyController');


router.get('/vocabulary',function(req,res){
    res.render('index');
});

router.put('/vocabulary/put',function(req,res){
    res.render('index', {order: 'frequency'});
});

router.get('/vocabulary/: vocabularyId',vocabularyController.getVocabularyDetails);

module.exports = router;