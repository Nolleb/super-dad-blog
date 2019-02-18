import React from "react";
import { graphql, Link } from "gatsby";

const SideBar = () => {
    
    return(
        <section className="o-layout__item u-1/4@md">
            <ul>
                <li className="c-panel u-1s/2@md">
                   
                    <div className="c-panel__content">
                        <div className="o-media  o-media--middle c-avatar">
                            <span className="o-media__img">
                                <img className="c-avatar__img" src="https://placeimg.com/50/50/any" alt="Portrait" width="50" height="50"/>
                            </span>
                            <div className="o-media__body">
                                <h3>Super Dad hero</h3>
                            </div>
                        </div>
                        <p className="c-blockquote">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia hic eius sequi ipsum sunt officiis laudantium incidunt, laborum magni nisi aliquid blanditiis perferendis molestiae aspernatur voluptates ducimus, rem nam dolores?</p>
                        <div className="paragraph">
                            <ul className="o-list">
                                <li>This</li>
                                <li>That</li>
                                <li>Thus</li>
                                <li>Toto</li>
                                <li>Tata</li>
                                <li>Titi</li>
                            </ul>
                        </div>
                        <div className="paragraph">
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li><Link to='/tags'>Browse by tags</Link></li>
                            </ul>
                        </div>
                      
                    </div> 
                                    
                </li>
            </ul>
        </section>
    )
}



export default SideBar;