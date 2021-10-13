//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

const controller3 = require('../controllers/ta03');

router.get('/', controller3.getAllProds);

router.get('/search', controller3.getSearch);

module.exports = router;
