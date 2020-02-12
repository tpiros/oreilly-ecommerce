import React from 'react'

function Footer({ metaData }) {

  return (
    <footer className="flex p-2 bg-black text-white text-sm border-t-2 border-red-600 justify-center">
      © {metaData.title}, {new Date().getFullYear()}. Brought to you by {metaData.author} (<a className="link underline" href={metaData.companyWebsite}>{metaData.company}</a>)
    </footer>
  )
}

export default Footer




// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >

//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
