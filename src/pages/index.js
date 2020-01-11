import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import bgVideo from "../assets/bgvideo.mp4"
import bgImage from "../assets/bgimage.jpg"
import phone from "../assets/phone.png"

import "../styles/index.scss"

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cardTY: 0
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll = (e) => {
        const w = window;
        if(w.scrollY >= 0 && w.scrollY < 150){
            this.setState({
                cardTY: (w.scrollY/12)
            })
        }
    }

    
    render(){
        const seo = {
            title: "Lumiere 20",
        }

        const events = [
            {
                title: "General Events",
                url: "/events/general"
            },{
                title: "Technical Events",
                url: "/events/technical"
            },{
                title: "Arts Events",
                url: "/events/arts"
            },{
                title: "Cultural Events",
                url: "/events/cultural"
            },{
                title: "Publicity Events",
                url: "/events/publicity"
            },{
                title: "Workshops",
                url: "/events/Workshops"
            },
        ];

        const eventItems = events.map(i => <EventItem title={i.title} url={i.url} key={"event"+i.title+"-"+i.url}/>);

        return (
            <Layout seo={seo}>
                <div className="bgvideo">
                    <video loop autoPlay poster={bgImage}>
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="wall">
                    <div className="centered">    
                        <img src="/images/logo.png" alt="Lumiere"/>
                        <h1>Lumiere '20</h1>
                    </div>
                </div>
                <div className="info">
                    <div className="dots"></div>
                    <div className="card" style={{
                        transform: `translate(0, -${this.state.cardTY}%)`
                    }}>
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
                <div className="events row">
                    {eventItems}
                </div>
                <div className="section about" id="about">
                    <div className="container">
                        <div className="title">
                            <h2>About</h2>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum non ex ac volutpat. Vestibulum ullamcorper lectus at bibendum molestie. Sed rutrum nisi nibh, eu pulvinar magna ultrices sed. Nulla euismod commodo pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum sit amet lacus placerat, volutpat ante sed, eleifend nisi. Pellentesque pharetra felis mauris.In hac habitasse platea dictumst. Proin et enim blandit, luctus dolor nec, bibendum ligula. In vulputate quam leo, pulvinar posuere elit sodales vel.</p>
                        </div>
                    </div>
                </div>
                <div className="section contact">
                    <div className="container">
                        <div className="title">
                            <h2>Contact</h2>
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col s12 m6">
                                    <p>College of Engineering <br/> Kidangoor <br/> Kottayam</p>
                                    <p style={{ marginTop: "24px"}} className="tel">
                                        <a href="tel:9999999999">
                                            <span><img src={phone} alt=""/></span>
                                            9999999999
                                        </a><br/>
                                        <a href="tel:9999999999">
                                            <span><img src={phone} alt=""/></span>
                                            9999999999
                                        </a><br/>
                                    </p>
                                </div>
                                <div className="col s12 m6">
                                    <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.621716581574!2d76.6211893!3d9.6677578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd62bf193983589fe!2sCollege%20of%20Engineering%20Kidangoor!5e0!3m2!1sen!2sin!4v1578758675732!5m2!1sen!2sin" width="400" height="400" frameBorder="0" style={{border: 0}} allowFullScreen=""></iframe>
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

const EventItem = ({title, url}) => {
    return (
        <div className="event col s12 m4">
            <Link to={url} className="overlay-link" title={title}>{title}</Link>
            <h3>{title}</h3>
            <span className="hover"></span>
        </div>
    )
}
