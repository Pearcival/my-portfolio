import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import MenuToggle from "../menuToggle/MenuToggle";
import NavigationBarItem from "../navigationBarItem/NavigationBarItem";
import "./NavigationBar.css";

interface INavigationBarProps {
    currentPage: string,
};

const menuVariants = {
    closed: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: 1
        }
    }
};

const NavigationBar: React.FC<INavigationBarProps> = ({ currentPage }) => {

    const navigate = useNavigate();
    const [navigationMenuOpen, cycleNavigationMenuOpen] = useCycle<boolean>(false, true);

    useEffect(() => {

        const handleWindowResize = () => {
            if (window.innerWidth > 600 && navigationMenuOpen) {
                cycleNavigationMenuOpen();
            }
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [navigationMenuOpen, cycleNavigationMenuOpen]);

    return (
        <>
            <div className="NavigationBar">
                <div className="NavigationBarDesktop">
                    <div className="NavigationBarItems">
                        <NavigationBarItem
                            title="Home"
                            navigate={() => {
                                navigate("/");
                            }}
                            selected={currentPage === "/"}
                        />
                        <NavigationBarItem
                            title="About"
                            navigate={() => {
                                navigate("/about");
                            }}
                            selected={currentPage === "/about"}
                        />
                        <NavigationBarItem
                            title="Skills"
                            navigate={() => {
                                navigate("/skills");
                            }}
                            selected={currentPage === "/skills"}
                        />
                        <NavigationBarItem
                            title="Work"
                            navigate={() => {
                                navigate("/work");
                            }}
                            selected={currentPage === "/work"}
                        />
                    </div>
                    <NavigationBarItem
                        title="Contact"
                        navigate={() => {
                            navigate("/contact");
                        }}
                        selected={currentPage === "/contact"}
                    />
                </div>
                <div className="NavigationBarMobile">
                    <MenuToggle
                        active={navigationMenuOpen}
                        handleClick={cycleNavigationMenuOpen}
                    />
                    <AnimatePresence>
                        {navigationMenuOpen &&
                            <motion.div
                                className="NavigationMenu"
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                transition={{ duration: 0.7 }}
                                exit={{
                                    height: 0,
                                    transition: { delay: 0.2, duration: 0.7 }
                                }}
                            >
                                <motion.div
                                    className="NavigationMenuItems"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={menuVariants}
                                >
                                    <NavigationBarItem
                                        title="Home"
                                        navigate={() => {
                                            navigate("/");
                                            cycleNavigationMenuOpen();
                                        }}
                                        selected={currentPage === "/"}
                                    />
                                    <NavigationBarItem
                                        title="About"
                                        navigate={() => {
                                            navigate("/about");
                                            cycleNavigationMenuOpen();
                                        }}
                                        selected={currentPage === "/about"}
                                    />
                                    <NavigationBarItem
                                        title="Skills"
                                        navigate={() => {
                                            navigate("/skills");
                                            cycleNavigationMenuOpen();
                                        }}
                                        selected={currentPage === "/skills"}
                                    />
                                    <NavigationBarItem
                                        title="Work"
                                        navigate={() => {
                                            navigate("/work");
                                            cycleNavigationMenuOpen();
                                        }}
                                        selected={currentPage === "/work"}
                                    />
                                    <NavigationBarItem
                                        title="Contact"
                                        navigate={() => {
                                            navigate("/contact");
                                            cycleNavigationMenuOpen();
                                        }}
                                        selected={currentPage === "/contact"}
                                    />
                                </motion.div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;