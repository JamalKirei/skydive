import  clientPromise  from "../../../lib/mongodb";

export default async function addReservation(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { PackageID, ReservationDate, ClientName, ClientAge, ClientEmail , ClientPhone , ClientMessage} = req.body;
  
    if (!ReservationDate || !ClientName || !ClientAge || !ClientEmail) {
        console.log("adding..")
      return res.status(400).json({ error: "Missing required parameter(s)" });
    }
  
    const client = await clientPromise;
  
    try {
      const result = await client.db().collection("reservations").insertOne({
        PackageID,
        ReservationDate,
        ClientName,
        ClientAge,
        ClientEmail,
        ClientPhone,
        ClientMessage,
        ReservationStatus: "pending",
        paymentStatus: "not paid",
      });
      return res.status(200).json({ success: true, data: result.ops[0] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
  