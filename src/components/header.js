import React from "react"
import { Link } from "gatsby"

import Sidebar from "./sidebar"
import menuIcon from "../assets/menu.png"

import "../styles/header.scss"

const links = {
    nav: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Events",
            url: "/events"
        },
        {
            name: "Workshops",
            url: "/workshops"
        }
    ],
    social: [
        {
            name: "Facebook",
            url: "#",
            icon: "/images/facebook.png"
        },
        {
            name: "Instagram",
            url: "#",
            icon: "/images/instagram.png"
        },
        {
            name: "YouTube",
            url: "#",
            icon: "/images/youtube.png"
        }
    ]
};

export {links} 
export const Header = ({ navPlaceholder }) => {
    return (
        <Navbar navPlaceholder={navPlaceholder}/>
    )
}

class Navbar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            navClass: "default",
            sidebarOpen: false
        }
    }

    sidebarOnChange = (c) => {
        this.setState({
            sidebarOpen: c
        })
    }

    componentDidMount(){
        window.addEventListener("scroll",this.onScroll)
    }

    onScroll = (e) => {
        if(window.scrollY > 0 && this.state.navClass !== "scrolled") {
            this.setState({
                navClass: "scrolled"
            })
        } else if(window.scrollY === 0 && this.state.navClass !== "default"){
            this.setState({ navClass: "default"});
        }
    }

    render (){
        let navLinks = [];
        navLinks = links.nav.map(i => {
            return (
                <li key={`nl-${i.name}-${i.url}`}>
                    <Link to={i.url} title={i.name}>{i.name}</Link> 
                </li>
            )
        })

        const navAdditionalClass = this.props.navPlaceholder === false ? "" : "bg";

        let socialLinks = [];
        socialLinks = links.social.map(i => {
            return (
                <li key={`slh-${i.name}-${i.url}`}>
                    <Link to={i.url} title={i.name}>
                        <span>
                            <img src={i.icon} alt={i.name}/>   
                        </span>
                    </Link> 
                </li>
            )
        })

        return (
            <React.Fragment>
                <nav className={this.state.navClass+` ${navAdditionalClass}`}>
                    <div className="mob">
                        <button title="Open Menu" onClick={() => this.sidebarOnChange(true)}><img src={menuIcon} alt="Menu"/></button>
                        <div className="logo">
                            <Link to="/" title="Home">
                                <img src="/images/logo.png" alt="Lumiere"/>
                            </Link>
                        </div>
                    </div>
                    <div className="wide">
                        <div className="left">
                            <div className="logo">
                                <Link to="/" title="Home">
                                    <img src="/images/logo.png" alt="Lumiere"/>
                                </Link>
                            </div>
                            <ul className="nav-links links">{navLinks}</ul>
                        </div>
                        <ul className="social-links links">{socialLinks}</ul>
                    </div>
                </nav>
                {
                    this.props.navPlaceholder !== false &&
                    <div className="nav-placeholder"></div>
                }
                <Sidebar onChange={this.sidebarOnChange} open={this.state.sidebarOpen}>
                    <div className="sidebar">
                        <div className="logo">
                            <Link to="/" title="Home">
                                <img src="/images/logo.png" alt="Lumiere"/>
                            </Link>
                        </div>
                        <ul className="nav-links links">{navLinks}</ul>
                    </div>
                </Sidebar>
            </React.Fragment>
        )
    }
}