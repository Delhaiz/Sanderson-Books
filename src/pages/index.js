import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Book from '../components/book.js'
import {
  homeSection,
  homeArticle,
  homeImage,
  callToAction,
  homeTitle,
  featuredBooks,
  featuredBooksTitle,
  singleBook
} from './page.module.css'

const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {
  const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <section className={homeSection}>
        <article className={homeArticle}>
          <h1 className={homeTitle}>{homeFields.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
          <a target="__blank" href={homeFields.callToAction.url} className={callToAction}>
            {homeFields.callToAction.title}
          </a>
        </article>
        <div className={homeImage}>
          <GatsbyImage
            image={image}
            alt={homeFields.picture.altText}
          />
        </div>
      </section>
      <section>
          <h2 className={featuredBooksTitle}>Featured Books</h2>
          <p>
            Here are some of our featured books by Brandon Sanderson. 
          </p>
          <div className={featuredBooks}>
            {homeFields.featuredBooks.map(book => {
              return <div className={singleBook}><Book slug={`books/${book.slug}`} key={book.id} book={book}/></div>
            })}
          </div>
        </section>
    </Layout>
  );
}

export const query = graphql`
query  {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      featuredBooks {
        ... on WpBook {
          id
          slug
          bookFields {
            title
            bookSeries
            coverImage {
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
      callToAction {
        title
        url
      }
      title
      description
      picture {
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

export default IndexPage