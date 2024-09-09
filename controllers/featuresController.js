const itemsModel = require('../models/itmes-model');

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

// '/add-items'
module.exports.getAddItems = (req, res) => {
    const error = req.flash('error');
    const success = req.flash('success');
    res.render('features/addItems', { page: 'Add Items', error, success });
}
module.exports.postAddItems = async (req, res) => {
    // const error = req.flash('error');
    // const success = req.flash('success');
    // res.render('features/addItems', { page: 'Add Items', error, success });

    const { category, itemname, imgurl, description, files } = req.body;
    const item = await itemsModel.create({
        category,
        itemname,
        imgurl,
        description,
        files:[
            {
                filename: files.filename,
                fileurl: files.fileurl,
            },
        ]
    })

    res.send(item);
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
