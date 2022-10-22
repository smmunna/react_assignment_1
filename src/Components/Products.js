import React from "react";

function Products(props) {
  const { title, price, image, description, rating } = props;
  return <div className="card-style">
      
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Rating: {rating}/5</p>
        <p class="card-text">{description}</p>
        <button className="btn btn-primary">Add to Card</button>
      </div>
      </div>
    
}

export default Products;
