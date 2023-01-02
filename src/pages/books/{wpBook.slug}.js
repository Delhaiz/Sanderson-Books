import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  singleBookContent,
  singelBookImage,
  singelBookTitle,
  singleBookGenres
} from '../page.module.css'
const BookPage = ({data: {
  wpBook: {
    bookFields: book,
    subgenres: {nodes: subGenres}
  }},
}) => {
  const image = getImage(book.coverImage.localFile);
  return (
    <Layout pageTitle="Book Template">
    <div className={singleBookContent}>
      <div>
      <h1 className={singelBookTitle}>{book.title}</h1>
      <h3 className={singelBookTitle}>{book.bookSeries}</h3>
      <div dangerouslySetInnerHTML={{__html: book.summary}} />
      </div>
      <div className={singelBookImage}>
      <GatsbyImage image={image} alt={book.coverImage.altText}/>
      <p><b>GENRES:</b> {book.genre.map((genre) => <div className={singleBookGenres}>{genre}</div>)}</p>
      <p><b>SUBGENRES:</b> {subGenres.map((subGenre) => <div className={singleBookGenres}>{subGenre.name}</div>)}</p>
      <p><b>RATING:</b> {book.rating}</p>
      <p><b>PUBLISH YEAR:</b> {book.publishYear}</p>
      <p><b>PAGE COUNT:</b> {book.pageCount}</p>
      <p><b>LANGUAGE:</b> {book.language}</p>
      <p><b>ISBN NUMBER:</b> {book.isbnNumber}</p>
      </div>
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