import clientPromise from "../../../lib/mongodb";

export default async function login(req, res) {
  const { username, password } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection("users").findOne({ username });

    if (!user || user.password !== password) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
