import React, { useEffect, useState } from "react";
import { fetchLatestRepositories } from "../services/GithubService";
import sky from "/Sky.jpg";
import github_bg from "/github.png";
// import {
//     CogIcon,
//     SpeakerphoneIcon,
//     // CodeIcon,
//     GlobeAltIcon,
//     // ChipIcon,
//     // DatabaseIcon,
//     ServerIcon,
//     TerminalIcon,
//     AcademicCapIcon,
//     SparklesIcon,
//   } from '@heroicons/react/24/outline';

function Home() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRepositories = async () => {
            try {
                const data = await fetchLatestRepositories(10);
                setRepositories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getRepositories();
    }, []);

    const scroll = (direction) => {
        const container = document.querySelector("#projects .flex");
        const scrollAmount = 320; // Adjust based on card width
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {/* Hero Section */}
            <div
                id="home"
                className="flex flex-col xl:flex-row pt-28 gap-6 px-10 bg-cover bg-center min-h-[75vh]"
                style={{ backgroundImage: `url(${sky})` }}
            >
                <div className="flex flex-col items-center justify-center text-white text-center pb-5">
                    <h1 className="font-palanquin text-8xl  px-10">
                        Welcome to my Portfolio Website!
                    </h1>
                    <p className="font-montserrat text-2xl mt-4">
                        Hi there, I am Ashwin Saji
                    </p>
                </div>
            </div>

            {/* About Me Section */}
            <div id="about" className="py-20 px-10 bg-gray-100">
                <h1 className="font-palanquin text-4xl mb-4">About Me</h1>
                <p className="text-lg">
                    I am a B.Tech CSE graduate with a passion for technology and
                    development.
                </p>
            </div>

            {/* <div id="skills" className="py-20 px-10 ">
                <h1 className="font-palanquin text-4xl mb-4">Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <h1 className="font-palanquin text-4xl mb-4">Skills</h1>
                    <SkillItem
                        iconSrc="/icons/React-Light.svg"
                        text="Teamwork"
                    />
                    <SkillItem
                        iconSrc="/icons/React-Light.svg"
                        text="Communication"
                    />
                    <SkillItem
                        iconSrc="/icons/React-Light.svg"
                        text="Punctuality"
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <SkillItem
                        iconSrc="/icons/React-Light.svg"
                        text="Teamwork"
                    />
                    <SkillItem
                        iconSrc="/icons/React-Light.svg"
                        text="Communication"
                    />
                    <SkillItem
                        iconSrc="/icons/React-Light.svg"
                        text="Punctuality"
                    />
                </div>
            </div> */}

            {/* Tech Stack */}
            <div id="stack" className="py-20 px-10 ">
                <h1 className="font-palanquin text-4xl mb-4">Tech Stack</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {/* <SkillItem icon={<CogIcon className="h-8 w-8 text-blue-500" />} text="Teamwork" />
                    <SkillItem icon={<SpeakerphoneIcon className="h-8 w-8 text-green-500" />} text="Communication" />
                    <SkillItem icon={<SparklesIcon className="h-8 w-8 text-yellow-500" />} text="Flutter" />
                    <SkillItem icon={<CodeIcon className="h-8 w-8 text-purple-500" />} text="Dart" />
                    <SkillItem icon={<GlobeAltIcon className="h-8 w-8 text-blue-500" />} text="Kotlin" />
                    <SkillItem icon={<ChipIcon className="h-8 w-8 text-green-500" />} text="ReactJS" />
                    <SkillItem icon={<DatabaseIcon className="h-8 w-8 text-yellow-500" />} text="Tailwind" />
                    <SkillItem icon={<ServerIcon className="h-8 w-8 text-purple-500" />} text="Python" />
                    <SkillItem icon={<TerminalIcon className="h-8 w-8 text-blue-500" />} text="Flask" />
                    <SkillItem icon={<AcademicCapIcon className="h-8 w-8 text-green-500" />} text="Firebase" /> */}
                    <SkillItem
                        iconSrc="/icons/React-Light.svg"
                        text="ReactJS"
                    />
                    <SkillItem
                        iconSrc="/icons/Flutter-Light.svg"
                        text="Flutter"
                    />
                    <SkillItem
                        iconSrc="/icons/TailwindCSS-Light.svg"
                        text="TailwindCSS"
                    />
                    <SkillItem
                        iconSrc="/icons/Kotlin-Light.svg"
                        text="Kotlin"
                    />
                    <SkillItem iconSrc="/icons/Flask-Light.svg" text="Flask" />
                    {/* <SkillItem iconSrc="/icons/HTML.svg" text="HTML" /> */}
                    <SkillItem
                        iconSrc="/icons/Python-Light.svg"
                        text="Python"
                    />
                    <SkillItem iconSrc="/icons/Java-Light.svg" text="Java" />
                    <SkillItem
                        iconSrc="/icons/JavaScript.svg"
                        text="JavaScript"
                    />
                    <SkillItem iconSrc="/icons/Unity-Light.svg" text="Unity" />
                    <SkillItem iconSrc="/icons/Git.svg" text="Git" />
                    <SkillItem iconSrc="/icons/C.svg" text="C" />
                    <SkillItem iconSrc="/icons/CPP.svg" text="C++" />
                    <SkillItem iconSrc="/icons/SQLite.svg" text="SQLite" />
                    <SkillItem iconSrc="/icons/MongoDB.svg" text="MongoDB" />

                    {/* <SkillItem iconSrc="/icons/firebase.png" text="Firebase" /> */}
                </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="py-20 px-10 bg-gray-100">
                <h1 className="font-palanquin text-4xl mb-4">
                    Latest Projects
                </h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <div>
                    <div className="flex space-x-4 overflow-x-auto p-4">
                        {repositories.map((repo) => (
                            <div key={repo.id} className="flex-shrink-0 w-80">
                                <div
                                    className="flex flex-col justify-center items-center 
                                 rounded-lg shadow-md p-8 h-full bg-white "
                                    // style={{
                                    //     backgroundImage: `url(${github_bg})`,
                                    // }}
                                >
                                    {/* <h1>hello</h1> */}
                                    {/* <img
                                        className="h-10 w-10"
                                        src="/icons/Github-Dark.svg"
                                    ></img> */}
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            <img
                                                className="h-10 w-10"
                                                src="/icons/Github-Dark.svg"
                                            ></img>
                                            <h2 className="font-bold text-xl text-black">
                                                {repo.name}
                                            </h2>
                                        </div>
                                    </a>
                                    <p className="text-gray-700">
                                        {repo.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        onClick={() => scroll(-1)}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        onClick={() => scroll(1)}
                    >
                        &gt;
                    </button> */}
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="flex flex-col py-20 px-10">
                <h1 className="font-palanquin text-4xl mb-4">Contact</h1>
                <p className="text-lg mb-4">Email: aswinsaji777@gmail.com</p>
                <p className="text-lg">Phno: +91 8590480136</p>
            </div>
        </div>
    );
}

const SkillItem = ({ iconSrc, text }) => (
    <div className="flex flex-col items-center space-x-2">
        <img src={iconSrc} alt={text} className="h-20 w-20" />
        <span className="text-lg">{text}</span>
    </div>
);

export default Home;
