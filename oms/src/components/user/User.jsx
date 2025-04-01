import { useContext } from 'react';
import { userContext } from '../../contexts/userContext';
import './user.css';

export default function User() {
    const { email } = useContext(userContext);

    return (
        <>
            {email
            ? (<div className='user'><i class='fa-solid fa-user'></i> {email} </div>)
                : ('')
                }
        </>
    );
}
