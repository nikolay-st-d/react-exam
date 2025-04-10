import { useNavigate, useParams } from 'react-router';
import { useOrder, useUpdateOrder } from '../../apiHooks/orderHooks';
import { useEffect, useState } from 'react';

export default function OrderEdit() {
    const { orderId } = useParams();
    const navigate = useNavigate();

    const { order, isLoading } = useOrder(orderId);
    const { update } = useUpdateOrder();

    const [formData, setFormData] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (order) {
            setFormData({ ...order });
        }
    }, [order]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = [
            'customerName',
            'customerEmail',
            'customerPhone',
            'customerCountry',
            'customerAddress',
            'orderDate',
            'orderItems',
            'orderTotal',
            'orderStatus',
        ];

        requiredFields.forEach((field) => {
            if (!formData[field] || formData[field].trim() === '') {
                newErrors[field] = 'This field is required.';
            }
        });

        if (
            formData.customerEmail &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)
        ) {
            newErrors.customerEmail = 'Invalid email address.';
        }

        if (
            formData.customerPhone &&
            !/^\+?[0-9\s\-]{7,15}$/.test(formData.customerPhone)
        ) {
            newErrors.customerPhone = 'Invalid phone number.';
        }

        const total = Number(formData.orderTotal);
        if (isNaN(total) || total <= 0) {
            newErrors.orderTotal = 'Order total must be a positive number.';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        try {
            await update(orderId, formData);
            navigate('/orders/' + orderId + '/details');
        } catch (error) {
            alert('ERROR: ' + error);
        }
    };

    if (isLoading || !formData) return <p>Loading order...</p>;

    function handleCancel() {
        navigate('/orders/' + orderId + '/details');
    }

    return (
        <div className='edit-order'>
            <h2>Edit Order</h2>

            <form id='editOrder' onSubmit={handleSubmit}>
                {[
                    ['customerName', 'Customer Name', 'text'],
                    ['customerEmail', 'Customer Email', 'email'],
                    ['customerPhone', 'Customer Phone', 'text'],
                    ['customerCountry', 'Customer Country', 'text'],
                    ['customerAddress', 'Customer Address', 'text'],
                    ['orderDate', 'Order Date', 'date'],
                    ['orderItems', 'Order Items', 'text'],
                    ['orderTotal', 'Order Total', 'text'],
                    ['orderStatus', 'Order Status', 'text'],
                ].map(([name, label, type]) => (
                    <div key={name}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            type={type}
                            id={name}
                            name={name}
                            value={formData[name] || ''}
                            onChange={handleChange}
                            style={errors[name] ? { borderColor: 'red' } : {}}
                        />
                        {errors[name] && (
                            <div className="validation-error">{errors[name]}</div>
                        )}
                    </div>
                ))}
                <button type='submit'>Save Changes</button>
            </form>
                <button id="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
    );
}
