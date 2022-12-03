var express = require('express');
var router = express.Router();
const config = require('../../data/config')

/* GET home page. */
router.get('/', function(req, res, next) {
  let SignInBool;
  
  res.render('index', { 
    mailAddr: config.Contact.mail,
    dId: config.Contact.discordId,
    dTag: config.Contact.discord,
    github: config.Contact.github,
    LoggedIn: false
  });
});

router.get('/test', async (req, res) => {
  res.render('test')
})

module.exports = router;
