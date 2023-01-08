import React from "react";

import InlineNavigationItem from "../../components/navigation/inlineNavigationItem/InlineNavigationItem";
import "./Home.css";

const Home = () => (
    <div className="Home">
        <div className="PageContent">
            <h2>Hi, I'm Josh.</h2>
            <h1>A Software Developer from the UK.</h1>
            <h3>
                Originally self-taught, I'm a Web Developer with 10 years experience and in-depth knowledge of a number of technologies and languages.
            </h3>
            <h3>
                I create applications that help customers solve business challenges and bring their technical strategy to life.
            </h3>
            <InlineNavigationItem
                title="Learn more >"
                path="/about"
            />
        </div>
        <div className="AvatarContainer">
            <img className="Avatar" src="/images/avatar.png" alt="My Avatar"/>
        </div>
    </div>
);

export default Home;