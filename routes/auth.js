const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('auth', { title: 'Auth' });
});

router.post('/confirm', (req, res) => {
    res.redirect('/card');
});

module.exports = router;
