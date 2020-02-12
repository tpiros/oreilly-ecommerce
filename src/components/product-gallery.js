import React from "react"

class ProductGallery extends React.Component {
  componentDidMount() {
    const myGallery = window.cloudinary.galleryWidget({
      container: "#my-gallery",
      cloudName: "tamas-demo",
      mediaAssets: [{
        tag: "jumper",
        transformation: {
          transformation: [{
            effect: "replace_color:008000:10:D79025"
          }]
        }
      }]
    });
    myGallery.render();
  }
  render() {
    return (
      <>
        <div id="my-gallery" className=""></div>
      </>
    )
  }
}

export default ProductGallery