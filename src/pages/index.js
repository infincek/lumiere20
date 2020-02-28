import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import bgImage from "../assets/bgimage.jpg"
import phone from "../assets/phone.png"

import baseJson from "../../data/base.json"

import "../styles/index.scss"

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardTY: 0,
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll)
    }

    onScroll = e => {
        const w = window
        if (w.scrollY >= 0 && w.scrollY < 150) {
            this.setState({
                cardTY: w.scrollY / 12,
            })
        }
    }

    render() {
        const seo = {
            title: "Lumiere 20",
        }

        const {events} = baseJson;
        
        const eventItems = events.map(i => (
            <EventItem
                title={i.title}
                url={i.url}
                key={"event" + i.title + "-" + i.url}
            />
        ))

        return (
            <Layout seo={seo} className="front-page" headerProps={{
                navPlaceholder: false
            }}>
                <div className="bgvideo">
                    <video autoPlay muted loop poster={bgImage}>
                        <source src="/video/bgvideo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="wall">
                    <div className="centered">
                        <img src="/images/logo.png" alt="Lumiere" />
                        <h1>Lumiere '20</h1>
                    </div>
                </div>
                <div className="info">
                    <div className="dots"></div>
                    <div
                        className="card"
                        style={{
                            transform: `translate(0, -${this.state.cardTY}%)`,
                        }}
                    >
                        <h3>National Level Techno-Cultural Fest</h3>
                        <div className="more-details">
                            <div className="item">
                                <p>Prices Worth</p>
                                <h4>300K</h4>
                            </div>
                            <div className="item">
                                <p>February</p>
                                <h4>27 | 28</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="events row">{eventItems}</div>
                <div className="section about" id="about">
                    <div className="container">
                        <div className="title">
                            <h2>About</h2>
                        </div>
                        <div className="content">
                            <p>
                                Lumiere is the celebration of life. We celebrate
                                Lumiere with the purpose of life which is not
                                merely survival, but to thrive and do it with
                                some passion and love, which results in a game,
                                The game of life. We are setting up the stage to
                                find yourself in these cultural programmes and
                                competitions as we aim Lumiere 20 to set the bar
                                one up higher than before. This is a celebration
                                of unity where people congregate, rising above
                                their narrow prejudices and shallow preferences,
                                ripping apart the chains of politics, religion,
                                region, etc. It is a platform where differences
                                are forgotten but they are not surrendered, in
                                the name of love and reverence for a fellow
                                being. Lumiere20 will not just welcome the
                                'future engineers', this is for all students who
                                have the courage to show and tell what they can
                                do if given proper stages. A place where people
                                from all walks of life can gather and revel in
                                their comfort. Lumiere20 is an opportunity, a
                                platform, to show you the path, so that all may
                                benefit. Lumiere20 is something you wouldn't
                                want to miss.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <img src="/images/sponsors.jpg" alt="Sponsors" style={{
                        width: "100%"
                    }}/>
                </div>
                <div className="section contact">
                    <div className="container">
                        <div className="title">
                            <h2>Contact</h2>
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col s12 m6">
                                    <p>
                                        College of Engineering <br /> Kidangoor{" "}
                                        <br /> Kottayam
                                    </p>
                                    <p
                                        style={{ marginTop: "24px" }}
                                        className="tel"
                                    >
                                        <a href="tel:8921364143">
                                            <span>
                                                <img src={phone} alt="" />
                                            </span>
                                            Harikrishna R :&nbsp;&nbsp; 8921364143
                                        </a>
                                        <br />
                                        <a href="tel:9999999999">
                                            <span>
                                                <img src={phone} alt="" />
                                            </span>
                                            Saran A S :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8281654074
                                        </a>
                                        <br />
                                    </p>
                                </div>
                                <div className="col s12 m6">
                                    <div className="map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.621716581574!2d76.6211893!3d9.6677578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd62bf193983589fe!2sCollege%20of%20Engineering%20Kidangoor!5e0!3m2!1sen!2sin!4v1578758675732!5m2!1sen!2sin"
                                            width="400"
                                            height="400"
                                            frameBorder="0"
                                            title="Google Map"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const EventItem = ({ title, url }) => {
    return (
        <div className="event col s12 m6 l4">
            <Link to={url} className="overlay-link" title={title}>
                {title}
            </Link>
            <h3>{title}</h3>
            <span className="hover"></span>
        </div>
    )
}
