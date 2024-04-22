import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
    <>
        <h1>Login Page</h1>

        <ul>
            <li>
                <Link to="/">Home Page</Link>
            </li>
            <li>
                <Link to="/about">About Page</Link>
            </li>
        </ul>
    </>
    )
}

export default LoginPage;