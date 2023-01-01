import * as React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const BooksPage = ({data: {allWpBook: {edges}}}) => {
  return (
    <Layout pageTitle="Books of Brandon Sanderson">
      {edges.map((item) => {
        const book = item.node.bookFields;
        const image = getImage(book.coverImage.localFile);
        return (
            <div key={item.node.id} className='BooksContent'>
            <GatsbyImage image={image} alt={book.coverImage.altText}/>
            <p>{book.title}</p>
            </div>
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