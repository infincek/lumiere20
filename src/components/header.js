import React from "react"
import { Link } from "gatsby"

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
export const Header = () => {
    return (
        <Navbar />
    )
}

class Navbar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            navClass: "default"
        }
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
                <nav className={this.state.navClass}>
                    <div className="left">
                        <div className="logo">
                            <Link to="/" title="Home">
                                <img src="/images/logo.png" alt="Lumiere"/>
                            </Link>
                        </div>
                        <ul className="nav-links links">{navLinks}</ul>
                    </div>
                    <ul className="social-links links">{socialLinks}</ul>
                </nav>
                {
                    this.props.placeholder &&
                    <div className="placeholder"></div>
                }
            </React.Fragment>
        )
    }
}