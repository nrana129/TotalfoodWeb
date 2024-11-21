import React from "react";
import Tabbing from "./Tabbing";

const RightSec = ({ productDetail }) => {
  console.log("productDetailproductDetailasdfasdf", productDetail);
  return (
    <>
      <div className="right_section">
        <h2>{productDetail[0]?.name}</h2>
        <p>
          Nine Months If Stored & Transported At Or Below Minus 18 ° C From Date
          Of Mfd
        </p>

        <div className="feautred_detail">
          <ul>
            <li>
              <span></span>
              <h3>{productDetail[0].options[0]?.ksp}</h3>

              {/* {JSON.stringify(productDetail[0].options[0].ksp)} */}
            </li>
            <li>
              <span></span>
              <h3>{productDetail[0].options[0]?.pieces}</h3>
            </li>
          </ul>
        </div>
        <div className="price_sec">
          <span className="price">{productDetail[0].options[0]?.price}</span>
        </div>
        <span className="inclusive_of_all_taxes">inclusive of all taxes</span>

        <div className="button_section">
          <div className="left_section">
            <button>Add</button>
          </div>
          <div className="right_section">
            <div className="qty">
              <button>-</button>
              <input type="text" />
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="product_details">
          <h2>Nutrition Value Per 100Gm</h2>
          <div className="nutrition_value_box">
            <div className="nutrition_value_inner">
              {productDetail[0].energry}
              <span>Energy</span>
            </div>
            <div className="nutrition_value_inner">
              {productDetail[0].protein}
              <span>Protein</span>
            </div>
            <div className="nutrition_value_inner">
              {productDetail[0].fat}
              <span>Fats</span>
            </div>
            <div className="nutrition_value_inner">
              {productDetail[0].carbs}
              <span>Carbs</span>
            </div>
          </div>

          <ul className="tabbingSec">
            <Tabbing
              title="Description"
              content={productDetail[0]?.description}
            />
            <Tabbing
              title="Storage Instructions"
              content={productDetail[0]?.storage_instructions}
            />
            <Tabbing
              title="Marketed By"
              content={productDetail[0]?.manufacturing_details}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightSec;
