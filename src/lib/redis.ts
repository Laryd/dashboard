import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-master-dassie-41156.upstash.io",
  token: process.env.REDIS_KEY!,
});


