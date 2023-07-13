const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('card', { title: 'Card' });
});

module.exports = router;
