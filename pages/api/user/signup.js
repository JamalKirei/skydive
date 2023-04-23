import  clientPromise  from "../../../lib/mongodb";

export default async function Signup(req, res) {
  const { username, password } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db();

    // Check if user with the given username already exists
    const existingUser = await db.collection("users").findOne({ username });

    if (existingUser) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }

    // Create a new user document and insert it into the database
    const newUser = { username, password };
    const result = await db.collection("users").insertOne(newUser);

    return res.status(200).json({ success: true, data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
