const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.post('/get-card-details', (req, res) => {
  res.redirect('/auth');
});

module.exports = router;
