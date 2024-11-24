import React, { useState } from "react";
import PortalPop from "../../PortalPop/PortalPop"; // Assuming PortalPop is reusable
import EditAddressForm from "./EditAddressForm/EditAddressForm"; // Import your edit form component

const ListAddress = () => {
  const [isEditPortalOpen, setIsEditPortalOpen] = useState(false); // State to manage portal visibility

  const handleEditClick = () => {
    setIsEditPortalOpen(true); // Open portal on edit click
  };

  const handleClosePortal = () => {
    setIsEditPortalOpen(false); // Close portal
  };

  return (
    <li>
      <div className="d-flex">
        <div className="name">Test User</div>
        <div className="address_place">
          <span>Work</span>
        </div>
      </div>
      <div className="address">123 Street Name</div>
      <div className="mobile_no">Phone Number: 9876543210</div>
      <div className="bottom_foot">
        <div>
          <a
            href="#"
            className="open-popup-edit"
            onClick={(e) => {
              e.preventDefault();
              handleEditClick(); // Open the edit portal
            }}
          >
            Edit
          </a>
        </div>
        <div>
          <a href="#" className="delete-address">
            Delete
          </a>
        </div>
        <p className="action-message"></p>
      </div>

      {/* Portal for Edit Address Form */}
      {isEditPortalOpen && (
        <PortalPop onClose={handleClosePortal}>
          <EditAddressForm onClose={handleClosePortal} />
        </PortalPop>
      )}
    </li>
  );
};

export default ListAddress;
