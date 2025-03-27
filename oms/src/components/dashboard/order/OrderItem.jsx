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
            {/* <td>{_id}</td> */}
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
                        <i className='fa-solid fa-circle-info'></i>
                    </Link>
                    <Link to={'/orders/' + _id + '/edit'}>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </Link>
                    <Link to={'/orders/' + _id + '/delete'}>
                        <i className='fa-solid fa-trash'></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
