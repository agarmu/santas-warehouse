import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_NAME } = process.env;

if (!MONGODB_URI) {
  throw new Error('Mongodb URI is not specified');
}
if (!MONGODB_NAME) {
  throw new Error('Database name is not specified');
}

let cached = global.mongo;
if (!cached) {
  cached = global.mongo = {}; // eslint-disable-line
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const conn = {};
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = MongoClient.connect(MONGODB_URI, opts)
      .then((client) => {
        conn.client = client;
        return client.db(MONGODB_NAME);
      })
      .then((db) => {
        conn.db = db;
        cached.conn = conn;
      });
  }
  await cached.promise;
  return cached.conn;
}
