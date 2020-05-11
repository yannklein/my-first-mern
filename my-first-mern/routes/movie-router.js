const MovieCtrl = require('../controllers/movie-ctrl');

const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(MovieCtrl.getMovies)
  .post(MovieCtrl.createMovie);

router
  .route('/:id')
  .get(MovieCtrl.getMovieById)
  .put(MovieCtrl.updateMovie)
  .delete(MovieCtrl.deleteMovie);

module.exports = router;
