import { useNavigate } from 'react-router';
import authService from '../../services/authService';
import { useActionState } from 'react';

export default function Login({ onLogin }) {
    const navigate = useNavigate();

    const LoginHandler = async (prevState, formData) => {
        const values = Object.fromEntries(formData);

        try {
            const response = await authService.login(values.email, values.password);

            if (response.email === values.email) {
                onLogin(response);
                navigate('/orders');
            } else {
                alert('Incorrect login credentials!');
            }
        } catch (error) {
            alert('LOGIN FAILED! Error: ' + error);
        }

        return values;
    };

    const [values, LoginAction, isPending] = useActionState(LoginHandler, {
        email: '',
        password: '',
    });

    return (
        <>
            <h2>Login</h2>
            <form action={LoginAction}>
                <input type='email' name='email' placeholder='Email' required />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                />
                <button disabled={isPending}>Login</button>
            </form>
        </>
    );
}
