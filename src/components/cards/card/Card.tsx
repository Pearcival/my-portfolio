import React from "react";

import ICard from "../../../interfaces/cards/card/ICard";
import "./Card.css";

const Card: React.FC<ICard> = ({
    name,
    pathToLogo,
    invertedBackground,
}) => (
    <div className="Card">
        <img className={`CardImage ${invertedBackground ? "White" : ""}`} src={pathToLogo} alt={name} />
        <p style={{ margin: "0.5rem" }}>{name}</p>
    </div>
);

export default Card;