import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import "./footer.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path='/Home' element={<Home/>}/> */}
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Experience" element={<Experience />} />
                </Routes>
                <footer className="footer">
                    <div className="footer-content">
                        <p>
                            &copy; {new Date().getFullYear()} Ashwin Saji. All
                            rights reserved.
                        </p>
                        <div className="social-links">
                            <a
                                href="https://github.com/AshwinSaji10"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="social-icon" src ="/github.svg"></img>
                            </a>
                            <a
                                href="https://linkedin.com/in/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="social-icon" src="/linkedin.svg"></img>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
