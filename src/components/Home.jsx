import React, { useEffect, useState } from "react";
import { fetchLatestRepositories } from "../services/GithubService";
import welcome_img from "/mountain_bw.jpg";
import "./home.css";

function Home() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRepositories = async () => {
            try {
                const data = await fetchLatestRepositories(5);
                setRepositories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getRepositories();
    }, []);
    return (
        <div className="page">
            <div className="section-card">
                <div className="welcome-img">
                    <img src={welcome_img} alt="welcome_img" />
                </div>
                <div className="hero-section">
                    <h1 className="welcome-msg">
                        Welcome to my Portfolio Website!
                    </h1>
                    <p className="hero-text"> Hi there, I am Ashwin Saji</p>
                </div>
            </div>
            <div className="section-card">
                <h1 className="section-title">Skills</h1>
            </div>
            {/* <FadeInSection> */}
            <div className="section-card">
                <h1 className="section-title">Latest Projects</h1>
                {/* {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>} */}
                <div className="repo-grid">
                    {repositories.map((repo) => (
                        <div key={repo.id} className="repo-tile">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h2>{repo.name}</h2>
                            </a>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}


export default Home;
