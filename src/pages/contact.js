import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import{
  contactSection,
  links,
  instagram,
  facebook,
  twitter,
  contactImage,
  contactInfo,
  contactEmail
} from './page.module.css'

const ContactPage = ({data:{
  wpPage: {contactUsFields}
}}) => {
  const image = getImage(contactUsFields.picture.localFile)
  return(
  <Layout>
    <section className={contactSection}>
      <article>
        <h2>{contactUsFields.title}</h2>
        <div dangerouslySetInnerHTML={{__html: contactUsFields.description}}/>
        <div className={contactInfo}>
        <div className={contactEmail}>
          Email: <a href={`mailto:${contactUsFields.email}`}>{contactUsFields.email}</a>
        </div>
        <div>
        Phone: <a href={`tel:${contactUsFields.phoneNumber}`}>{contactUsFields.phoneNumber}</a>
        </div>
        <p>{`${contactUsFields.address}, ${contactUsFields.zipCode} ${contactUsFields.city}`}</p>
        <div className={links}>
          Follow us:
          <a
            target="__blank"
            href={contactUsFields.instagram}
            className={instagram}
          />
           <a
            target="__blank"
            href={contactUsFields.twitter}
            className={twitter}
          />
          <a
            target="__blank"
            href={contactUsFields.facebook}
            className={facebook}
          />
        </div>
        </div>
      </article>
      <GatsbyImage
        className={contactImage}
        image={image}
        alt={contactUsFields.picture.altText}
      />
    </section>
  </Layout>
  );
}

export const query = graphql`
query w {
  wpPage(slug: {eq: "contact"}) {
    contactUsFields {
      address
      city
      zipCode
      facebook
      twitter
      instagram
      description
      title
      phoneNumber
      email
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`

export default ContactPage