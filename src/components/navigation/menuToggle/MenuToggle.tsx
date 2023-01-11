import React from 'react';
import './MenuToggle.css';

interface IMenuToggleProps {
    active: boolean,
    handleClick(): void, 
}

const MenuToggle: React.FC<IMenuToggleProps> = ({
    active,
    handleClick,
}) => (
    <div className="MenuToggle" onClick={handleClick}>
        <span className={`${active ? "active" : ""}`}></span>
        <span className={`${active ? "active" : ""}`}></span>
        <span className={`${active ? "active" : ""}`}></span>
    </div>
);

export default MenuToggle;