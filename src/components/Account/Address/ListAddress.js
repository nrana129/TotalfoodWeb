import React from "react";

const ListAddress = () => {
  return (
    <li>
      <div class="d-flex">
        <div class="name">Naveen Rana </div>
        <div class="address_place">
          <span>home</span>
        </div>
      </div>
      <div class="address">
        220/20 Street No 5 Mandawali, Delhi, Delhi, 110092{" "}
      </div>
      <div class="mobile_no">Phone Number : 9811266319 </div>
      <div class="bottom_foot">
        <div>
          <a href="#" class="open-popup-edit" data-address-id="344">
            edit
          </a>
        </div>
        <div>
          <a href="#" class="delete-address" data-address-id="344">
            Delete
          </a>
        </div>
        <p class="action-massage"></p>
      </div>
    </li>
  );
};

export default ListAddress;
