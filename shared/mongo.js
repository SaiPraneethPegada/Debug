const { MongoClient } = require("mongodb");

const log = require("./log");

module.exports = {
  db: null, // DB Connection String

  posts: null, // Posts Collection
  users: null, // Users Collection

  async connect() {
    try {
      // Connecting to Mongo
      const client = new MongoClient("mongodb://localhost:27017");
      await client.connect();
      log("Mongo connected successfully");

      // Selecting the DB
      this.db = await client.db(guvi);
      log(`Mongo database selected - ${guvi}`);

      this.posts = await this.db.collection("posts");
      this.users = await this.db.collection("users");
      log("Mongo collections initialized");
    } catch (err) {
      throw new Error(err);
    }
  },
};
