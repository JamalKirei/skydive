import  clientPromise  from "../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default async function updatePackage(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = new ObjectId(req.body._id);

  if (!id) {
    return res.status(400).json({ error: "Missing required parameter: id" });
  }
  const { PackageName,PackagePrice, PackageDescription } = req.body;
  const client = await clientPromise;

  try {
    const result = await client.db().collection("packages").updateOne(
      { _id: id },
      {
        $set: {
          PackageName,
          PackagePrice,
          PackageDescription
        }
      }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "package not found" });
    }
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
