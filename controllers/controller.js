const ideas = require("./../models/idea-box.json").ideas;
const validateIdea = require("../bin/joi-validation").validateIdea;

module.exports.index = (req, res) => {
    res.render('index', {
        title: 'Homepage',
        ideas
    });
};

module.exports.idea = (req, res) => {
    const idea = ideas.find(p => p.id === parseInt(req.query.id));
    if (!idea) return res.status(404).send('Idea not found..');

    res.render('idea', {
        title: `About idea n°${idea.id}`,
        idea
    });
};

module.exports.getIdeas = (req, res) => {
    res.send(ideas);
};

module.exports.getIdea = (req, res) => {
    const idea = ideas.find(p => p.id === parseInt(req.params.id));
    if (!idea) return res.status(404).send('Idea not found..');

    res.send(idea);
};

module.exports.postIdea = (req, res) => {
    const { error } = validateIdea(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const idea = {
        id: ideas.length + 1,
        title: req.body.title,
        content: req.body.content,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        date: new Date()
    };
    ideas.push(idea);

    res.send(idea);
};

module.exports.putIdea = (req, res) => {
    const idea = ideas.find(p => p.id === parseInt(req.params.id));
    console.log(`idea: ${idea}`);
    if (!idea) return res.status(404).send('Idea not found..');

    const { error } = validateIdea(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    idea.title = req.body.title;
    idea.content = req.body.content;
    idea.firstname = req.body.firstname;
    idea.lastname = req.body.lastname;
    idea.date = new Date();
    
    res.send(idea);
};

module.exports.deleteIdea = (req, res) => {
    const idea = ideas.find(p => p.id === parseInt(req.params.id));
    if (!idea) return res.status(404).send('Idea not found..');

    const index = ideas.indexOf(idea);
    ideas.splice(index, 1);

    res.send(idea);
};