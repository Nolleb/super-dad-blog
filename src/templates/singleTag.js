import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/Layout";

const singleTagTemplate = ({data, pageContext}) => {
    const {posts, tagName} = pageContext;
    return (
        <Layout>
            <section className="o-layout__item u-3/5@md">
                Posts about {`${tagName}`}
                <ul>
                    {posts.map((post, index)=>{
                        return(
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </Layout>
    )
}

export default singleTagTemplate;