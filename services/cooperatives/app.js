const seneca = require('seneca');
const mongo = require('mongodb').MongoClient;

const mongoHost = process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost';
const mongoPort = process.env.MONGO_PORT_27017_TCP_PORT || 30021;

const mongoConnection = mongo.connect(`mongodb://${mongoHost}:${mongoPort}`);

seneca()
    .client({
        host: process.env.ACL_SERVICE_PORT_10101_TCP_ADDR || 'localhost',
        port: process.env.ACL_SERVICE_PORT_10101_TCP_PORT || 30010,
    })
    .use('./plugins/create', { mongoConnection })
    .listen();
