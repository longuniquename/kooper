const seneca = require('seneca');
const mongo = require('mongodb').MongoClient;

const mongoHost = process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost';
const mongoPort = process.env.MONGO_PORT_27017_TCP_PORT || 30041;

const mongoConnection = mongo.connect(`mongodb://${mongoHost}:${mongoPort}`);

seneca()
    .use('./plugins/find', { mongoConnection })
    .listen();
