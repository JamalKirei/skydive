import  clientPromise  from "../../../lib/mongodb";

export default async function addDate(req, res) {
  
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { date } = req.body;

  if (!date) {
    return res.status(400).json({ error: "Missing required parameter: Date" });
  }

  const client = await clientPromise;

  try {
    const result = await client.db().collection("dates").insertOne({ date });
    return res.status(200).json({ success: true, data: result.ops[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
