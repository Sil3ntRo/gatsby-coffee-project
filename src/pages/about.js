import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import BackgroundSec from '../components/Globals/BackgroundSec';
import Info from "../components/Home/Info";


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <BackgroundSec img={data.img.childImageSharp.fluid}
                   title="about us" styleClass="about-background"
                   />
    <Info/>
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath: {eq:
    "about-background.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


export default AboutPage
