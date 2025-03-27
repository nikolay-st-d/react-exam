import { useState, useEffect } from 'react';
import orderService from '../../services/orderService';
import { Link, useNavigate, useParams } from 'react-router';

export default function OrderDetails(id) {
    const { orderId } = useParams();

    const navigate = useNavigate();

    const [order, setOrder] = useState({});

    useEffect(() => {
        orderService.getOne(orderId).then(setOrder);
    }, [orderId]);

    const orderDeleteClickHandler = async () => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this order? This operation is not reversible!'
        );

        if (!confirmDelete) {
            return;
        }

        await orderService.delete(orderId);
        navigate('/orders');
    };

    return (
        <>
            <h3>ORDER DETAILS</h3>
            <div className='order-details'>
                <div>
                    <strong>Name:</strong> {order.customerName}
                </div>
                <div>
                    <strong>Email:</strong> {order.customerEmail}
                </div>
                <div>
                    <strong>Phone:</strong> {order.customerPhone}
                </div>
                <div>
                    <strong>Country:</strong> {order.customerCountry}
                </div>
                <div>
                    <strong>Address:</strong> {order.customerAddress}
                </div>
                <div>
                    <strong>Date:</strong> {order.orderDate}
                </div>
                <div>
                    <strong>Items:</strong> {order.orderItems}
                </div>
                <div>
                    <strong>Total:</strong> {order.orderTotal}
                </div>
                <div>
                    <strong>Status:</strong> {order.orderStatus}
                </div>
                <div>
                    <strong>Order ID:</strong> {order._id}
                </div>
                <div className='order-details-buttons'>
                    <Link className='order-details-button' to={'/orders'}>
                        <i className='fa-solid fa-reply-all'></i> ALL ORDERS
                    </Link>

                    <Link
                        className='order-details-button'
                        to={'/orders/' + order._id + '/edit'}
                    >
                        <i className='fa-solid fa-pen-to-square'></i> EDIT
                    </Link>

                    <div
                        onClick={orderDeleteClickHandler}
                        className='order-details-button'
                    >
                        <i className='fa-solid fa-trash'></i> DELETE
                    </div>
                </div>
            </div>
        </>
    );
}
