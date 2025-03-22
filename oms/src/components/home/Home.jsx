import { Link} from 'react-router';

export default function Home() {
    return (
        <>
            <h2>Welcome to OMS</h2>
            <h3>Please <Link to="/login">login</Link> to start managing orders</h3>
        </>
    );
}
