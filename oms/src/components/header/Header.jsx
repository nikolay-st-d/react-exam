import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <h1>OMS <span class="h1-small"> Order Management System</span></h1>
            <nav>
            <ul>
                <li><Link to="/"><i class="fa-solid fa-house"></i></Link></li>
                <li><Link to="#">Login</Link></li>
                <li><Link to="#">Profile</Link></li>
                <li><Link to="help">Help</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>
            </nav>
        </header>
    )
}