import React from "react";

import Link from "../../components/navigation/link/Link";
import PageTransition from "../../hoc/transition/PageTransition";
import "./Contact.css";

const Contact = () => (
    <PageTransition>
        <h1>Get in Touch</h1>
        <h2>
            If you want to reach out to discuss an opportunity or just fancy a chat,
            you can reach me on the below platforms.
        </h2>
        <div className="ContactItems">
            <Link title="JoshP#3591" url="https://discord.com/users/955397895622897664" pathToLogo="/images/logo-discord.svg" />
            <Link title="joshua-pearce" url="https://www.linkedin.com/in/joshua-pearce-699596119/" pathToLogo="/images/logo-linkedin.svg" />
            <Link title="Pearcival" url="https://github.com/Pearcival" pathToLogo="/images/logo-github.svg" />
        </div>
    </PageTransition>
);

export default Contact;