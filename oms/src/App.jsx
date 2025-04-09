import { Routes, Route } from 'react-router';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Logout from './components/logout/Logout';
import OrderCreate from './components/order-create/OrderCreate';
import OrderDetails from './components/order-details/orderDetails';
import OrderEdit from './components/order-edit/OrderEdit';
import PrivateRoute from './components/private-route/PrivateRoute';

import './styles.css';
import { userContext } from './contexts/userContext';

function App() {
    const [user, setUser] = useState({});

    const userLoginHandler = (userData) => {
        setUser(userData);
    };

    const userLogoutHandler = () => {
        setUser({});
    };

    const isLoggedIn = () => {
        return user && user.accessToken;
    };

    return (
        <userContext.Provider value={{ ...user, userLoginHandler, userLogoutHandler, isLoggedIn }}>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route
                        path='/orders'
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/orders/create'
                        element={
                            <PrivateRoute>
                                <OrderCreate />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/orders/:orderId/details'
                        element={
                            <PrivateRoute>
                                <OrderDetails />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/orders/:orderId/edit'
                        element={
                            <PrivateRoute>
                                <OrderEdit />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/logout'
                        element={
                            <PrivateRoute>
                                <Logout />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </main>
            <Footer />
        </userContext.Provider>
    );
}

export default App;
