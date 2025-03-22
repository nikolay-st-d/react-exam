export default function Login() {
    return (
        <>
            <h2>Login</h2>
            <form>
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </>
    );
}
