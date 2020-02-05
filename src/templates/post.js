import React from "react"
import { graphql } from "gatsby"
import { FiUser as User } from "react-icons/fi"
import { AiOutlineTrophy as Trophy } from "react-icons/ai"
import { FaMoneyBillWaveAlt as Money } from "react-icons/fa"


import Layout from "../components/layout"

import { generalGuidelines } from "../../data/base.json"

import "../styles/post.scss"

export default ({ data }) => {
    const seo = {
        title: data.markdownRemark.frontmatter.title,
        description: data.markdownRemark.frontmatter.description,
        image: data.markdownRemark.frontmatter.image.publicURL,
    }

    const rules = data.markdownRemark.frontmatter.rules.map((item, i) => {
        return <Rule number={i + 1} rule={item} key={"rule" + i} />
    })

    const allGeneralGuidelines = generalGuidelines.map((item, i) => {
        return <Rule number={i + 1} rule={item} key={"generalg" + i} />
    })

    const eventHeads = data.markdownRemark.frontmatter.eventHeads.map((item,i) => {
        return <DetailCard icon={<User />} rep="event head" content={item.name} phone={item.phone} key={`detail-card-eh-${i}`}/>
    })

    return (
        <Layout seo={seo}>
            <div className="container">
                <div className="title">
                    <h1>{data.markdownRemark.frontmatter.title}</h1>
                </div>
                <div className="page-section page">
                    <div className="row">
                        <div className="col s12 m6 l7">
                            <div className="main-content" 
                                dangerouslySetInnerHTML={{
                                    __html: data.markdownRemark.html,
                                }}
                            ></div>
                            <div className="details">
                                {eventHeads}
                                <DetailCard className="fill" icon={<Trophy />} rep="prize" content={data.markdownRemark.frontmatter.prize}/>
                                <DetailCard className="fill" icon={<Money />} rep="registration fee" content={data.markdownRemark.frontmatter.registration === 0 ? "FREE" : data.markdownRemark.frontmatter.registration}/>
                            </div>
                        </div>
                        <div className="col s12 m6 l5">
                            <div className="rules">
                                <div className="title">
                                    <h3>Rules</h3>
                                </div>
                                {rules}
                            </div>
                        </div>
                    </div>
                    <div className="general-guidelines rules">
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
                eventHeads {
                    name
                    phone
                }
                prize
                registration
            }
        }
    }
`

const Rule = data => {
    return (
        <div className="rule card">
            <div className="box">
                <span className="number">{data.number}</span>
                <div className="content">{data.rule}</div>
            </div>
        </div>
    )
}

const DetailCard = data => {
    return (
        <div className={`card ${data.className || ''}`}>
            <div className="box">
                <span className="icon">
                    {data.icon}
                </span>
                <div className="content">
                    <span className="rep">{data.rep}</span>
                    <p>{data.content}</p>
                    {data.phone &&
                        <a href={`tel:${data.phone}`}>{data.phone}</a>
                    }
                </div>
            </div>
        </div>
    )
}