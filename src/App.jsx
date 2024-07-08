import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./App.css";
// import "./footer.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path='/Home' element={<Home/>}/> */}
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Experience" element={<Experience />} />
                </Routes>
                <footer>
                    <div className="flex flex-row justify-between items-center bg-black px-3 py-3">
                        <p className="text-white">
                            &copy; {new Date().getFullYear()} Ashwin Saji. All
                            rights reserved.
                        </p>
                        <div className="flex items-center gap-5">
                            <a
                                href="https://github.com/AshwinSaji10"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    width={30}
                                    height={30}
                                    src="/icons/Github-Light.svg"
                                    // className="bg-black"
                                ></img>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ashwin-saji-ab6410308/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    width={30}
                                    height={30}
                                    src="/icons/LinkedIn.svg"
                                    // className="bg-white"
                                ></img>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
