var express = require('express');
var router = express.Router();
const i18next = require('i18next');
const app = ('./../app');

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { 
    title: 'Express',
    names: {
      nameAr: 'قطة',
      nameEn: 'cat'
    }
   });
});

router.get('/switch-lang/:lang', (req, res, next) => {
  res.cookie('i18next', req.params.lang);
  res.redirect('back');
})

module.exports = router;
