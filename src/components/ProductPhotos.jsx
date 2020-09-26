import React from "react";
import "../styles.css";

function ProductPhoto(props) {
  return (
    <div className="product-box">
      <p className="product-title">{props.title}</p>
      <img className="product-photo" src={props.url} alt={props.alt} />
    </div>
  );
}

export default ProductPhoto;
