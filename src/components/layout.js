import React from 'react'
import Header from './header'
import Footer from './footer'

import { useStaticQuery, graphql } from "gatsby"

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          company
          companyWebsite
        }
      }
    }
  `)
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex-grow mx-auto w-auto md:px-8 p-8">
          {children}
        </main>
        <Footer metaData={data.site.siteMetadata} />
      </div>
    </>
  )
  
  // return (
  //   <>
  //     <Helmet
  //       bodyAttributes={{class: 'flex flex-col min-h-screen'}}
  //     />
  //     <Header siteTitle={data.site.siteMetadata.title} />
  //     <main className="flex-grow mx-auto py-16 px-4 md:px-8">{children}</main>
  //     <footer>
  //       <div className="flex justify-center border-t-2">
  //         © {new Date().getFullYear()}, Produced by {` `} <a href="https://jamstack.training">JAMstack.training</a>
  //       </div>
  //     </footer>
  //   </>
  // )
}

export default Layout



// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0px 1.0875rem 1.45rem`,
//           paddingTop: 0,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
