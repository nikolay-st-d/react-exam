import { Link} from 'react-router';

export default function Home() {
    return (
        <div class='main-content-wrapper '>
            <h2>Welcome to OMS</h2>
            <img src="public/home-1.jpg" alt="OMS" />
            <p>Please <Link to="/login">login</Link> to start managing orders.</p>
        </div>
    );
}
