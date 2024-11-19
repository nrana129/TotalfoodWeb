import React from "react";

import MainLayout from "../../components/layouts/MainLayout";
// import "../../assets/css/theme.scss";

const ShippingPolicy = () => {
  return (
      <div className="inner_content_pages">
      <div className="container">
      <h1>Shipping / Delivery Information</h1>
        <p>We assure you fast and prompt delivery at your doorsteps.</p>
        <p>
          We offer same day delivery; if orders placed before 6 p.m. (unless
          specified otherwise) First attempt is strictly restricted to Main gate
          of building / complex / apartments, or security guards checkpoint etc.
          We shall not be held responsible for late delivery in case of
          insufficient address or contact details or if delivery failed in first
          attempt, consumers will be charged for such order and no refund will
          be done. In case of second attempt of delivery, consumers shall have
          to bear extra cost of re – delivery (if any).
        </p>
        <p>
          Same day delivery is not applicable on strikes / bandh / riots or
          other such circumstances, which may prevent the delivery boy to
          deliver the order in time. We also reserve the right to withdraw such
          services as it considered necessary from time to time.
        </p>
        <p>
          We preserve our right to cancel or reject the order once placed
          successfully if the delivery area is beyond to reach or if delivery
          boy was not available.
        </p>
        <p>
          Delivery charges may vary on distance, time and minimum order.
          Delivery charges, if any need to be paid will blink while placing the
          order. Total doesn’t have any minimum order threshold; however we
          offer free delivery to orders above INR 500. Delivery charges are
          extra for any bill value less than INR 500, offers and coupons will be
          applicable on the MRP price not on Delivery charges
        </p>
        <p>
          Order placed on any day between 8:00 A.M. to 6:00 P.M. shall be
          delivered on the same day. Any orders placed after 6:00 P.M. shall be
          delivered on the next working day of the store. If the immediate next
          working day is holiday for any reason, delivery will be done on the
          first working day after the order was placed.
        </p>
      </div>
      </div>
  );
};

export default ShippingPolicy;
