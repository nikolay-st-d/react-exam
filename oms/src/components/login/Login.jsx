import { useNavigate } from 'react-router';
import authService from '../../services/authService';

export default function Login({ loginHandler }) {
    const navigate = useNavigate();

    const loginAction = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await authService.login(email, password);

            if (response.email === email) {
                loginHandler(email);
                navigate('/orders');
            } else {
                alert('Incorrect login credentials!');
            }
        } catch (error) {
            alert('LOGIN FAILED! Error: ' + error);
        }
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={loginAction}>
                <input type='email' name='email' placeholder='Email' required />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </>
    );
}
