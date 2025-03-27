import { Routes, Route } from 'react-router';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Logout from './components/logout/Logout';
import CreateOrder from './components/create/createOrder';
import OrderDetails from './components/order-details/orderDetails';

import './styles.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/orders' element={<Dashboard />} />
                    <Route path='/orders/:orderId/details' element={<OrderDetails />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='orders/create' element={<CreateOrder />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
