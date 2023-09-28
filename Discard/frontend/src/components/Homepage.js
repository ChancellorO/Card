import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <>
            <h1>Homepage</h1>
            <Link to="signup">Signup</Link>
            <br />
            <Link to="login">Login</Link>
        </>
    );
}

export default Homepage;