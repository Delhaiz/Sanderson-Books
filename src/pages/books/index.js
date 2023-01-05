import * as React from 'react'
import {graphql, Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  feruchemyImage,
  titleSection,
  booksList,
  singleBook,
  booksTitle
} from '../page.module.css'
import Book from '../../components/book'

const BooksPage = ({data: {
  allWpBook: {edges},
  wpPage: {booksFields}
}}) => {
  const image = getImage(booksFields.picture.localFile);
  return (
    <Layout pageTitle="Books of Brandon Sanderson">
      <section className={titleSection}>
        <article>
          <h2 className={booksTitle}>{booksFields.title}</h2>
          <div dangerouslySetInnerHTML={{__html: booksFields.description}}/>
        </article>
        <GatsbyImage
        image={image}
        alt={booksFields.picture.altText}
        className={feruchemyImage}
        />
        </section>
        <section className={booksList}>
          {edges.map(({node:book})=> <div className={singleBook} ><Book  slug={`/books/${book.slug}`} key={book.id} book={book}/></div>)}
        </section>
    </Layout>
  )
}

export const query = graphql`
query {
    allWpBook {
      edges {
        node {
          id
          slug
          bookFields {
            title
            coverImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
              altText
            }
          }
        }
      }
    }
    wpPage(slug: {eq: "books"}) {
      booksFields {
        description
        title
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

export default BooksPage