import Link from 'next/link'
import Users from '@/components/admin/users';
import Dates from '@/components/admin/dates';
import Reservations from '@/components/admin/reservations';
import Packages from '@/components/admin/packages';

export default function Admin() {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
        <div className="container">
            <Link  className="navbar-brand d-flex align-items-center" href="/">
            <span>Admin</span>
            </Link>
            <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <Link  className="nav-link" href="#users">Users</Link>
                </li>
                <li className="nav-item">
                <Link  className="nav-link" href="#dates">Available dates</Link>
                </li>
                <li className="nav-item">
                <Link  className="nav-link" href="#reservations">Reservations</Link>
                </li>
                <li className="nav-item">
                <Link  className="nav-link" href="#packages">Packages</Link>
                </li>
                <li className="nav-item">
                <Link  className="nav-link" href="/signup">Sign up</Link>
                </li>
            </ul>
            <Link  className="btn btn-primary shadow" role="button" href="/">Home page</Link>
            </div>
        </div>
        </nav>
        <hr id='users' style={{display: "none"}}></hr>
        <Users />
        <hr id='dates'></hr>
        <Dates />
        <hr id='reservations'></hr>
        <Reservations />
        <hr id='packages'></hr>
        <Packages />
    </>
  )
}
