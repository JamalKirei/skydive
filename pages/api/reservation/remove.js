import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const id = new ObjectId(req.body.id);

  if (!id) {
    return res.status(400).json({ error: "Missing required parameter: id" });
  }

  const client = await clientPromise;

  try {
    const result = await client.db().collection("reservations").deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
