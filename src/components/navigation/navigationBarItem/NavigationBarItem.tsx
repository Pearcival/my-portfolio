import React from "react";

import "./NavigationBarItem.css";

interface INavigationItemProps {
    title: string,
    navigate(): void,
    selected: boolean,
};

const NavigationItem: React.FC<INavigationItemProps> = ({
    title,
    navigate,
    selected,
}) => (
    <span className={`NavigationBarItem ${selected ? "Selected" : ""}`} onClick={navigate}>
        {title}
    </span>
);

export default NavigationItem;