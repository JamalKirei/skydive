import { useState, useEffect } from "react";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [dates, setDates] = useState([]);
  const [editedreservation, seteditedreservation] = useState({});
  const [savebutton,setsavebutton]=useState(false)
  useEffect(() => {
    fetchData();
    fetchDataDates();
  }, []);

  async function fetchData() {
    const response = await fetch('/api/reservation/getAll');
    const data = await response.json();
    setReservations(data.data);
  }
  async function fetchDataDates() {
    const response = await fetch('/api/dates/getAll');
    const data = await response.json();
    setDates(data.data);
  }


  const handleReservationStatusChange = (e, id) => {
    const matchingReservation = reservations.filter((r) => r._id === id)[0];
    seteditedreservation({
      ...matchingReservation,
      ReservationStatus: e.target.value
    });
    setsavebutton(true);
  };
  
  const handlePaymentStatusChange = (e, id) => {
    const matchingReservation = reservations.filter((r) => r._id === id)[0];
    seteditedreservation({
      ...matchingReservation,
      paymentStatus: e.target.value
    });
    setsavebutton(true);
  };
  async function handleSaveReservation() {
    const response = await fetch('/api/reservation/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedreservation)
    });
    const data = await response.json();
    if (data.success) {
      const updatedReservations = reservations.map(r => {
        if (r._id === id) {
          return editedreservation;
        }
        return r;
      });
      setReservations(updatedReservations);
      seteditedreservation({});
      setsavebutton(false)
    }
  };

  async function handleDeleteReservation(id){
    const response = await fetch(`/api/reservation/remove/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
      .then(() => {
        const updatedReservations = reservations.filter((r) => r._id !== id);
        setReservations(updatedReservations);
      })
      .catch((error) => console.error(error));
  };

  return (
<div className="container">
  <h1>Reservations</h1>
  <div className="row">
    {reservations && reservations.map((reservation) => (
      <div className="col-md-4 mb-4" key={reservation._id}>
        <div className="card">
          <div className="card-body">
          <p className="card-text"><strong>Name:</strong> {reservation.ClientName}</p>
          <p className="card-text"><strong>Email:</strong> {reservation.ClientEmail}</p>
            <p className="card-text"><strong>Phone:</strong> {reservation.ClientPhone}</p>
          <p className="card-text"><strong>Age:</strong> {reservation.ClientAge}</p>
            <p className="card-text"><strong>Message:</strong> {reservation.ClientMessage}</p>
            <p className="card-text"><strong>Package:</strong> {reservation.PackageID}</p>
            <p className="card-text"><strong>Date:</strong> {
            dates.map(date => { if (date._id==reservation.ReservationDate){return  date.date }}
            )}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="card-text"><strong>Reservation Status:</strong></p>
                <select
                  className="form-select"
                  value={reservation.ReservationStatus}
                  onChange={(e) => handleReservationStatusChange(e, reservation._id)}
                >
                  <option value="pending" selected={reservation.ReservationStatus === 'pending'}>Pending</option>
                  <option value="approved" selected={reservation.ReservationStatus === 'approved'}>Approved</option>
                  <option value="rejected" selected={reservation.ReservationStatus === 'rejected'}>Rejected</option>
                </select>
              </div>
              <div>
                <p className="card-text"><strong>Payment Status:</strong></p>
                <select
                  className="form-select"
                  value={reservation.paymentStatus}
                  onChange={(e) => handlePaymentStatusChange(e, reservation._id)}
                >
                  <option value="not paid" selected={reservation.paymentStatus === 'not paid'}>Not Paid</option>
                  <option value="paid" selected={reservation.paymentStatus === 'paid'}>Paid</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
              {savebutton && editedreservation._id === reservation._id && (
                <button className="btn btn-primary mr-2" onClick={() => handleSaveReservation()}>
                  Save
                </button>
              )}
              <button className="btn btn-danger" onClick={() => handleDeleteReservation(reservation._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Reservations;