import { useNavigate } from 'react-router';

import orderService from '../../services/orderService';

export default function CreateOrder() {
    const navigate = useNavigate();

    const submitAction = async (formData) => {
        const orderData = Object.fromEntries(formData);

        await orderService.create(orderData);

        // TODO: Implement Error handling with try/catch to check if the 
        // creation was successful or not and navigate ONLY in case everything went fine

        navigate('/orders');
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
                    type='date'
                    id='orderDate'
                    name='orderDate'
                    placeholder='Order Date'
                />
                <input
                    type='number'
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
