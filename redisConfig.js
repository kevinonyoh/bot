const redis = require("redis");


async function clientFunction(){
    const client = redis.createClient({
        url: process.env.REDIS_PORT
    })
    
    client.connect();
    return client;
}


module.exports = clientFunction;

