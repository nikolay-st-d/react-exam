import { useNavigate } from 'react-router';
import { useLogout } from '../../apiHooks/authHooks';
import { useContext, useEffect } from 'react';
import { userContext } from '../../contexts/userContext';

export default function Logout() {

    const { userLogoutHandler } = useContext(userContext);    

    const {logout} = useLogout();

    const navigate = useNavigate();

    useEffect(() => {
        logout(); // logout from server
        userLogoutHandler(); // set client user state
        navigate('/');
    }, []);

    return (
        <>
            <h2>Logout</h2>
        </>
    );
}
