import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import NavigationBarItem from "../navigationBarItem/NavigationBarItem";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {

    const [selectedItem, setSelectedItem] = useState<string>();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSelectedItem(location.pathname);
    }, [location.pathname]);

    return (
        <div className="NavigationBar">
            <div className="NavigationBarItems">
                <NavigationBarItem
                    title="Home"
                    navigate={() => {
                        navigate("/");
                    }}
                    selected={selectedItem === "/"}
                />
                <NavigationBarItem
                    title="About"
                    navigate={() => {
                        navigate("/about");
                    }}
                    selected={selectedItem === "/about"}
                />
                <NavigationBarItem
                    title="Work"
                    navigate={() => {
                        navigate("/work");
                    }}
                    selected={selectedItem === "/work"}
                />
            </div>
            <NavigationBarItem
                    title="Contact"
                    navigate={() => {
                        navigate("/contact");
                    }}
                    selected={selectedItem === "/contact"}
                />
        </div>
    );
};

export default NavigationBar;