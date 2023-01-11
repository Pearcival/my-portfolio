import React from "react";
import NavigationBar from "../../components/navigation/navigationBar/NavigationBar";
import "./Layout.css";

interface ILayoutProps {
    currentPage: string,
    children?: React.ReactNode
};

const Layout: React.FC<ILayoutProps> = ({
    currentPage,
    children,
}) => (
    <React.Fragment>
        <NavigationBar currentPage={currentPage}/>
        <main className="Content" >
            {children}
        </main>
    </React.Fragment>
);

export default Layout;