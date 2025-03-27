import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <Link to="/" className='logo'><h1>OMS</h1></Link>
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