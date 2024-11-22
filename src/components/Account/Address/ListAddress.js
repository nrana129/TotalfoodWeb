import React from "react";

const ListAddress = () => {
  return (
    <li>
      <div class="d-flex">
        <div class="name">test test </div>
        <div class="address_place">
          <span>work</span>
        </div>
      </div>
      <div class="address">twat </div>
      <div class="mobile_no">Phone Number : 9876543210 </div>
      <div class="bottom_foot">
        <div>
          <a href="#" class="open-popup-edit" data-address-id="594">
            edit
          </a>
        </div>
        <div>
          <a href="#" class="delete-address" data-address-id="594">
            Delete
          </a>
        </div>
        <p class="action-massage"></p>
      </div>
    </li>
  );
};

export default ListAddress;
