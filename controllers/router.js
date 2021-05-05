let controller = require('./controller');

module.exports = function(router) {
    router.get('/', controller.index);
    router.get('/idea', controller.idea);
};