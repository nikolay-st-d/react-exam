import { useContext } from 'react';
import { Navigate } from 'react-router';
import { userContext } from '../../contexts/userContext';

export default function PrivateRoute({ children }) {
    const context = useContext(userContext);

    if (!context.isLoggedIn()) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
