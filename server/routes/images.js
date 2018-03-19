const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('test-db', ['images']);

router.get('/images', (req, res, next) => {
  db.images.find((err, images) => {
    if (err) return next(err);
    res.json(images);
  });
});

router.get('/images/:id', (req, res, next) => {
  db.images.findOne({_id: req.params.id}, (err, image) => {
    if (err) return next(err);
    res.json(image);
  });
});

module.exports = router;
