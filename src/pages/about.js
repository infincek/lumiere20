import React from 'react'
import Layout from '../components/layout'

export default () => {
    const seo = {
        title: "About",
        description: "About"
    }
    return (
        <Layout seo={seo}>
            <div className="container">
                <div className="title">
                    <h1>About</h1>
                </div>
                <div className="page page-section">
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
        </Layout>
    )
}