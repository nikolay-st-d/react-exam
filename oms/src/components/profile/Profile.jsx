export default function Profilr() {
    return (
        <>
            <h2>Profile</h2>
            <form>
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Update</button>
            </form>
        </>
    );
}