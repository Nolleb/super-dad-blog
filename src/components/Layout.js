import React from "react";
import { StaticQuery } from "gatsby";
import { graphql, Link } from "gatsby";
import Header from "./Header";

const Layout = ({children}) => {
    return(
        <div className="main">
        <Header/>
            <div className="o-wrapper">
                <div className="o-layout">
                    <section className="o-layout__item u-2/5@md">
                        <div className="c-panel">
                            <div className="c-panel__content">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia hic eius sequi ipsum sunt officiis laudantium incidunt, laborum magni nisi aliquid blanditiis perferendis molestiae aspernatur voluptates ducimus, rem nam dolores?
                                <div>
                                    <Link to='/tags'>Browse by tags</Link>
                                </div>  
                            </div> 
                                            
                        </div>
                    </section>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;