import { Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Logout from './components/logout/Logout';
import OrderCreate from './components/create/OrderCreate';
import OrderDetails from './components/order-details/orderDetails';
import OrderEdit from './components/order-edit/OrderEdit';

import './styles.css';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState({});

    const userLoginHandler = (userData) => {
        setUser(userData);
    };

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login onLogin={userLoginHandler} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/orders' element={<Dashboard />} />
                    <Route
                        path='/orders/:orderId/details'
                        element={<OrderDetails />}
                    />
                    <Route
                        path='/orders/:orderId/edit'
                        element={<OrderEdit />}
                    />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='orders/create' element={<OrderCreate />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
