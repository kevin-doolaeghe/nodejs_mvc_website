const boite = require("./../models/boite.json");

module.exports.index = function(req, res) {
    res.render('index', {
        title: 'Homepage',
        ideas: boite.ideas
    });
};

module.exports.idea = function(req, res) {
    const idea = boite.ideas.find(p => p.id === req.query.id);
    res.render('idea', {
        title: `About idea n°${idea.id}`,
        idea
    });
};