import { Link, useNavigate, useParams } from 'react-router';
import { useDeleteOrder, useOrder } from '../../apiHooks/orderHooks';
import Notes from '../notes/Notes';

export default function OrderDetails(id) {
    const { orderId } = useParams();

    const navigate = useNavigate();

    const { order } = useOrder(orderId);

    const { deleteOrder } = useDeleteOrder();

    const orderDeleteClickHandler = async () => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this order? This operation is not reversible!'
        );

        if (!confirmDelete) {
            return;
        }

        await deleteOrder(orderId);
        navigate('/orders');
    };

    return (
        <>
            <h3>ORDER DETAILS</h3>
            <div className='order-details'>
                <div className='order-data-container'>
                    <div>
                        <h3>Customer data</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{order.customerName}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{order.customerEmail}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{order.customerPhone}</td>
                                </tr>
                                <tr>
                                    <td>Country:</td>
                                    <td>{order.customerCountry}</td>
                                </tr>
                                <tr>
                                    <td>City:</td>
                                    <td>{order.customerCity}</td>
                                </tr>
                                <tr>
                                    <td>Postal code:</td>
                                    <td>{order.customerZip}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>{order.customerAddress}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>Order data</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Order ID:</td>
                                    <td>{order._id}</td>
                                </tr>

                                <tr>
                                    <td>Date:</td>
                                    <td>{order.orderDate}</td>
                                </tr>
                                <tr>
                                    <td>Items list:</td>
                                    <td>{order.orderItems}</td>
                                </tr>
                                <tr>
                                    <td>Total:</td>
                                    <td>
                                        {parseFloat(order.orderTotal).toFixed(
                                            2
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status:</td>
                                    <td>{order.orderStatus}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
            <Notes orderId={order._id} />
        </>
    );
}
