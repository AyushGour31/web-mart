const express = require('express');
const router = express.Router();

const homeRouter = require('./homeRouter');
const appsRouter = require('./features/appsRouter');
const gamesRouter = require('./features/gamesRouter');
const moviesRouter = require('./features/moviesRouter');
const booksRouter = require('./features/booksRouter');
const musicRouter = require('./features/musicRouter');
const userRouter = require('./authentication/userRouter');
const developerRouter = require('./authentication/developerRouter');

/* GET home page. */

router.use('/', homeRouter);
router.use('/home', homeRouter);
router.use('/apps', appsRouter);
router.use('/games', gamesRouter);
router.use('/movies', moviesRouter);
router.use('/books', booksRouter);
router.use('/music', musicRouter);
router.use('/user', userRouter);
router.use('/developer', developerRouter);

router.get('*', (req, res) => {
  res.render('error', { page: 'Error' });
});

module.exports = router;
