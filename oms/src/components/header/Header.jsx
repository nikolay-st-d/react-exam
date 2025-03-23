import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <h1>OMS</h1>
            <nav>
            <ul>
                <li><Link to="/"><i class="fa-solid fa-house"></i></Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
            </nav>
        </header>
    )
}