import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/Layout";

const allTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext;
    return (
        <Layout>
            <section className="o-layout__item u-3/5@md">
                <ul>
                    {tags.map((tagName, index)=>{
                        return(
                            <li key={index}>
                                <Link to={`tags/${tagName}`}>
                                    {tagName}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </Layout>
    )
}

export default allTagsTemplate;