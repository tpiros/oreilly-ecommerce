import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <nav className="bg-black text-white">
        <div className="flex flex-wrap container justify-between mx-auto p-2">
          <Link to="/" className="flex items-center no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-17 0 483 483.02631"
              className="w-8"><g id="outline"><path fill="red" d="M454.8,403.789,375.221,275.228a610.123,610.123,0,0,0-55.337-75.654L304,181.041V160a71.941,71.941,0,0,1,28.315-57.213l31.263-15.632A8,8,0,0,0,366.247,75l-32-40-.006.005a7.975,7.975,0,0,0-2.663-2.163l-32-16a7.993,7.993,0,0,0-7.691.294A69.816,69.816,0,0,1,256,27.08a69.816,69.816,0,0,1-35.887-9.941l0,0a7.99,7.99,0,0,0-7.688-.3l-32,16a7.975,7.975,0,0,0-2.663,2.163L177.753,35l-32,40a8,8,0,0,0,2.669,12.152l31.263,15.632A71.941,71.941,0,0,1,208,160v21.041l-15.883,18.531a610.245,610.245,0,0,0-55.339,75.657L57.2,403.789a8,8,0,0,0,.148,8.651,67.57,67.57,0,0,0,28.148,23.979l-4.4,7.55.008,0a7.9,7.9,0,0,0-.525,1.054,8,8,0,0,0,4.454,10.4l9.372,3.75a109.49,109.49,0,0,0,52.479,7.258L144.2,478.228a8,8,0,0,0,6.484,9.663l18.333,3.06A372.758,372.758,0,0,0,230.08,496h51.84a372.713,372.713,0,0,0,61.067-5.05l18.33-3.059a8,8,0,0,0,6.484-9.663l-2.679-11.792a109.538,109.538,0,0,0,52.481-7.258l9.37-3.75a7.949,7.949,0,0,0,3.93-11.455l.007,0-4.4-7.55a67.57,67.57,0,0,0,28.148-23.979A8,8,0,0,0,454.8,403.789ZM336,83.056V62.806l11.571,14.465ZM287.6,37.031a32,32,0,0,1-63.2,0A85.753,85.753,0,0,0,256,43.08,85.751,85.751,0,0,0,287.6,37.031ZM176,62.806v20.25l-11.571-5.785Zm16,29.316V44.944l16.242-8.121a48,48,0,0,0,95.516,0L320,44.944V92.122a87.963,87.963,0,0,0-31.647,60.084A44.527,44.527,0,0,0,256,171.072a44.527,44.527,0,0,0-32.353-18.866A87.963,87.963,0,0,0,192,92.122Zm73.851,94.291A28.558,28.558,0,0,1,288,168.372v12.066A28.387,28.387,0,0,1,265.851,186.413ZM224,180.438V168.372a28.558,28.558,0,0,1,22.149,18.041A28.388,28.388,0,0,1,224,180.438ZM100.343,444.322l-.759-.3,51.326-87.988-13.82-8.062L93.6,422.515A51.707,51.707,0,0,1,73.65,407.609l76.731-123.956a594.233,594.233,0,0,1,53.883-73.667l12.725-14.847a44.4,44.4,0,0,0,6.85,3.794L201.633,256.66a673.525,673.525,0,0,0-27.994,92.027l-22.97,101.07A93.555,93.555,0,0,1,100.343,444.322Zm71.3,30.847-9.967-1.664,27.561-121.272A657.463,657.463,0,0,1,216.567,262.4l22.9-59.53-.589-.226c.967.063,1.935.107,2.908.107a44.389,44.389,0,0,0,6.214-.446V480H230.08A356.746,356.746,0,0,1,171.647,475.169Zm168.708,0A356.679,356.679,0,0,1,281.92,480H264V202.308a44.539,44.539,0,0,0,6.214.445c.973,0,1.942-.044,2.908-.107l-.589.226,22.9,59.528a657.575,657.575,0,0,1,27.326,89.833L350.32,473.505Zm90.124-59.806a51.533,51.533,0,0,1-12.083,7.153L374.91,347.969l-13.82,8.062,51.326,87.988-.757.3a93.563,93.563,0,0,1-50.328,5.435l-22.97-101.07a673.637,673.637,0,0,0-27.994-92.029l-22.206-57.726a44.479,44.479,0,0,0,6.85-3.793l12.726,14.849a594.176,594.176,0,0,1,53.881,73.663L438.35,407.609A51.619,51.619,0,0,1,430.479,415.362Z"/></g></svg>
            <span className="ml-2 font-bold">
            { siteTitle }
            </span>
          </Link>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect fill="none" height="22" width="22" y="-1" x="-1"/>
              </g>
              <g>
                <title>Menu</title>
                <line y2="4.5" x2="18.7426" y1="4.5" x1="1.54282" strokeWidth="3.5" stroke="red" fill="none"/>
                <line y2="10" x2="18.7426" y1="10" x1="1.54282" strokeWidth="3.5" stroke="green" fill="none"/>
                <line y2="17.5" x2="18.7426" y1="17.5" x1="1.54282" strokeWidth="3.5" stroke="yellow" fill="none"/>
              </g>
              </svg>
          </button>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto ml-auto`}
          >
            <div className="text-lg font-bold mt-3 md:m-0">
              <Link
                to="/"
                activeClassName="text-red-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Home
              </Link>

              <Link
                to="/products"
                partiallyActive
                activeClassName="text-red-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Products
              </Link>              
              <button className="snipcart-checkout inline-block align-middle"><span className="shopping-cart inline-block align-middle"><svg className="w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg></span>
              <span className="snipcart-items-count inline-block align-middle p-1"></span>
              <span className="snipcart-total-price inline-block align-middle p-1"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
