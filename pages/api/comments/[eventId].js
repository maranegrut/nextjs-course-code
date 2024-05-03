import {
  connectDB,
  insertDocument,
  getAllDocuments,
} from "../../helpers/db-util";

const handler = async (req, res) => {
  let client;
  try {
    client = await connectDB();
  } catch (e) {
    res.status(500).json({ message: "connecting to the database failed" });
    return;
  }

  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      client.close();
      return;
    }

    const newComment = { email, name, text, eventId };

    let result;
    try {
      result = await insertDocument(client, "newsletter", { newComment });
      newComment._id = result.insertedId;
      res.status(201).json({ message: "added comment", comment: newComment });
    } catch (e) {
      res.status(500).json({ message: "inserting data failed" });
    }

    console.log(result);
  }
  if (req.method === "GET") {
    let result;
    try {
      result = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: result });
    } catch (e) {
      res.status(500).json({ message: "getting comments failed" });
    }
  }
  client.close();
};

export default handler;
