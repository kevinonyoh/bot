const redis = require("redis");

const client = await redis.createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

module.exports = client;

