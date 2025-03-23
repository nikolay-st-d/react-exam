import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <h1><Link to="/"><img className="logo" src={"../public/oms-logo.png"} alt={"oms"} /></Link></h1>
            <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
            </nav>
        </header>
    )
}