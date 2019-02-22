import React from "react";
import { StaticQuery } from "gatsby";
import { graphql, Link } from "gatsby";
import Header from "./Header";
import SideBar from "./SideBar";
// import SideBar from "./SideBar";

const Layout = ({children}) => {
    return(
        <div className="main">
            <Header/>
            <div className="o-wrapper">
                <div className="o-layout">
                   <SideBar/>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;