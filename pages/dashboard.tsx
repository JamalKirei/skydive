import Link from 'next/link'
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import unsetuser from '@/lib/auth/unsetuser';
import authenticate from '@/lib/auth/authenticate'

export default function Admin() {
    const router = useRouter();
    const [user,setUser] = useState({})
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
      getinfo()
    }, []);
    async function getinfo(){
      const user= await authenticate();
      if(user!==null){
        setUser(user)
      } else{
        router.push('/login')
      }
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!(newPassword == confirmNewPassword)){
        setError('the new password and confrimation did not match :)');
      }else {
      try {
        const response = await fetch('/api/user/update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username:user.username, currentPassword, newPassword })
        });
        const data = await response.json();
  
        if (response.ok) {
          setSuccess(true);
        } else {
          setError(data.error || 'Failed to update password:((');
        }
      } catch (error) {
        setError('Something went wrong :(');
      }}
    };
  return (
    <>
    <Navbar />
          <h3 className='align-center'>Welcome  { user.username }</h3>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="current-password">Current password:</label>
        <input type="password" className="form-control" id="current-password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="new-password">New password:</label>
        <input type="password" className="form-control" id="new-password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="new-password">Confirm new password:</label>
        <input type="password" className="form-control" id="confrim-password" value={confirmNewPassword} onChange={(event) => setConfirmNewPassword(event.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary" >Update Password</button>
      {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
      {success && <div className="alert alert-success mt-3" role="alert">Password updated successfully</div>}
    </form>

    <Footer />
    </>
  )
}
