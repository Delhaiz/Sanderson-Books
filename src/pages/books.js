import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

const BooksPage = ({data: {allWpBook: {edges}}}) => {
  return (
    <Layout pageTitle="Books of Brandon Sanderson">
      {edges.map((item) => {
        const book = item.node.bookFields;
        return (
            <div className='BooksContent'>
            <p key={item.node.id}>{book.title}</p>
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
          }
        }
      }
    }
  }
`

export default BooksPage