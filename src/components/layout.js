import React from 'react'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata'

const Layout = ({ children }) => {
  const { title, description, author, keywords } = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          :root {
            --dark: #000000;
            --light: #ffffff;
            --primary: #a7bea9;
            --secondary: #d9e3da;
          }

          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: var(--dark);
            background: var(--light);
            letter-spacing: 2px;
            font-size: 20px;
            line-height: 1.5;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={description} content={description} author={author} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
