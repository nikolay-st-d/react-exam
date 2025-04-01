import { useNavigate } from 'react-router';
import { useActionState, useContext } from 'react';
import { useLogin } from '../../authHooks/authHooks';
import { userContext } from '../../contexts/userContext';

export default function Login() {

    const navigate = useNavigate();
    const {userLoginHandler} = useContext(userContext);

    const loginHandler = async (prevState, formData) => {

        const { login } = useLogin();

        const values = Object.fromEntries(formData);

        try {
            const response = await login(values.email, values.password);

            if (response.email === values.email) {
                userLoginHandler(response);
                navigate('/orders');
            } else {
                alert('Incorrect login credentials!');
            }
        } catch (error) {
            alert('LOGIN FAILED! Error: ' + error);
        }

        return values;
    };

    const [prevState, LoginAction, isPending] = useActionState(loginHandler, {
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
