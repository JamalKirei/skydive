import Navbar from '@/components/Navbar';
import Footer from '@/components/footer'
import { useState, useEffect } from 'react';



export default function Book() {
    const [dates, setDates] = useState([]);
  
    useEffect(() => {
      fetchDataDates();
    }, []);
  
    async function fetchDataDates() {
      const response = await fetch('/api/dates/getAll');
      const data = await response.json();
      setDates(data.data);
    }
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const formData = new FormData(event.target as HTMLFormElement);
    
        const payload = {
          PackageID: formData.get("packageID"),
          ReservationDate: formData.get("ReservationDate"),
          ClientName: formData.get("Fullname"),
          ClientAge: formData.get("age"),
          ClientEmail: formData.get("email"),
          ClientPhone: formData.get("phone"),
          ClientMessage: formData.get("message"),
        };
        console.log(payload)
        async function handleAdd() {
          const response = await fetch("/api/reservation/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...payload})
          });
          const data = await response.json();
          alert("Reservation is sent successfully! we will call you !");
        }
    
        handleAdd()

    
      };
    
  return (
    <>
      <Navbar />
            <section className="py-5">
        <section className="py-4 py-xl-5">
            <div className="container">
            <div className="text-white bg-dark border rounded border-0 p-4 p-md-5">
                <h2 className="fw-bold text-white mb-3">Note</h2>
                <p className="mb-4">We provide two options for payment - either online or through the site. If you prefer to pay in advance online, kindly transfer the amount to our bank account (3157917398719) and include a reference below.</p>
            </div>
            </div>
        </section>
        <div className="container py-5">
            <section className="py-4 py-xl-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                    <div className="card mb-5">
                    <form onSubmit={handleSubmit}>
                    <div className="card-body p-sm-5" style={{"border":"1px solid var(--bs-blue)"}}>
                        <h2 className="text-center mb-4">Book your experience</h2><div><label className="form-label">choose package</label>
                        <div className="selectgroup selectgroup-pills">
                          <label className="selectgroup-item">
                            <input type="radio" name="packageID" value="1" className="selectgroup-input" defaultChecked />
                            <span className="selectgroup-button">Handy-Cam Package - 300$</span></label>
                            <label className="selectgroup-item">
                              <input type="radio" name="packageID" value="2" className="selectgroup-input" />
                              <span className="selectgroup-button">Camera Flyer Package - 650$</span>
                              </label><label className="selectgroup-item">
                                <input type="radio" name="packageID" value="3" className="selectgroup-input" />
                                <span className="selectgroup-button">tota Flyer Package - 650$</span></label>
                                <label className="selectgroup-item">
                                  <input type="radio" name="packageID" value="4" className="selectgroup-input" />
                                  <span className="selectgroup-button">Full Flyer Package - 650$</span></label>
                                  </div>
                        </div><label className="form-label" /><label className="form-label" /><select name='ReservationDate' className="form-select" htmlFor="floatinginput" placeholder="HGsOFT">
                        <optgroup label="Choose a date">
                            {
                                dates.map( date =>(
                                    <option value={date._id}>{new Date(date.date).toLocaleDateString()}</option>
                                )                            
                                )
                            }
                        </optgroup>
                        </select>
                        <div className="mb-3"><small>Name</small>
                            <div className="input-group"><span className="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person-fill">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg></span><input name="Fullname" className="form-control InputBorder" type="text" placeholder="Your full name" /></div>
                            </div>
                        <div className="mb-3"></div>
                        <div className="mb-3"><small>Age</small>
                        <div className="input-group"><span className="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-align-center">
                                                        <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"></path>
                                                    </svg></span><input name="age" className="form-control InputBorder" type="number" placeholder="your age" /></div>
                        </div>
                        <div className="mb-3"><small>Email</small>
                            <div className="input-group"><span className="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-envelope-fill">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg></span><input className="form-control InputBorder"  name="email" type="email" placeholder="Your e-mail" /></div>
                        </div>
                        <div className="mb-3"><small>Phone</small>
                            <div className="input-group"><span className="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-telephone-fill">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg></span><input className="form-control InputBorder" name="phone" type="phone" placeholder="Your phone number" /></div>
                        </div>
                        <div className="mb-3" />
                        <div className="mb-3"><textarea className="form-control" id="message-2" name="message" rows={6} placeholder="Additional note (payment reference if available )" defaultValue={""} /></div>
                        <div><button className="btn btn-primary d-block w-100" type="submit">Book now</button></div>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        </section>
      <Footer />
    </>
  )
}
