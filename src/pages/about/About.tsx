import React from "react";
import CardGrid from "../../components/cards/cardGrid/CardGrid";
import data from "../../assets/data/skills.json";

import './About.css';

const About = () => (
    <div className="About">
        <div className="PageContent">
            <h1>About Me</h1>
            <h2>Who am I?</h2>
            <p>I'm Josh Pearce, a Software Developer from the UK.</p>
            <p>
                I started my career in tech 13 years ago, originally working in technical support.
                Unfortunately, this just didn't satisfy the creative urges within me. So, I embarked
                on a career in software development, deciding on Java as my language of choice.
                After an intense period of idependent study, I acquired my first certificates, taking
                and passing the Oracale Certified Associatate and Professional Java exams.
            </p>
            <p>
                Shortly after this, I started my first development role at BAE Systems, where I worked
                as a web developer. I did this for 7 years. I know, a long time, right! Following this,
                I joined my current employer, Raytheon UK in 2020, where I still work as a web developer,
                albeit I now spend most of my time in the cloud. I'm certified in both AWS and Azure.
            </p>
            <p>
                I've had many roles over the years, Developer, Senior Developer, Tech Lead and even
                management positions. In this time, I've acquired a working knowledge of a number of
                languages and technologies. Java, Javascript, HTML, CSS, NodeJS, React, MongoDB, Oracle
                SQL, MySQL to name a few. I also have experience with DevOps tools, such as Git, Docker, build
                and deployment pipelines (YAML), Terraform, ARM, Cypress and more!
            </p>
            <p>
                I thrive in small, agile teams, but I'm equally as at home in large teams working on
                applications with a longer product lifecycle.
            </p>
            <p>
                I'm passionate about software development and strive to build solutions that are both
                creative and elegant. Creating applications that solve real world problems is my thing
                and if I can design something pretty at the same time, then great! I'm well aware that
                looks aren't everything though and I do of course design and architect my solutions with
                scalability, security and technical dependencies in mind.
            </p>
            <h2>My Interests</h2>
            <h3>Video Games</h3>
            <p>
                I know what you're thinking, 'a software developer that plays video games, how cliché'.
                What can I say, I like what I like.
            </p>
            <h3>Sports</h3>
            <p>
                I love my sports, football, cricket and golf in particular, but I'll play pretty much
                anything... except for bowls, I just don't get that and it's not for me.
            </p>
        </div>
        <div className="Skills">
            <h1>What do I know?</h1>
            <h2>My Skills</h2>
            <CardGrid cardData={data.data}/>
        </div>
    </div>
);

export default About;