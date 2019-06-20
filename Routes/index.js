let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
    res.render("Jasmine's Personal Website");
})

module.exports = router;