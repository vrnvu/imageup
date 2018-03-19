const router = require('express').Router();

router.get('/images', (req, res, next) => {
    res.render('images.html');
});

module.exports = router;
