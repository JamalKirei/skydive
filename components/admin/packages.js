import { useState, useEffect } from "react";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [newpackage, setnewpackage] = useState({});
  const [editpackage, seteditpackage] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('/api/packages/getAll');
    const data = await response.json();
    setPackages(data.data);
  }
  async function addPackage() {
    console.log(newpackage)
    const response = await fetch('/api/packages/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( newpackage )
    });
    const data = await response.json();
    setPackages([...packages, newpackage]);
    setnewpackage({});
    setShowAddModal(false)
  }

  async function handleUpdate() {
    const response = await fetch('/api/packages/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editpackage)
    });
    const data = await response.json();
    if (data.success) {
      const updatedPackages = packages.map(p => {
        if (p._id === editpackage._id) {
          return editpackage;
        }
        return p;
      });
      setPackages(updatedPackages);
      seteditpackage({});
      setShowUpdateModal(false)
    }
  }

  async function removePackage(id){
    const response = await fetch('/api/packages/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      const data = await response.json();
      if (data.success) {
        const updatedPackages = packages.filter(p => p._id !== id);
        setPackages(updatedPackages);
      }

  };

  return (
<div class="card">
  <div class="card-body">
    <h1 class="card-title">Packages</h1>
    <button class="btn btn-primary" onClick={()=>setShowAddModal(true)} >add Package</button>

          {/* Add Date Modal */}
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: showAddModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Package</h5>
              <button type="button" className="close" onClick={() => setShowAddModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                    <div class="mb-3">
                        <label class="form-label">Package Name:</label>
                        <input type="text" class="form-control"  onChange={(e) => setnewpackage({...newpackage,PackageName:e.target.value})} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Package Price:</label>
                        <input type="text" class="form-control" onChange={(e) => setnewpackage({...newpackage,PackagePrice:e.target.value})} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Package Description:</label>
                        <textarea class="form-control"  onChange={(e) => setnewpackage({...newpackage,PackageDescription:e.target.value})} />
                    </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Close</button>
              <button type="button" className="btn btn-primary" onClick={addPackage}>Add package</button>
            </div>
          </div>
        </div>
      </div>
            {/* Update Date Modal */}
            {editpackage && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: showUpdateModal ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Package</h5>
                <button type="button" className="close" onClick={() => setShowUpdateModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <div className="form-group">
                    <div class="mb-3">
                        <label class="form-label">Package Name:</label>
                        <input type="text" class="form-control" value={editpackage.PackageName}   onChange={(e) => seteditpackage({...editpackage,PackageName:e.target.value})} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Package Price:</label>
                        <input type="text" class="form-control" value={editpackage.PackagePrice} onChange={(e) => seteditpackage({...editpackage,PackagePrice:e.target.value})} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Package Description:</label>
                        <textarea class="form-control"  value={editpackage.PackageDescription} onChange={(e) => seteditpackage({...editpackage,PackageDescription:e.target.value})} />
                    </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowUpdateModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => handleUpdate()}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

        <h2>All Packages</h2>
        <div class="card-group">
        {packages && packages.map((pkg) => (
            <div class="card" key={pkg._id}>
            <div class="card-body">
                <h5 class="card-title">{pkg.PackageName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{pkg.PackagePrice}</h6>
                <p class="card-text">{pkg.PackageDescription}</p>
                <button type="button" class="btn btn-secondary" onClick={() => (seteditpackage(pkg), setShowUpdateModal(true))}>Edit</button>
                <button type="button" class="btn btn-danger" onClick={() => removePackage(pkg._id)}>Delete</button>
            </div>
            </div>
        ))}
        </div>

  </div>
</div>

  );
}

export default Packages;
