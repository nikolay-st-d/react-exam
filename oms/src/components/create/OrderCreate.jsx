import { useNavigate } from 'react-router';
import { useCreateOrder } from '../../apiHooks/orderHooks';

export default function CreateOrder() {
    const navigate = useNavigate();
    const { create } = useCreateOrder();

    const submitAction = async (formData) => {
        const orderData = Object.fromEntries(formData);

        try {
            await create(orderData);
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
                    required
                    type='text'
                    id='customerName'
                    name='customerName'
                    placeholder='Customer Name'
                />
                <input
                    required
                    type='email'
                    id='customerEmail'
                    name='customerEmail'
                    placeholder='Customer Email'
                />
                <input
                    required
                    type='phone'
                    id='customerPhone'
                    name='customerPhone'
                    placeholder='Customer Phone'
                />
                <input
                    required
                    type='text'
                    id='customerCountry'
                    name='customerCountry'
                    placeholder='Customer Country'
                />
                <input
                    required
                    type='text'
                    id='customerAddress'
                    name='customerAddress'
                    placeholder='Customer Address'
                />
                <input
                    required
                    type='date'
                    id='orderDate'
                    name='orderDate'
                    placeholder='Order Date'
                />
                <input
                    required
                    type='text'
                    id='orderItems'
                    name='orderItems'
                    placeholder='Order Items'
                />
                <input
                    required
                    type='text'
                    id='orderTotal'
                    name='orderTotal'
                    placeholder='Order Total'
                />
                <input
                    required
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
