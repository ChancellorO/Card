import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
        <h1>Login</h1>
        <Link to="signup">Click here to sign up</Link>
        </>
    );
}

export default Login;