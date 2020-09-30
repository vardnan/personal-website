import React from "react";
import "../styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";
import ProductPhoto from "../components/ProductPhotos";
import product_photos from "../productPhotoURLs";
import NavBar from "../components/NavBar";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function CreateProductPhotos(photos) {
  return <ProductPhoto key={photos.id} title={photos.title} url={photos.url} />;
}

function ProductDesign() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavBar />
        <div className="cover-container">
          <motion.div
            className="cover-title-div"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ delay: 0.6, ...transition }}
          >
            <h2 className="cover-title">Personal Projects</h2>
            <h3 className="cover-description">Digital UI & UX Design</h3>
          </motion.div>
          <Cover
            alt="text"
            url={
              "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/wkQN-product-design-cover@4x.png"
            }
          />
        </div>
        <div className="product-container">
          {product_photos.map(CreateProductPhotos)}
        </div>
      </div>
    </body>
  );
}

export default ProductDesign;
