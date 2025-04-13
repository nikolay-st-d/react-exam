import { useNavigate } from 'react-router';
import { useCreateOrder } from '../../apiHooks/orderHooks';
import { useState } from 'react';
import { orderData } from '../../order-data/orderData';

export default function CreateOrder() {
    const navigate = useNavigate();
    const { create } = useCreateOrder();

    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        customerCountry: '',
        customerAddress: '',
        orderDate: '',
        orderItems: '',
        orderTotal: '',
        orderStatus: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Required fields check
        Object.entries(formData).forEach(([key, value]) => {
            if (!value || value.trim() === '') {
                newErrors[key] = 'This field is required.';
            }
        });

        // Email format check
        if (
            formData.customerEmail &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)
        ) {
            newErrors.customerEmail = 'Invalid email address.';
        }

        // Phone number format
        if (
            formData.customerPhone &&
            !/^\+?[0-9\s\-]{7,15}$/.test(formData.customerPhone)
        ) {
            newErrors.customerPhone = 'Invalid phone number.';
        }

        // Order total must be a valid positive number
        const total = Number(formData.orderTotal);
        if (isNaN(total)) {
            newErrors.orderTotal = 'Order total must be a number.';
        } else if (total <= 0) {
            newErrors.orderTotal = 'Order total must be greater than 0.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        try {
            await create(formData);
            navigate('/orders');
        } catch (error) {
            alert('ORDER NOT CREATED! Error: ' + error.message);
        }
    };

    return (
        <div className='create-order'>
            <h2>Add Order</h2>

            <form id='createOrder' onSubmit={handleSubmit}>
                {orderData.map(([name, label, type]) => (
                    <div key={name}>
                        <input
                            type={type}
                            name={name}
                            placeholder={label}
                            value={formData[name]}
                            onChange={handleChange}
                            style={errors[name] ? { borderColor: 'red' } : {}}
                        />
                        {errors[name] && (
                            <div className="validation-error">
                                {errors[name]}
                            </div>
                        )}
                    </div>
                ))}
                <button type='submit'>Add Order</button>
            </form>
        </div>
    );
}
