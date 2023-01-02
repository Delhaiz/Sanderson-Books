import React from "react"
import {
    footer,
    title,
    instagram,
    twitter,
    facebook,
    links,
    rightSection,
    leftSection
} from './footer.module.css'

const Footer = ({ siteTitle, creatorInfo }) => {
  return (
    <footer className={footer}>
      <section className={leftSection}>
        <p className={title}>{siteTitle}</p>
        <p>Jonas Vael</p>
        <p>All rights reserved.</p>
      </section>
      <section className={rightSection}>
        <p>{`${creatorInfo.address}, ${creatorInfo.zipCode} ${creatorInfo.city}`}</p>
        <div className={links}>
          Follow us:
          <a
            target="__blank"
            href={creatorInfo.instagram}
            className={instagram}
          />
           <a
            className={twitter}
            target="__blank"
            href={creatorInfo.twitter}
          />
          <a
            target="__blank"
            href={creatorInfo.facebook}
            className={facebook}
          />
        </div>
      </section>
    </footer>
  )
}

export default Footer