import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

const SiteMetadata = ({ title, image, description}) => {
  const {
    site: {
      siteMetadata: { locale, siteTitle, author },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          locale
          description
          title
          locale
          author
        }
      }
    }
  `)

  return (
    <Helmet
      defer={false}
      defaultTitle={description}
      title={title}
      titleTemplate={`%s | ${description}`}
    >
      <html lang={locale} />
      <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:author" content={author} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}



SiteMetadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string
}

SiteMetadata.defaultProps = {
  image: "/bronportfolio-scr-1.png",
}

export default SiteMetadata