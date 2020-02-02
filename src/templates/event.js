import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"


export default ({ pageContext, data}) => {

    const meta = pageContext.data;

    const seo = {
        title: meta.title,
        image: meta.image,
        description: meta.description
    }


    const eventData = data.allMarkdownRemark.edges.map(item => {
        return (
            <EventItem data={item.node}/>
        )
    })
    
    return (
        <Layout seo={seo}>
            <div className="container">
                <div className="title">
                    <h1>{meta.title}</h1>
                </div>
                <div className="page-section row events">
                    {eventData}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query EventTemplate($regex: String){
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: $regex } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    srcSet
                                    ...GatsbyImageSharpFluid
                                }
                                id
                            }
                        }
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`;

const EventItem = ({data}) => {
    return (
        <div className="col s12 m6 card event-item">
            <div className="box">
                <Link to={data.fields.slug} className="overlay-link" title={data.frontmatter.title}>{data.frontmatter.title}</Link>
                <Img fluid={data.frontmatter.image.childImageSharp.fluid}/>
                <h4>{data.frontmatter.title}</h4>
            </div>
        </div>
    )
}