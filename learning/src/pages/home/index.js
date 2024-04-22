import {Link} from "react-router-dom"; 

const HomePage = () => {
    return (
    <>
        <h1>Home Page</h1>

        <ul>
            <li>
                <Link to="/login">Login Page</Link>
            </li>
            <li>
                <Link to="/about">About Page</Link>
            </li>
        </ul>
    </>
    )
}

export default HomePage;