import { useState, useEffect } from 'react';
import orderService from '../../services/orderService';
import { Link, useParams } from 'react-router';

export default function OrderDetails(id) {
    const { orderId } = useParams();

    const [order, setOrder] = useState({});

    useEffect(() => {
        const orderData = orderService.getOne(orderId).then(setOrder);
    }, [orderId]);

    return (
        <>
            <h3>ORDER DETAILS</h3>
            <div className='order-details'>
                <div><strong>Name:</strong> {order.customerName}</div>
                <div><strong>Email:</strong> {order.customerEmail}</div>
                <div><strong>Phone:</strong> {order.customerPhone}</div>
                <div><strong>Country:</strong> {order.customerCountry}</div>
                <div><strong>Address:</strong> {order.customerAddress}</div>
                <div><strong>Date:</strong> {order.orderDate}</div>
                <div><strong>Items:</strong> {order.orderItems}</div>
                <div><strong>Total:</strong> {order.orderTotal}</div>
                <div><strong>Status:</strong> {order.orderStatus}</div>
                <div><strong>Order ID:</strong> {order._id}</div>
            </div>
            <div className='order-details-buttons'>
                <Link className="order-details-button" to={'/orders/' + order._id + '/edit'}>
                    EDIT
                </Link>
                <Link className="order-details-button" to={'/orders/' + order._id + '/delete'}>
                    DELETE
                </Link>
            </div>
        </>
    );
}
