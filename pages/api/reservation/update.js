import  clientPromise  from "../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default async function updateReservation(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = new ObjectId(req.body._id);

  if (!id) {
    return res.status(400).json({ error: "Missing required parameter: id" });
  }
  const {paymentStatus, ReservationStatus} = req.body;
  const client = await clientPromise;

  try {
    const result = await client.db().collection("reservations").updateOne(
      { _id: id },
      {
        $set: {
            ReservationStatus:ReservationStatus,
            paymentStatus:paymentStatus,
        }
      }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
