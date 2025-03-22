export default function Register() {
    return (
        <>
            <h2>Register</h2>
            <form>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='User (name ot nickname)'
                    required
                />
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
                <button type='submit'>Save</button>
            </form>
        </>
    );
}
