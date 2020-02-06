import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Seo from "./seo"
import {Header } from "./header"
import Footer from "../components/footer"

import "../styles/base.scss";

class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.themes = ["light", "dark"]

        this.state = {
            theme: 0,
        }
    }

    componentDidMount() {
        if (localStorage.getItem("theme")) {
            const theme = Number(localStorage.getItem("theme"))

            this.setState({
                theme: theme,
            })
        }
    }

    cycleTheme = () => {
        let theme
        if (this.state.theme === this.themes.length - 1) {
            theme = 0
        } else {
            theme = this.state.theme + 1
        }

        this.setState({
            theme: theme,
        })

        localStorage.setItem("theme", theme)
    }

    render() {
        const nextTheme =
            this.state.theme === this.themes.length - 1
                ? 0
                : this.state.theme + 1

        const currentTheme = {
            index: this.state.theme,
            theme: this.themes[this.state.theme],
            nextTheme: this.themes[nextTheme],
        }
        return (
            <div
                id="wrapper"
                className={`theme-${this.themes[this.state.theme]} ${this.props.className || ''}`}
            >
                <div id="main">
                    <Seo {...this.props.seo} />
                    <Helmet>
                        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap" rel="stylesheet"/>
                        <link rel="icon shortcut" href="/favicon.png" type="image/png"/>
                    </Helmet>
                    <Header
                        cycleTheme={this.cycleTheme}
                        currentTheme={currentTheme}
                        {...this.props.headerProps}
                    />
                    <main>{this.props.children}</main>
                    <Footer />
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
