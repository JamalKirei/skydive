import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('/api/user/getAll');
    const data = await response.json();
    setUsers(data.data);
  }

  async function handleDelete(id) {
    const response = await fetch('/api/user/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    const data = await response.json();
    if (data.success) {
      const updatedUsers = users.filter(user => user._id !== id);
      setUsers(updatedUsers);
    }
  }

  return (
    <div className="container">
      <h5>Users</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>
              {user.username !=="admin" ? <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
              :<></>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
