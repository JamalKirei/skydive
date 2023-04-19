import { useState, useEffect } from 'react';

export default function Dates() {
  const [dates, setDates] = useState([]);
  const [newDate, setNewDate] = useState('');
  const [editDate, setEditDate] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('/api/dates/getAll');
    const data = await response.json();
    setDates(data.data);
  }

  async function handleAdd() {
    const response = await fetch('/api/dates/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: newDate })
    });
    const data = await response.json();
    setDates([...dates, data]);
    setNewDate('');
  }

  async function handleDelete(id) {
    const response = await fetch('/api/dates/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    const data = await response.json();
    if (data.success) {
      const updatedDates = dates.filter(date => date._id !== id);
      setDates(updatedDates);
    }
  }

  async function handleUpdate(id, updatedDate) {
    const response = await fetch('/api/dates/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, date: updatedDate })
    });
    const data = await response.json();
    if (data.success) {
      const updatedDates = dates.map(date => {
        if (date._id === id) {
          return { ...date, date: updatedDate };
        }
        return date;
      });
      setDates(updatedDates);
      setEditDate(null);
    }
  }

  return (
    <>
    <div className="container mt-5">
      <h5 className="mb-4">Available jumping dates</h5>
  
      {/* Add Date Modal */}
      <div className="modal" tabIndex="-1" role="dialog" style={{ display: showAddModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Date</h5>
              <button type="button" className="close" onClick={() => setShowAddModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="newDate">Date:</label>
                <input type="date" className="form-control" id="newDate" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleAdd}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Update Date Modal */}
      {editDate && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: showUpdateModal ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Date</h5>
                <button type="button" className="close" onClick={() => setShowUpdateModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="updatedDate">Date:</label>
                  <input type="date" className="form-control" id="updatedDate" value={editDate.date} onChange={(e) => setEditDate({ ...editDate, date: e.target.value })} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowUpdateModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => handleUpdate(editDate._id, editDate.date)}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
  
      <div className="row mb-3">
        <div className="col-sm-6">
          <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>Add Date</button>
        </div>
      </div>
  
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dates.map(date => (
            <tr key={date._id}>
              <td>{new Date(date.date).toLocaleDateString()}</td>
              <td>
              <button
            className="btn btn-primary mr-2"
            onClick={() => {
              setEditDate(date);
              setShowUpdateModal(true);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(date._id)}
          >
            Delete
          </button>
        </td>
        </tr>
        ))}
    </tbody>
    </table>
    <div/></div>
    </>
)
}