import * as React from 'react'
import {graphql, Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BooksPage = ({data: {allWpBook: {edges}}}) => {
  return (
    <Layout pageTitle="Books of Brandon Sanderson">
      {edges.map((item) => {
        const book = item.node.bookFields;
        const slug = item.node.slug;
        const image = getImage(book.coverImage.localFile);
        return (
            <Link key={item.node.id} className='BooksContent' to={`/books/${slug}`}>
            <GatsbyImage image={image} alt={book.coverImage.altText}/>
            <p>{book.title}</p>
            </Link>
        )
      })}
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
  }
`

export default BooksPage