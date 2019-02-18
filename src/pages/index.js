import React from "react";
import {graphql, Link} from 'gatsby';
import Layout from "../components/Layout";
import main from "../CSS/main.scss";

const HomePage = ({data}) => {
    const {edges} = data.allMarkdownRemark;
    return (
        <Layout>
                <section className="o-layout__item u-3/5@md">
                    <div className="o-layout">
                    
                    {edges.map(edge=>{
                        const {frontmatter} = edge.node;
                        return(
                            <div className="o-layout__item u-1/2@sm" key={frontmatter.path}>        
                            <div className="c-panel" >
                                <div className="c-panel__head c-panel__head--fluid">
                                    <img className="c-panel__head-media" src="https://placeimg.com/480/480/any"></img>
                                </div>
                                <div className="c-panel__content">
                                    <div className="o-headline">
                                        <h4>{frontmatter.date}
                                        {frontmatter.tags.map((tagName, index)=>{
                                            return(
                                            <span className="c-panel__tag" key={index}>
                                                <Link to={`tags/${tagName}`}>
                                                    {tagName}
                                                </Link>
                                            </span>)
                                        })} 
                                        </h4>
                                    </div>
                                    <div className="o-headline">
                                        <h2>{frontmatter.title}</h2>
                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia aliquam officia voluptatem, sed nostrum maxime nemo atque ad facilis repellendus commodi inventore possimus suscipit velit autem quam pariatur fugit?
                                   
                                </div>
                                <Link className="c-panel__link" to={frontmatter.path}>
                                    READ MORE ...
                                </Link>
                            </div>
                            </div>   
                        )
                    })}
                
                    </div>
                </section>
        </Layout>
    )
}

export const query = graphql`
    query HomepageQuery {
        allMarkdownRemark (
            sort: {order: DESC, fields: [frontmatter___date]}
            ){
            edges {
              node {
                frontmatter {
                    title
                    path
                    date
                    tags
                }
              }
            }
        }
    }
`
export default HomePage;