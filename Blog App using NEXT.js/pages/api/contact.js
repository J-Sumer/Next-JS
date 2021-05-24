function handler(req, res) {
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
    console.log(message);

    res.status(200).json({ message: "Success" });
  }
}

export default handler;
