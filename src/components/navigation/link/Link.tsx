import React from "react";

import "./Link.css";

interface ILinkProps {
    title: string,
    url: string,
    pathToLogo?: string
}

const Link: React.FC<ILinkProps> = ({
    url,
    title,
    pathToLogo,
}) => (
    <a className="Link" href={url} target="_blank" rel="noopener noreferrer">
        {pathToLogo ? <img className="LinkImage" src={pathToLogo} alt={title} /> : null}
        {title}
    </a>
);

export default Link;