import React, { useState } from "react";
import "./Sort.scss";

const Sort = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the option list

  // Toggle the option list visibility
  const handleSortToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  // Handle when an option is clicked
  const handleOptionClick = (order) => {
    setIsOpen(false); // Close the dropdown
    onSortChange(order); // Call the parent function to update sort order
  };

  return (
    <div className="sort_section">
      <h2 onClick={handleSortToggle}>
        Sort By: <strong>Position</strong>
      </h2>
      {/* Show the option list only if isOpen is true */}
      {isOpen && (
        <ul className="option_list">
          <li onClick={() => handleOptionClick("asc")}>Price: Low to High</li>
          <li onClick={() => handleOptionClick("desc")}>Price: High to Low</li>
        </ul>
      )}
    </div>
  );
};

export default Sort;
