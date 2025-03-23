import { Link } from 'react-router';

export default function Help() {
    return (
        <div class='main-content-wrapper '>
            <div class='dashboard-header'>
                <h2>Orders</h2>
                <button>Add Order</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Order Total</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>2021-01-01</td>
                        <td>100</td>
                        <td>Processing</td>
                        <td>
                            <div class='actions'>
                                <Link to='/edit-order'>
                                    <i class='fa-solid fa-pen-to-square'></i>
                                </Link>
                                <Link to='/delete-order'>
                                    <i class='fa-solid fa-trash'></i>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Doe</td>
                        <td>2021-01-02</td>
                        <td>200</td>
                        <td>Shipped</td>
                        <td>
                            <div class='actions'>
                                <Link to='/edit-order'>
                                    <i class='fa-solid fa-pen-to-square'></i>
                                </Link>
                                <Link to='/delete-order'>
                                    <i class='fa-solid fa-trash'></i>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John Smith</td>
                        <td>2021-01-03</td>
                        <td>300</td>
                        <td>Delivered</td>
                        <td>
                            <div class='actions'>
                                <Link to='/edit-order'>
                                    <i class='fa-solid fa-pen-to-square'></i>
                                </Link>
                                <Link to='/delete-order'>
                                    <i class='fa-solid fa-trash'></i>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
