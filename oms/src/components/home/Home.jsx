import { Link} from 'react-router';

export default function Home() {
    return (
        <div className='main-content-wrapper '>
            <h2>Welcome to OMS</h2>
            <img src={"public/home-1.webp"} alt={"OMS"} />
            <p>Please <Link to={"/login"}>login</Link> to start managing orders.</p>
        </div>
    );
}
