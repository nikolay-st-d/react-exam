import { useContext } from 'react';
import { Link } from 'react-router';
import { userContext } from '../../contexts/userContext';
import User from '../user/User';

export default function Header() {
    const { email } = useContext(userContext);

    return (
        <header>
            <Link to='/' className='logo'>
                <h1>OMS</h1>
            </Link>
            <div>
                <User />
                <nav>
                    <ul>
                        <li><Link to='/orders'>Orders</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
