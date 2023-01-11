import React from "react";
import { motion } from "framer-motion";

import "./NavigationBarItem.css";

interface INavigationItemProps {
    title: string,
    navigate(): void,
    selected: boolean,
};

const itemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};

const NavigationItem: React.FC<INavigationItemProps> = ({
    title,
    navigate,
    selected,
}) => (
    <motion.span
        className={`NavigationBarItem ${selected ? "Selected" : ""}`}
        onClick={navigate}
        whileHover={{ scale: !selected ? 1.1 : "none" }}
        variants={itemVariants}
    >
        {title}
    </motion.span>
);

export default NavigationItem;