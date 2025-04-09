import { useNavigate } from 'react-router';
import { useActionState, useContext, useState } from 'react';
import { useLogin } from '../../apiHooks/authHooks';
import { userContext } from '../../contexts/userContext';

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(userContext);
    const { isLoggedIn } = useContext(userContext);

    const [errors, setErrors] = useState({});

    const loginHandler = async (prevState, formData) => {
        const { login } = useLogin();
        const values = Object.fromEntries(formData);

        const newErrors = {};

        if (!values.email) {
            newErrors.email = 'Email is required!';
        }
        if (!values.password) {
            newErrors.password = 'Password is required!';
        }

        // Prevent login if errors are present
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return values;
        }

        setErrors({}); // Clear errors on successfull validation

        try {
            const response = await login(values.email, values.password);
            if (response.email === values.email) {
                userLoginHandler(response);
                navigate('/orders');
            } else {
                setErrors({ form: 'Incorrect login credentials!' });
            }
        } catch (error) {
            setErrors({ form: 'Login failed! ' + error.message });
        }

        return values;
    };

    const [prevState, LoginAction, isPending] = useActionState(loginHandler, {
        email: userContext.email || '',
        password: userContext.password || '',
    });

    return (
        <>
            <h2>Login</h2>
            {isLoggedIn() ? (
                <p>You are already logged in!</p>
            ) : (
                <form action={LoginAction}>
                    {errors.form && (
                        <div className='validation-error'>{errors.form}</div>
                    )}
                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                            style={errors.email ? { borderColor: 'red' } : {}}
                        />
                        {errors.email && (
                            <div className='validation-error'>
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            required
                            style={
                                errors.password ? { borderColor: 'red' } : {}
                            }
                        />
                        {errors.password && (
                            <div className='validation-error'>
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <button disabled={isPending}>Login</button>
                </form>
            )}
        </>
    );
}
