var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express')
});

router.get('/test', async (req, res) => {
  res.render('test')
})

module.exports = router;
