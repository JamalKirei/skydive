import  clientPromise   from "../../../lib/mongodb";

export default async function getAllDates(req, res) {
  if (req.method === "GET") {
    const client = await clientPromise;

    try {
      const result = await client.db().collection("dates").find().toArray();
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
