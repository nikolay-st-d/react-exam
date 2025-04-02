import { Link } from 'react-router';
import OrderItem from './order/OrderItem';
import { useAllOrders } from '../../apiHooks/orderHooks';
import { useContext } from 'react';
import { userContext } from '../../contexts/userContext';

export default function Dashboard() {
    const { _id } = useContext(userContext);

    const { orders } = useAllOrders();    

    const filteredOrders = orders.filter((order) => order._ownerId == _id);    

    return (
        <div className='main-content-wrapper '>
            <div className='dashboard-header'>
                <h2>Orders</h2>
                <Link to='/orders/create' title='Add order to OMS'>
                    <i className='fa-solid fa-plus'></i> Add Order
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order) => (
                        <OrderItem key={order._id} {...order} />
                    ))}
                </tbody>
            </table>
            <p>{orders.length === 0 ? "You don't have any orders." : ''}</p>
        </div>
    );
}
