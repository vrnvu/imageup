const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('test-db', ['images']);

router.get('/images', (req, res, next) => {
  db.images.find((err, images) => {
    if (err) return next(err);
    res.json(images);
  });
});

module.exports = router;
