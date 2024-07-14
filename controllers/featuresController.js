
// '*'
module.exports.defaultRouter = function (req, res) {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('error', { page: 'Error: 404', error, success });
}

// '/'
module.exports.getHome = function (req, res) {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('home', { page: 'Home', error, success });
}

// '/apps'
module.exports.getApps = (req, res) => {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('features/apps', { page: 'Apps', error, success });
}

// '/games'
module.exports.getGames = (req, res) => {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('features/games', { page: 'Games', error, success });
}

// '/movies'
module.exports.getMovies = (req, res) => {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('features/movies', { page: 'Movies', error, success });
}

// '/books'
module.exports.getBooks = (req, res) => {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('features/books', { page: 'Books', error, success });
}

// '/music'
module.exports.getMusic = (req, res) => {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('features/music', { page: 'Music', error, success });
}
