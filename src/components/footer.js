import React from "react"
import { Link } from "gatsby"

import { links } from "./header"

export default () => {
    const fLinks = links.nav.map(i => (
        <li key={`fl-${i.name}-${i.url}`}>
            <Link to={i.url} title={i.name}>{i.name}</Link> 
        </li>
    ))
    return (
        <div className="footer">
            <div className="content">
                <Link to="/" title="Home">
                    <img src="/images/logo.png" alt="Lumiere 20"/>
                </Link>
                <ul>
                    {fLinks}
                </ul>
            </div>
        </div>
    )
}