let controller = require('./controller');

module.exports = function(router) {
    router.get('/', controller.index);
    router.get('/idea', controller.idea);
    // API
    router.get('/api/ideas', controller.getIdeas);
    router.get('/api/ideas/:id', controller.getIdea);
    router.post('/api/ideas', controller.postIdea);
    router.put('/api/ideas/:id', controller.putIdea);
    router.delete('/api/ideas/:id', controller.deleteIdea);
};