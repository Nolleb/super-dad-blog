import React from "react";
import { graphql, Link } from "gatsby";
import { StaticQuery } from "gatsby";


const DescriptionAndTags = ({data}) => {
   const {edges} = data.allMarkdownRemark;
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
                                <h3>Super Dad</h3>
                            </div>
                        </div>
                        <p className="c-blockquote">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint fugit alias similique voluptatem sunt accusamus itaque quaerat assumenda quia culpa repellat placeat magnam labore commodi, omnis dolorem perspiciatis recusandae.
                       </p>
                       
                       <div>
                        <h4>Main categories</h4>
                        {edges.map(edge=>{
                                const {frontmatter} = edge.node;
                                
                                return(
                                    <p className="test" key={frontmatter.tags}>
                                    {frontmatter.tags.map((tagName, index)=>{
                                            return(
                                                <span className="" key={index}>
                                                    <Link to={`tags/${tagName}`}>
                                                        {tagName}
                                                    </Link>
                                                </span>
                                            )
                                        })}
                                    </p>
                                )
                                
                            })}
                            </div>
                       
                       
                        <div className="paragraph">
                            <ul className="c-menu">
                                <li className="c-menu__item"><Link to='/' className="c-menu__item-link" activeClassName="c-menu__item--active">Articles</Link></li>
                                <li className="c-menu__item"><Link to='/about' className="c-menu__item-link" activeClassName="c-menu__item--active">About</Link></li>
                                <li className="c-menu__item"><Link to='/contact' className="c-menu__item-link" activeClassName="c-menu__item--active">Contact</Link></li>
                                <li className="c-menu__item"><Link to='/tags' className="c-menu__item-link" activeClassName="c-menu__item--active">Browse by tags</Link></li>
                            </ul>
                        </div>
                      
                    </div> 
                                    
                </li>
            </ul>
        </section>
    )
}

const SideBar = () => {
    return(
        <StaticQuery
            query={graphql`
                query  {
                    allMarkdownRemark {
                        edges {
                        node {
                            frontmatter {
                                tags
                            }
                        }
                        }
                    }
                }
            `}
            render={data => <DescriptionAndTags data={data} />}
        />
    )
}

export default SideBar;
