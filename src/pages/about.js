import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  aboutTitles,
  writerImage,
  aboutSection,
  missionSection,
  aboutImage
} from './page.module.css'

const AboutPage = ({
  data:{
    wpPage:{
      aboutUsFields
    }
  }
}) => {
  const goalPicture = getImage(aboutUsFields.goalPicture.localFile);
  const missionPicture = getImage(aboutUsFields.missionPicture.localFile);
  return (
    <Layout pageTitle="About Us">
      <section className={aboutSection}>
        <article>
          <h2 className={aboutTitles}>{aboutUsFields.goalTitle}</h2>
          <div dangerouslySetInnerHTML={{__html: aboutUsFields.goalDescription}}/>
        </article>
        <GatsbyImage 
          image={goalPicture}
          alt={aboutUsFields.goalPicture.altText}
          className={aboutImage}
        />
      </section>
      <section className={missionSection}>
      <GatsbyImage 
          image={missionPicture}
          alt={aboutUsFields.missionPicture.altText}
          className={writerImage}
        />
        <article>
          <h2 className={aboutTitles}>{aboutUsFields.missionTitle}</h2>
          <div dangerouslySetInnerHTML={{__html: aboutUsFields.missionDescription}}/>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "about-us"}) {
    aboutUsFields {
      goalTitle
      goalDescription
      goalPicture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      missionTitle
      missionDescription
      missionPicture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}

`

export default AboutPage