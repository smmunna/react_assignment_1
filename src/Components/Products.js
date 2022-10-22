import React from "react";

function Products(props) {
  const { title, price, image, description, rating } = props;
  return <div className="card-style">
      
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p>Price: ${price}</p>
        <p>Rating: {rating}/5</p>
        <h6>{description}</h6>
        <button className="btn btn-primary">Add to Card</button>
      </div>
      </div>
    
}

export default Products;
