const express = require('express');

module.exports = () => {
    const app = express();

    app.set('view engine', 'pug');
    app.set('views', './views');

    app.use(express.json());
    
    app.use('/css', express.static('./public/css'));
    app.use('/js', express.static('./public/js'));
    app.use('/img', express.static('./public/images'));

    return app;
};