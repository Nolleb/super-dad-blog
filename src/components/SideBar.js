import React from "react";
import { graphql, Link } from "gatsby";

const SideBar = () => {
    
    return(
        <section className="o-layout__item u-2/5@md">
            <ul>
                <li className="c-panel u-1s/2@md">
                    <div className="c-panel__content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia hic eius sequi ipsum sunt officiis laudantium incidunt, laborum magni nisi aliquid blanditiis perferendis molestiae aspernatur voluptates ducimus, rem nam dolores?
                        
                        <div>
                            <Link to='/tags'>Browse by tags</Link>
                        </div>  
                    </div> 
                                    
                </li>
            </ul>
        </section>
    )
}



export default SideBar;