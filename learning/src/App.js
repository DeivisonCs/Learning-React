import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import AboutPage from "./pages/about";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <HomePage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/about" element={ <AboutPage/> }/>
            </Routes>
        </Router>
    );
}

export default App;
