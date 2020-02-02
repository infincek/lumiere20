import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import { events } from "../../data/base.json"

import "../styles/events.scss"

export default () => {
    const seo = {
        title: "Events",
        description: "Events of Lumiere",
    }

    const eventItems = events.map(i => (
        <EventItem
            title={i.title}
            url={i.url}
            image={i.image}
            key={"events-page" + i.title + "-" + i.url}
        />
    ))

    return (
        <Layout seo={seo}>
            <div className="container">
                <div className="title">
                    <h1>Events</h1>
                </div>
                <div className="page-section row events">
                    {eventItems}
                </div>
            </div>
        </Layout>
    )
}

const EventItem = ({ title, url, image }) => {
    return (
        <div className="event col s12 m6 l4 card">
            <div className="box">
                <Link to={url} className="overlay-link" title={title}>
                    {title}
                </Link>
                <img src={image} alt={title}/>
                <h4>{title}</h4>
                <span className="hover"></span>
            </div>
        </div>
    )
}
