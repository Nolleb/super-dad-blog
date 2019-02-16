import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/Layout";


const Template = ({data, pageContext}) => {
    const {prev, next} = pageContext;
    const {markdownRemark} = data;
    const title = markdownRemark.frontmatter.title;
    const html = markdownRemark.html;
    return(
        <Layout>
            <section className="o-layout__item u-3/5@md">
                <h1>{title}</h1>
                <div className="blog-post__content" dangerouslySetInnerHTML={{__html: html}}
                />
                {next && 
                    <Link to={next.frontmatter.path}>
                    NEXT
                    </Link>
                }
                {prev && 
                    <Link to={prev.frontmatter.path}>
                    PREV
                    </Link>
                }
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($pathSlug: String!){
        markdownRemark(frontmatter:{path:{eq: $pathSlug}}){
            html
            frontmatter{
                title
            }
        }
    }
`

export default Template;