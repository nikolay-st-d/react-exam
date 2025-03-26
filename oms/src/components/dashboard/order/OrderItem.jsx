import { Link } from 'react-router';

export default function OrderItem({
    _id,
    customerName,
    customerEmail,
    orderDate,
    orderTotal,
    orderStatus,
}) {
    return (
        <tr>
            <td>{_id}</td>
            <td>{customerName}</td>
            <td>{customerEmail}</td>
            <td>{orderDate}</td>
            <td>{orderTotal}</td>
            <td>{orderStatus}</td>
            <td>
                <div className='actions'>
                    <Link to='/edit-order'>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </Link>
                    <Link to='/delete-order'>
                        <i className='fa-solid fa-trash'></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
