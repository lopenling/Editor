import { Redis } from "@upstash/redis";
declare global {
  var __redis: Redis;
}
let redis: Redis;
// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the Redis with every change either.

function getUrl() {
  if (process.env.UPSTASH_REDIS_REST_URL) {
    return process.env.UPSTASH_REDIS_REST_URL;
  }
  throw new Error("Upstash redis rest url not present");
}
function getToken() {
  if (process.env.UPSTASH_REDIS_REST_TOKEN) {
    return process.env.UPSTASH_REDIS_REST_TOKEN;
  }
  throw new Error("Upstash redis rest url not present");
}
if (process.env.NODE_ENV === "production") {
  redis = new Redis({
    url: getUrl(),
    token: getToken(),
  });
} else {
  if (!global.__redis) {
    global.__redis = new Redis({
      url: getUrl(),
      token: getToken(),
    });
  }
  redis = global.__redis;
}

export { redis };
