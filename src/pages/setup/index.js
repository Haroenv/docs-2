import Layout from '../../components/layouts/default'
import React from 'react'

import { Link } from 'gatsby'
import { Spirit } from '../../components/spirit-styles.js'

const SetupIndexPage = () => (
    <Layout title="Home" headerDividerStyle="shadow">

        <div className={ Spirit.page.l }>

            <section className="br4 pt8 mt15 grid">
                <h2 className={ Spirit.h1 + `col-12` }>What is Ghost?</h2>
                <p className={ Spirit.excerpt + `col-8 mt2` }>Sunt duis ad aliqua aute do ex excepteur enim eiusmod nostrud occaecat dolor nisi. Qui nulla exercitation est minim commodo mollit quis incididunt. Est excepteur sit deserunt quis magna do irure quis. Fugiat id qui aliquip ullamco sunt. </p>
                <p className="col-12 mt5"><Link to="/setup/what-is-ghost/" className={ Spirit.excerpt + `blue link`}>Learn more</Link></p>
            </section>

            <section className="grid gutter-2">
                <h3 className={ Spirit.h4 + `col-12 mt15 mb2` }>I want to setup a site</h3>
                <div className="col-4">
                    <Link to="/setup/ghost-pro/" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ Spirit.h5 + `lightgrey`}>Ghost(Pro)</h4>
                    </div></Link>
                </div>
                <div className="col-4">
                    <Link to="/setup/ubuntu/" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ Spirit.h5 + `lightgrey` }>1-click Images</h4>
                    </div></Link>
                </div>
                <div className="col-4">
                    <Link to="/setup/ubuntu/" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ Spirit.h5 + `lightgrey` }>Install from Ghost CLI</h4>
                    </div></Link>
                </div>
            </section>

            <section className="grid gutter-2">
                <h3 className={ Spirit.h4 + `col-12 mt15 mb2` }>Community Packages</h3>
                <div className="col-4">
                    <Link to="/setup/docker/" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ Spirit.h5 + `lightgrey` }>Docker</h4>
                    </div></Link>
                </div>
            </section>

            <section className="grid gutter-2">
                <h3 className={ Spirit.h4 + `col-12 mt15 mb2` }>Locally</h3>
                <div className="col-4">
                    <Link to="/setup/local-install/just-trying" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ Spirit.h5 + `lightgrey` }>Trying out</h4>
                    </div></Link>
                </div>
                <div className="col-4">
                    <Link to="/setup/local-install/theme-development" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ Spirit.h5 + `lightgrey` }>Theme development</h4>
                    </div></Link>
                </div>
                <div className="col-4">
                    <Link to="/setup/install-from-source/" className="link midgrey"><div className="shadow-2 bg-white br4 pa4 pt20 pb20 tc">
                        <h4 className={ Spirit.h5 + `lightgrey` }>Contribution</h4>
                    </div></Link>
                </div>
            </section>

        </div>

    </Layout>
)

export default SetupIndexPage
