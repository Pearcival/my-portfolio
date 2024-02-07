import React from "react";
import { motion } from "framer-motion";

import ICard from "../../../interfaces/cards/card/ICard";
import "./Card.css";

const Card: React.FC<ICard> = ({
    name,
    pathToLogo,
    invertedBackground,
}) => {
    const initialX = (Math.floor(Math.random() * (Math.floor(100) - Math.ceil(-100) + 1)) + Math.ceil(-100)) * 10;
    const initialY = (Math.floor(Math.random() * (Math.floor(100) - Math.ceil(-100) + 1)) + Math.ceil(-100)) * 10;

    return (
        <motion.div
            initial={{ x: initialX, y: initialY, opacity: 0 }}
            transition={{ duration: 1, delay: Math.random() }}
            animate={{
                x: 0,
                y: 0,
                opacity: 1,
            }}
            className="Card"
        >
            <img className={`CardImage ${invertedBackground ? "White" : ""}`} src={pathToLogo} alt={name} />
            <p style={{ margin: "0.5rem", textAlign: "center" }}>{name}</p>
        </motion.div>
    );
};

export default Card;