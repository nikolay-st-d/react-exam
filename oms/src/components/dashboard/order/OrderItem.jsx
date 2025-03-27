import { Link } from 'react-router';

export default function OrderItem({
    _id,
    customerName,
    customerEmail,
    customerPhone,
    customerCountry,
    customerAddress,
    orderDate,
    orderItems,
    orderTotal,
    orderStatus,
}) {
    return (
        <tr>
            <td>{customerName}</td>
            <td>{customerEmail}</td>
            <td>{customerPhone}</td>
            <td>{customerCountry}</td>
            <td>{customerAddress}</td>
            <td>{orderDate}</td>
            <td>{orderItems}</td>
            <td>{orderTotal}</td>
            <td>{orderStatus}</td>
            <td>
                <div className='actions'>
                    <Link to={'/orders/' + _id + '/details'}>
                    <i class="fa-solid fa-eye"></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
