import { connectDB, insertDocument } from "../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "inavlid email" });
      return;
    }
    let client;
    try {
      client = await connectDB();
    } catch (e) {
      res.status(500).json({ message: "connecting to the database failed" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: email });
    } catch (e) {
      res.status(500).json({ message: "inserting data failed" });
      return;
    }
    console.log(email);
    res.status(201).json({ message: "signed up" });
    client.close();
  }
}

export default handler;
