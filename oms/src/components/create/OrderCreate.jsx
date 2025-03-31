import { useNavigate } from 'react-router';

import orderService from '../../services/orderService';

export default function CreateOrder() {
    const navigate = useNavigate();

    const submitAction = async (formData) => {
        const orderData = Object.fromEntries(formData);

        try {
            await orderService.create(orderData);
            navigate('/orders');
        } catch (error) {
            alert('ORDER NOT CREATED! Error: ' + error);
        }

    };

    return (
        <div className='create-order'>
            <h2>Add Order</h2>

            <form id='createOrder' action={submitAction}>
                <input
                    type='text'
                    id='customerName'
                    name='customerName'
                    placeholder='Customer Name'
                />
                <input
                    type='email'
                    id='customerEmail'
                    name='customerEmail'
                    placeholder='Customer Email'
                />
                <input
                    type='phone'
                    id='customerPhone'
                    name='customerPhone'
                    placeholder='Customer Phone'
                />
                <input
                    type='text'
                    id='customerCountry'
                    name='customerCountry'
                    placeholder='Customer Country'
                />
                <input
                    type='text'
                    id='customerAddress'
                    name='customerAddress'
                    placeholder='Customer Address'
                />
                <input
                    type='date'
                    id='orderDate'
                    name='orderDate'
                    placeholder='Order Date'
                />
                <input
                    type='text'
                    id='orderItems'
                    name='orderItems'
                    placeholder='Order Items'
                />
                <input
                    type='text'
                    id='orderTotal'
                    name='orderTotal'
                    placeholder='Order Total'
                />
                <input
                    type='text'
                    id='orderStatus'
                    name='orderStatus'
                    placeholder='Order Status'
                />
                <button>Add Order</button>
            </form>
        </div>
    );
}
