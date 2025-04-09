import { useNavigate } from 'react-router';
import { useRegister } from '../../apiHooks/authHooks';
import { useActionState, useContext, useState } from 'react';
import { userContext } from '../../contexts/userContext';

export default function Register() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(userContext);

    const [errors, setErrors] = useState({});

    const registerHandler = async (prevState, formData) => {
        const { register } = useRegister();

        const values = Object.fromEntries(formData);
        const email = values.email;
        const password = formData.get('password');
        const password2 = formData.get('password2');

        const newErrors = {};

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email!';
        }

        if (!password || password.length < 3) {
            newErrors.password = 'Password must be at least 3 characters!';
        }

        if (password !== password2) {
            newErrors.password2 = 'Passwords do not match!';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return values;
        }

        setErrors({});

        try {
            const response = await register(email, password);

            if (response.message && response.code !== 200) {
                setErrors({ form: response.message });
                return;
            }

            userLoginHandler(response);
            navigate('/');
        } catch (error) {
            console.error(error);
            setErrors({ form: 'Registration failed. Please try again.' });
        }

        return values;
    };

    const [prevState, RegisterAction, isPending] = useActionState(registerHandler, {
        email: '',
        password: '',
    });

    return (
        <>
            <h2>Register</h2>
            <form action={RegisterAction}>
                {errors.form && <div className="validation-error">{errors.form}</div>}

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    style={errors.email ? { borderColor: 'red' } : {}}
                />
                {errors.email && <div className="validation-error">{errors.email}</div>}

                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    style={errors.password ? { borderColor: 'red' } : {}}
                />
                {errors.password && <div className="validation-error">{errors.password}</div>}

                <input
                    type="password"
                    id="password2"
                    name="password2"
                    placeholder="Confirm Password"
                    required
                    style={errors.password2 ? { borderColor: 'red' } : {}}
                />
                {errors.password2 && <div className="validation-error">{errors.password2}</div>}

                <button disabled={isPending}>Save</button>
            </form>
        </>
    );
}
