const { MongoClient } = require("mongodb");

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid Data" });
    }

    const messages = { email, name, message };
    let client = null;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://User1:gdPtRLkfXbChAoDB@nextjs.szxqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Failed to connect database" });
      return;
    }

    const db = client.db();

    try {
      db.collection("messages").insertOne(messages);
    } catch (error) {
      client.close();
      res.return(450).json({ message: "Failed to insert data" });
      return;
    }

    client.close();

    res.status(200).json({ message: "successfuly added a record" });
  }
}

export default handler;
