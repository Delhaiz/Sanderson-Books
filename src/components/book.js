import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    featuredBookImage
} from './book.module.css'

const Book = ({ book, slug }) => {
  const profile = getImage(book.bookFields.coverImage.localFile)
  return (
    <Link to={slug}>
      <GatsbyImage
        image={profile}
        alt={book.bookFields.coverImage.altText}
        className={featuredBookImage}
      />
    </Link>
  )
}

export default Book;