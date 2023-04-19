import  clientPromise   from "../../../lib/mongodb";

export default async function Login(req, res) {
    
  if (req.method === "POST") {

    const client = await clientPromise;

    const { username , password } = req.body;
    try {
      const result = await client.db().collection("users").find().toArray();
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
