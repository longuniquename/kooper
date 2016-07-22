var seneca = require('seneca');

seneca()
    .use('./plugins/check')
    .listen();
