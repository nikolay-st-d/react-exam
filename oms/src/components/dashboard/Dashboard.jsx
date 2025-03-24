import { Link } from 'react-router';
import orderService from '../../services/orderService';
import { useEffect, useState } from 'react';
import OrderItem from './order/OrderItem';

export default function Dashboard() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        orderService.getAll().then((result) => setOrders(result));
    }),
        [];

    return (
        <div className='main-content-wrapper '>
            <div className='dashboard-header'>
                <h2>Orders</h2>
                <Link to='/orders/create'>
                    <i class='fa-solid fa-plus'></i> Add Order
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Order Date</th>
                        <th>Order Total</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => <OrderItem key={order._id} {...order} />)}
                </tbody>
            </table>
        </div>
    );
}
