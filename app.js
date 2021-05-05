const app = require('./bin/express')();
const router = require('./bin/express-router')();

require('./controllers/router')(router);

app.use('/', router);

const port = process.env.PORT || 9876;
const server = app.listen(port, () => console.log(`Express running → PORT ${server.address().port}`));