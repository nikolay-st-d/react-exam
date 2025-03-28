import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import orderService from '../../services/orderService';

export default function OrderEdit() {
    const { orderId } = useParams();

    const navigate = useNavigate();

    const [order, setOrder] = useState({});

    useEffect(() => {
        orderService.getOne(orderId).then(setOrder);
    }, [orderId]);

    const orderSaveAction = async (formData) => {
        const orderData = Object.fromEntries(formData);

        await orderService.update(orderId, orderData);

        // TODO: Implement Error handling with try/catch to check if the 
        // update was successful or not and navigate ONLY in case everything went fine

        navigate('/orders');
    };

    return (
        <div className='edit-order'>
            <h2>Edit Order</h2>

            <form id='createOrder' action={orderSaveAction}>
                <div>
                    <label htmlFor='customerName'>Customer Name</label>
                    <input
                        type='text'
                        id='customerName'
                        name='customerName'
                        placeholder='Customer Name'
                        defaultValue={order.customerName}
                    />
                </div>
                <div>
                    <label htmlFor='customerEmail'>Customer Email</label>
                    <input
                        type='email'
                        id='customerEmail'
                        name='customerEmail'
                        placeholder='Customer Email'
                        defaultValue={order.customerEmail}
                    />
                </div>
                <div>
                    <label htmlFor='customerPhone'>Customer Phone</label>
                    <input
                        type='phone'
                        id='customerPhone'
                        name='customerPhone'
                        placeholder='Customer Phone'
                        defaultValue={order.customerPhone}
                    />
                </div>
                <div>
                    <label htmlFor='customerCountry'>Customer Country</label>
                    <input
                        type='text'
                        id='customerCountry'
                        name='customerCountry'
                        placeholder='Customer Country'
                        defaultValue={order.customerCountry}
                    />
                </div>
                <div>
                    <label htmlFor='customerAddress'>Customer Address</label>
                    <input
                        type='text'
                        id='customerAddress'
                        name='customerAddress'
                        placeholder='Customer Address'
                        defaultValue={order.customerAddress}
                    />
                </div>
                <div>
                    <label htmlFor='orderDate'>Order Date</label>
                    <input
                        type='date'
                        id='orderDate'
                        name='orderDate'
                        placeholder='Order Date'
                        defaultValue={order.orderDate}
                    />
                </div>
                <div>
                    <label htmlFor='orderItems'>Order Items</label>
                    <input
                        type='text'
                        id='orderItems'
                        name='orderItems'
                        placeholder='Order Items'
                        defaultValue={order.orderItems}
                    />
                </div>
                <div>
                    <label htmlFor='orderTotal'>Order Total</label>
                    <input
                        type='text'
                        id='orderTotal'
                        name='orderTotal'
                        placeholder='Order Total'
                        defaultValue={order.orderTotal}
                    />
                </div>
                <div>
                    <label htmlFor='orderStatus'>Order Status</label>
                    <input
                        type='text'
                        id='orderStatus'
                        name='orderStatus'
                        placeholder='Order Status'
                        defaultValue={order.orderStatus}
                    />
                </div>
                <button>Save Order</button>
            </form>
        </div>
    );
}
