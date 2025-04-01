import { useNavigate } from 'react-router';
import { useRegister } from '../../authHooks/authHooks';
import { useActionState, useContext } from 'react';
import { userContext } from '../../contexts/userContext';

export default function Register() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(userContext);

    const registerHandler = async (prevState, formData) => {
        const { register } = useRegister();

        const values = Object.fromEntries(formData);

        const email = values.email;
        const password = formData.get('password');
        const password2 = formData.get('password2');

        if (password !== password2) {
            alert('Password fields do not match!');
            return;
        }

        try {
            const response = await register(email, password);

            if (response.message && response.code !== 200) {
                alert(response.message);
                return;
            }
            
            userLoginHandler(response);
            navigate('/');
        } catch (error) {
            console.log(error);
            return;
        }

        return values;
    };

    const [prevState, RegisterAction, isPending] = useActionState(
        registerHandler,
        {
            email: '',
            password: '',
        }
    );

    return (
        <>
            <h2>Register</h2>
            <form action={RegisterAction}>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    required
                />
                <input
                    type='text'
                    id='password'
                    name='password'
                    placeholder='Password'
                    required
                />
                <input
                    type='password'
                    id='password2'
                    name='password2'
                    placeholder='Confirm Password'
                    required
                />
                <button disabled={isPending}>Save</button>
            </form>
        </>
    );
}
