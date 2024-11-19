import React from "react";
import Tabbing from "../DetailPage/Tabbing";

const RightSec = () => {
  return (
    <>
      <div className="right_section">
        <h2>Chicken Black Pepper Salami</h2>
        <p>
          Nine Months If Stored & Transported At Or Below Minus 18 ° C From Date
          Of Mfd
        </p>

        <div className="feautred_detail">
          <ul>
            <li>
              <span></span>
              <h3>Serves 2</h3>
            </li>
            <li>
              <span></span>
              <h3>Serves 2</h3>
            </li>
          </ul>
        </div>
        <div className="price_sec">
          <span className="price">₹150.00</span>
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
              121.42 kcal<span>Energy</span>
            </div>
            <div className="nutrition_value_inner">
              13.84 g<span>Protein</span>
            </div>
            <div className="nutrition_value_inner">
              1.40g<span>Fats</span>
            </div>
            <div className="nutrition_value_inner">
              12.97 g<span>Carbs</span>
            </div>
          </div>

          <ul className="tabbingSec">
            <Tabbing
              title="Description"
              content={[
                "Total Chicken Is Reared At Our Own Farms And Delicately Processed At Our State-Of-The-Art Facilities With Imported Machinery, Meeting High Biosecurity And Hygiene Standards.",
                <br key="1" />,
                "From Farm To Fork, Total Frozen Chicken Precut Ticks All The Boxes In Terms Of Safety, Quality And Health.",
                <br key="2" />,
                "Birds Fed With Nutritious Feed From Our Own Feed Mills",
                <br key="3" />,
                "Antibiotic Residue Free",
                <br key="4" />,
                "Iso 22000:2005 And Haccp Certified",
                <br key="5" />,
                "Halal Certified",
                <br key="6" />,
                "Hygienically Packed And Sealed",
                <br key="7" />,
                "Insulated And Temperature-Controlled Storage And Delivery",
                <br key="8" />,
                "Cold Chain Transportation In Reefer Vehicles",
                <br key="9" />,
                "So, Combine The Freshness, Juiciness, Tenderness, And Succulence Of Total Frozen Chicken Precut Into A Nutritious Whole And Satiate Your Desire For An Ideal Meal!",
              ]}
            />
            <Tabbing
              title="Storage Instructions"
              content="12 Months If Stored & Transported At Or Below Minus 18 ° C"
            />
            <Tabbing
              title="Marketed By"
              content="Shalimar Hatcheries Limited Vill :Manikbazar, P.S: Galsi , P.O: Jharul , Dist :Purba Bardhaman , Pin:713403 Product Of India License Number: 10015031001407"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightSec;
