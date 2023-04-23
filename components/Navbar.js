import Link from 'next/link';
import {useState , useEffect} from 'react';
import unsetuser from '@/lib/auth/unsetuser';
import authenticate from '@/lib/auth/authenticate'
import { useRouter } from 'next/router';
const Navbar = () => {
  const router=useRouter();
  const [user,setUser]=useState();
  const [dashboard,setdashboard]=useState(true);
  useEffect(() => {
    getinfo()
  }, []);
  async function getinfo(){
    const user= await authenticate();
    if(user!==null){
      setUser(user)
      setdashboard(false)
    }
  }
  return (
<nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
  <div className="container">
    <Link  className="navbar-brand d-flex align-items-center" href="/">
      <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
          
        </svg>
      </span>
      <span>Skyadv</span>
    </Link>
    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
      <span className="visually-hidden">Toggle navigation</span>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navcol-1">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link  className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" href="/prices">Prices</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" href="/experiences">Experiences</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" href="/contact">Contact</Link>
        </li>
        {dashboard ? <></> : <li className="nav-item">
          <Link href="/dashboard"  className="nav-link" >Dashboard</Link>
        </li>}
        {!dashboard && user && user.username=="admin" ?<li className="nav-item">
          <Link href="/admin"  className="nav-link" >admin panel</Link>
        </li>: <></>}
        <li className="nav-item">
          {dashboard ? <Link  className="nav-link" href="/signup">Sign up</Link> : <Link href=""  className="nav-link" onClick={() => (unsetuser() , router.push('/login'))}>Sign out</Link>}
        </li>
      </ul>
      <Link  className="btn btn-primary shadow" role="button" href="/book">Book Now</Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
