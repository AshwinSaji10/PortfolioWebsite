// import React from "react";
import "./projects.css";
import React, { useEffect, useState } from "react";
import { fetchLatestRepositories } from "../services/GithubService.js";

function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRepositories = async () => {
            try {
                const data = await fetchLatestRepositories(20);
                setRepositories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getRepositories();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="page">
            <div className="section-card">
            <div className="repo-section-projects">
                <h1 className="section-title">Top projects</h1>
                <div className="repo-grid">
                {/* {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>} */}
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
        </div>
    );
}

export default Projects;
