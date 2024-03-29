import React from "react";

import PageTransition from "../../hoc/transition/PageTransition";
import Timeline from "../../components/timeline/Timeline";
import experience from "../../assets/data/experience.json";

const About = () => (
    <PageTransition>
        <h1>About Me</h1>
        <h2>Who am I?</h2>
        <p>I'm Josh Pearce, a Software Developer from the UK.</p>
        <p>
            I started my career in tech 13 years ago, initially working in technical support.
            Unfortunately, this didn't satisfy the creative urges within me. So, I embarked
            on a career in software development, deciding on Java as my language of choice.
            After an intense period of independent study, I acquired my first certificates, sitting
            and passing the Oracle Certified Associate and Professional Java exams.
        </p>
        <p>
            Shortly after this, I started my first development role at BAE Systems, where I worked
            as a web developer. I did this for seven years. In 2020, I joined my current employer,
            Raytheon UK. I work as a web developer, however, I spend most of my time in the 'cloud'.
            I'm certified in both AWS and Azure.
        </p>
        <p>
            I've had many roles over the years, Developer, Senior Developer, Tech Lead and even
            management positions. I've acquired a working knowledge of several
            languages and technologies. These include, Java, Javascript, HTML, CSS, NodeJS, React, MongoDB, Oracle
            SQL, MySQL, to name a few. I also have experience with DevOps tools, such as Git, Docker, build
            and deployment pipelines (YAML), Terraform, ARM, Cypress and more!
        </p>
        <p>
            I thrive in small, agile teams, but I'm equally at home in large teams working on
            applications with a longer product lifecycle.
        </p>
        <p>
            I'm passionate about software development and strive to build creative and elegant solutions.
            Creating applications that solve real-world problems is my 'thing' and if I can design something
            pretty at the same time, then great! I'm well aware that looks aren't everything though, and I
            do of course design and architect my solutions with scalability, security and technical
            dependencies in mind.
        </p>
        <h2>Experience</h2>
        <Timeline timelineItems={experience.data}/>
    </PageTransition>
);

export default About;