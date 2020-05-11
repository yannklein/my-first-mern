const router = require('express').Router();
const movieRoutes = require('./movie-router');
const path = require('path');

// API routes
router.use('/api/movies', movieRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
