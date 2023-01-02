import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  content, 
  nav, 
  navLinks, 
  navLinkItem, 
  navLinkContent, 
  siteTitle ,
  mainContent
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={content}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <header className={siteTitle}>
          <h1>{data.site.siteMetadata.title}</h1>
        </header>
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link className={navLinkContent} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkContent} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkContent} to="/books">
              Books
            </Link>
          </li>
        </ul>
      </nav>
      <main className={mainContent}>
        {children}
      </main>
    </div>
  )
}

export default Layout