import  clientPromise  from "../../../lib/mongodb";

export default async function addUser(req, res) {
  
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username , password } = req.body;
  const newUser = {
    username,
    password,
  };

  // Here we'll store the user in localStorage
  localStorage.setItem('user', JSON.stringify(newUser));

  if (!username || !password) {
    return res.status(400).json({ error: "Missing required parameters: username or password" });
  }

  const client = await clientPromise;

  try {
    const result = await client.db().collection("users").insertOne({ username , password });
    return res.status(200).json({ success: true, data: result.ops[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
