import {Link} from "react-router-dom"

const AboutPage = () => {
    return(
    <>
        <h1>About Page</h1>

        <ul>
            <li>
                <Link to="/">Home Page</Link>
            </li>
            <li>
                <Link to="/login">Login Page</Link>
            </li>
        </ul>
    </>
    )
}

export default AboutPage;