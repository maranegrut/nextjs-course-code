import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const url =
    "mongodb+srv://mara:falconS23@cluster0.3xrba.mongodb.net/events?retryWrites=true&w=majority";
  const client = await MongoClient.connect(url);
  return client;
};

export const insertDocument = async (client, collection, doc) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(doc);
  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
};
