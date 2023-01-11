import React from "react";
import { motion } from "framer-motion";

interface IPageTransitionProps {
    children: React.ReactNode
}

const PageTransition: React.FC<IPageTransitionProps> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 }}}
    >
        {children}
    </motion.div>
);

export default PageTransition;