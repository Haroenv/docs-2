import React from 'react'
import Layout from '../../../components/layouts/default'
import { Spirit } from '../../../components/spirit-styles'

const Page = () => (
    <Layout title="Home" headerDividerStyle="hairline" bodyClass="bg-white">
        <div className="center mw-m mt10">
            <div>

                <h1 className={ Spirit.h1 }>UI typography demo</h1>
                <h2 className={ Spirit.h2 }>Heading two</h2>
                <h3 className={ Spirit.h3 }>Heading three</h3>
                <h4 className={ Spirit.h4 }>Heading four</h4>
                <h5 className={ Spirit.h5 }>Heading five</h5>
                <h6 className={ Spirit.h6 }>Heading six</h6>
                <p className={ Spirit.p }>Irure nulla irure ullamco commodo qui ad ea aute magna sunt mollit duis. Incididunt mollit in anim sit qui anim. Cillum dolor occaecat elit velit id qui commodo proident aliqua sit. Occaecat voluptate consectetur anim anim magna nostrud esse esse nisi. Occaecat consectetur cupidatat laboris veniam non ex. Ullamco occaecat pariatur aliqua ullamco culpa Lorem proident id ex excepteur voluptate incididunt dolor. Non velit nulla elit culpa mollit anim.</p>
                <p className={ Spirit.small }>Irure nulla irure ullamco commodo qui ad ea aute magna sunt mollit duis. Incididunt mollit in anim sit qui anim. Cillum dolor occaecat elit velit id qui commodo proident aliqua sit. Occaecat voluptate consectetur anim anim magna nostrud esse esse nisi. Occaecat consectetur cupidatat laboris veniam non ex. Ullamco occaecat pariatur aliqua ullamco culpa Lorem proident id ex excepteur voluptate incididunt dolor. Non velit nulla elit culpa mollit anim.</p>
                <p className={ Spirit.tiny }>Irure nulla irure ullamco commodo qui ad ea aute magna sunt mollit duis. Incididunt mollit in anim sit qui anim. Cillum dolor occaecat elit velit id qui commodo proident aliqua sit. Occaecat voluptate consectetur anim anim magna nostrud esse esse nisi. Occaecat consectetur cupidatat laboris veniam non ex. Ullamco occaecat pariatur aliqua ullamco culpa Lorem proident id ex excepteur voluptate incididunt dolor. Non velit nulla elit culpa mollit anim.</p>

            </div>
        </div>
    </Layout>
)

export default Page