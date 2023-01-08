import React from "react";
import { useNavigate } from "react-router-dom";

import "./InlineNavigationItem.css";

interface IInlineNavigationItemProps {
    title: string,
    path : string,
}

const InlineNavigationItem: React.FC<IInlineNavigationItemProps> = ({
    title,
    path,
}) => {
    const navigate = useNavigate();

    return (
        <h3 className="InlineNavigationItem" onClick={() => {navigate(path)}}>
            {title}
        </h3>
    );
}

export default InlineNavigationItem;