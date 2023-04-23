import clientPromise from "../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default async function updateUser(req, res) {
  if (req.method === "POST") {
    const username = req.body.username;
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    if (!username || !currentPassword || !newPassword) {
      res.status(400).json({ error: "Missing required parameter: username, currentPassword, or newPassword" });
      return;
    }

    const client = await clientPromise;
    const db = client.db();

    try {
      const user = await db.collection("users").findOne({ username });
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      if (user.password !== currentPassword) {
        res.status(401).json({ error: "Incorrect password" });
        return;
      }

      const result = await db.collection("users").updateOne(
        { username },
        { $set: { password: newPassword } }
      );
      if (result.modifiedCount === 1) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ error: "Failed to update password" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
