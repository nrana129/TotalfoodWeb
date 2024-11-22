import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
// import "../../assets/css/theme.scss";

const About = () => {
  return (
      <div className="inner_content_pages about_us">
        <div className="container">
          <div className="our_story_main">
            <div className="our_story_left">
              <div className="our_story">
                <h4>Our Story</h4>
                <p>
                  Shalimar Group has remained as one of the largest producers of
                  chicken and poultry products across India for many glorious
                  decades. To expand its horizons in quick snacks, fresh-packed
                  chicken, farm-fresh eggs and cold cuts, the group started its
                  brand under the name &apos;Total&apos;.
                </p>
                <p>
                  Total is a bunch of passionate food creators that aim at
                  bringing great quality poultry products at affordable prices,
                  we have 15 years of expertise in the food industry. Our
                  products are a delight to eat and nutritious as meals. We
                  offer fresh chicken, quick snacks, and cold cuts in the frozen
                  food category to the food servicing industries, QSRs and
                  modern retailers across and outside of India. We also provide
                  a wide range of table eggs to modern retailers in India.
                </p>
                <p>
                  Total aims to deliver world-class poultry products to
                  people through its robust supply chain management and state of
                  the art food processing plant. We promise to deliver great
                  taste and good value with each of our products.
                </p>
              </div>
              <div className="our_quality">
                <h4>Quality Control</h4>
                <p>
                  We maintain extremely high standards of Quality control
                  procedures at all times. Our QC guidelines include a wide
                  array of different applications, quality tests in every step,
                  and environmental awareness within the company as well as
                  among the stakeholders.
                </p>
              </div>
            </div>
            <div className="our_story_right">
              <div className="our_img">
                <img
                  src="https://totalfood.greenhonchos.in/media/.renditions/wysiwyg/our_story.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="our_hygen">
            <ul>
              <li>
                <span>
                  <img
                    src="https://totalfood.greenhonchos.in/media/.renditions/wysiwyg/about-us/hygine.png"
                    alt=""
                  />
                </span>{" "}
                Hygienically Processed &amp; Packed
              </li>
              <li>
                <span>
                  {" "}
                  <img
                    src="https://totalfood.greenhonchos.in/media/.renditions/wysiwyg/about-us/quality.png"
                    alt=""
                  />
                </span>{" "}
                Quality &amp; Convenience Assured
              </li>
              <li>
                <span>
                  {" "}
                  <img
                    src="https://totalfood.greenhonchos.in/media/.renditions/wysiwyg/about-us/safe.png"
                    alt=""
                  />
                </span>{" "}
                Safe &amp; Fast Delivery
              </li>
            </ul>
          </div>
          <div className="our_mission_main our_same_section">
            <div className="our_mission_left our_same_left">
              <img
                src="https://totalfood.greenhonchos.in/media/.renditions/wysiwyg/our_mission.png"
                alt=""
              />
            </div>

            <div className="our_mission_right our_same_right">
              <h4>Our mission</h4>
              <p>
                Our mission is to reach out to our end consumers directly,
                providing them with the safest and most hygienic food, at
                affordable prices and in a convenient manner. In order to
                achieve this, we aim to create strong back-end infrastructure,
                embrace more eco-friendly and sustainable methods of production
                and increase our presence in the retail segment.
              </p>
            </div>
          </div>
          <div className="our_vission our_same_section">
            <div className="our_vission_left our_same_left">
              <h4>Our vision</h4>
              <p>
                Our vision is to be able to serve the society by holding the
                banner of the Group high, steadily moving forward, creating
                conducive work environment and continuing to build sustainable
                and profitable verticals in the Poultry, Aqua, Dairy and Soya
                sectors. This will enable us to always meet the growing demand
                for food in the future and contribute to our ever-blossoming
                Indian society.
              </p>
            </div>
            <div className="our_vission_right our_same_right">
              <img
                src="https://totalfood.greenhonchos.in/media/.renditions/wysiwyg/our_vision.png"
                alt=""
              />
            </div>
          </div>
          <div className="our_available">
            <h4>Also Available At</h4>
            <ul>
              <li>
                <img src="https://totalfood.greenhonchos.in/media//wysiwyg/about-us/bigbasket.png" />
              </li>
              <li>
                <img src="https://totalfood.greenhonchos.in/media//wysiwyg/about-us/bigbazar.png" />
              </li>
              <li>
                <img src="https://totalfood.greenhonchos.in/media//wysiwyg/about-us/grofers.png" />
              </li>
              <li>
                <img src="https://totalfood.greenhonchos.in/media//wysiwyg/about-us/spencers.png" />
              </li>
              <li>
                <img src="https://totalfood.greenhonchos.in/media//wysiwyg/about-us/swiggy.png" />
              </li>
              <li>
                <img src="https://totalfood.greenhonchos.in/media//wysiwyg/about-us/zomato.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default About;
