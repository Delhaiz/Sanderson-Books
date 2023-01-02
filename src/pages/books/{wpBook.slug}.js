import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BookPage = ({data: {wpBook: {bookFields: book}}}) => {
  const image = getImage(book.coverImage.localFile);
  return (
    <Layout pageTitle="Book Template">
    <div>
      <h1>{book.title}</h1>
      <h3>{book.bookSeries}</h3>
      <GatsbyImage image={image} alt={book.coverImage.altText}/>
      <h3>{/*subgenres?*/}</h3>
      <p>Genres: {book.genre.map((genre) => <div>{genre}</div>)}</p>
      <div dangerouslySetInnerHTML={{__html: book.summary}} />
      <p>Rating: {book.rating}</p>
      <p>Publish Year: {book.publishYear}</p>
      <p>Page Count: {book.pageCount}</p>
      <p>Language: {book.language}</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpBook(id: {eq: $id}) {
    bookFields {
      title
      summary
      rating
      publishYear
      pageCount
      language
      isbnNumber
      genre
      bookSeries
      coverImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
    subgenres {
      nodes {
        name
      }
    }
  }
}
`

export default BookPage