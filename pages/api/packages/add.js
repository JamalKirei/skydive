import  clientPromise  from "../../../lib/mongodb";

export default async function addPackage(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { PackageName, PackagePrice, PackageDescription } = req.body;
  
    if (!PackageName || !PackagePrice || !PackageDescription ) {
      return res.status(400).json({ error: "Missing required parameter(s)" });
    }
  
    const client = await clientPromise;
  
    try {
      const result = await client.db().collection("packages").insertOne({
        PackageName,
        PackagePrice,
        PackageDescription
      });
      return res.status(200).json({ success: true, data: result.ops[0] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
  