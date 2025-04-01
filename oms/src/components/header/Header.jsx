import { useContext } from 'react';
import { Link } from 'react-router';
import { userContext } from '../../contexts/userContext';
import User from '../user/User';

export default function Header() {
    const { accessToken } = useContext(userContext);

    return (
        <header>
            <Link to='/' className='logo'>
                <h1>OMS</h1>
            </Link>
            <div>
                <User />
                <nav>
                    <ul>
                        {accessToken ? (
                            <div>
                                <li>
                                    <Link to='/orders'>Orders</Link>
                                </li>
                                <li>
                                    <Link to='/logout'>Logout</Link>
                                </li>
                            </div>
                        ) : (
                            <div>
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/register'>Register</Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
