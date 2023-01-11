import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuToggle from "../menuToggle/MenuToggle";
import NavigationBarItem from "../navigationBarItem/NavigationBarItem";
import "./NavigationBar.css";

interface INavigationBarProps {
    currentPage: string,
};

const NavigationBar: React.FC<INavigationBarProps> = ({ currentPage }) => {

    const navigate = useNavigate();
    const [navigationMenuActive, setNavigationMenuActive] = useState<boolean>(false);

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
                        active={navigationMenuActive}
                        handleClick={() => setNavigationMenuActive(!navigationMenuActive)}
                    />
                </div>
            </div>
            {navigationMenuActive &&
                <div className="NavigationMenu">

                </div>
            }
        </>
    );
};

export default NavigationBar;