import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { generalGuidelines } from "../../data/base.json"

import "../styles/post.scss"

export default ({data}) => {

    const seo = {
        title: data.markdownRemark.frontmatter.title,
        description: data.markdownRemark.frontmatter.description,
        image: data.markdownRemark.frontmatter.image.publicURL
    }

    const rules = data.markdownRemark.frontmatter.rules.map((item, i) => {
        return (
            <Rule number={i+1} rule={item} key={"rule"+i}/>
        )
    })

    const allGeneralGuidelines = generalGuidelines.map((item,i) => {
        return (
            <Rule number={i+1} rule={item} key={"generalg"+i}/>
        )
    })

    return (
        <Layout seo={seo}>
            <div className="container">
                <div className="title">
                    <h1>{data.markdownRemark.frontmatter.title}</h1>
                </div>
                <div className="page-section row page">
                    <div dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html
                    }}></div>
                    <div className="row rules">
                        <div className="title">
                            <h3>Rules</h3>
                        </div>
                        {rules}
                    </div>
                    <div className="row general-guidelines rules">
                        <div className="title">
                            <h3>General Guidelines</h3>
                        </div>
                        {allGeneralGuidelines}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            id
            frontmatter {
                title
                description
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                rules
            }
        }
    }
`


const Rule = (data) => {
    return(
        <div className="rule card">
            <div className="box">
                <span className="number">{data.number}</span>
                <div className="content">{data.rule}</div>
            </div>
        </div>
    )
}