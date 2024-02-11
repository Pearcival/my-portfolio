import React from "react";
import { motion } from "framer-motion";

import ICard from "../../../interfaces/cards/card/ICard";
import "./Card.css";

const Card: React.FC<ICard> = ({
    name,
    pathToLogo,
    invertedBackground,
}) => (
    <motion.div
        initial={{ rotateX: 90, opacity: 0 }}
        transition={{ duration: 1.5, delay: Math.random() }}
        animate={{
            rotateX: 0, opacity: 1,
        }}
        className="Card"
    >
        <img className={`CardImage ${invertedBackground ? "White" : ""}`} src={pathToLogo} alt={name} />
        <p style={{ margin: "0.5rem", textAlign: "center" }}>{name}</p>
    </motion.div>
);

export default Card;