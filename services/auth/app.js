var seneca = require('seneca');
var redis = require('redis');

const redisClient = redis.createClient(
    process.env.REDIS_PORT_6379_TCP_PORT || 30031,
    process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost'
);

seneca()
    .use('./plugins/login', { redisClient })
    .listen();
