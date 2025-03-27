import { Link } from 'react-router';

export default function OrderItem({
    _id,
    customerName,
    customerEmail,
    customerCountry,
    orderDate,
    orderTotal,
    orderStatus,
}) {
    return (
        <tr>
            <td>{customerName}</td>
            <td>{customerEmail}</td>
            <td>{customerCountry}</td>
            <td>{orderDate}</td>
            <td>{orderTotal}</td>
            <td>{orderStatus}</td>
            <td>
                <div className='actions'>
                    <Link to={'/orders/' + _id + '/details'}>
                    <i className="fa-solid fa-eye"></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
