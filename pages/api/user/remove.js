
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function removeUser(req, res) {
  if (req.method === "POST") {
    const id = new ObjectId(req.body.id);
    if (!id) {
      res.status(400).json({ error: "Missing required parameter: id" });
      return;
    }

    const client = await clientPromise;

    try {
      const result = await client.db().collection("users").deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ error: "Type not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
