import React from "react";
import NavBar from "../../components/navigation/navigationBar/NavigationBar";
import "./Layout.css";

interface ILayoutProps {
    children?: React.ReactNode
};

const Layout: React.FC<ILayoutProps> = ({ children }) => (
    <React.Fragment>
        <NavBar/>
        <main className="Content" >
            {children}
        </main>
    </React.Fragment>
);

export default Layout;