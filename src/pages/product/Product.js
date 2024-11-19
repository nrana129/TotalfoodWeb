import React from "react";


const Product = () => {
  return (
      <div className="page-main">
        <div className="container">
          <div className="flex">
            <div className="left_section">          
              {/* Use next/image for optimized image */}
              <img 
                src="https://totalfood.greenhonchos.in/media/catalog/product/cache/c268a9164b491bcbb984c0cb4a259ed1/4/_/4.jpg" 
                alt="Product Image" 
                width={500} 
                height={500} 
                layout="responsive" 
              />
            </div>
            <div className="right_section">
              <h1>Product Name</h1>
              <p>Product description goes here. It provides details about the product, its features, and other relevant information.</p>
              <button>Add to Cart</button>
            </div>
          </div>  
        </div>
      </div>
  );
};

export default Product;
