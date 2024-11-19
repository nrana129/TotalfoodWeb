import React, { useState, useEffect } from "react";
import { LocationBanner } from "../../assets/images/index";

const PinCode = ({ onAddressSelect }) => {
  const [pincode, setPincode] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false); // New state to control visibility

  useEffect(() => {
    // Retrieve address from localStorage on component mount
    const savedAddress = localStorage.getItem("selectedAddress");
    if (savedAddress) {
      setSelectedSuggestion({ formatted_address: savedAddress });
      setPincode(savedAddress); // Update pincode field with the saved address
    }
  }, []);

  const handlePincodeChange = async (event) => {
    const value = event.target.value;
    setPincode(value);

    if (value.length > 0) {
      try {
        const response = await fetch(
          `https://proxy.cors.sh/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
            value
          )}&key=AIzaSyBG8qOgtDAquWwMDnv4m2TFBZJHizuSnmU`,
          {
            headers: {
              "x-cors-api-key": "temp_efccee76b63a0822c956c81b6631296a",
            },
          }
        );
        const data = await response.json();

        setSuggestions(data.predictions);
        setShowSuggestions(true); // Show suggestions
      } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false); // Hide suggestions if input is empty
    }
  };

  const handleSuggestionClick = async (placeId) => {
    try {
      const response = await fetch(
        `https://proxy.cors.sh/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=AIzaSyBG8qOgtDAquWwMDnv4m2TFBZJHizuSnmU`,
        {
          headers: {
            "x-cors-api-key": "temp_efccee76b63a0822c956c81b6631296a",
          },
        }
      );
      const data = await response.json();
      const address = data.result.formatted_address;

      console.log("Address selected:", address); // Debugging

      setSelectedSuggestion({ formatted_address: address });
      setPincode(address); // Update pincode field with the selected address

      // Save address to localStorage
      localStorage.setItem("selectedAddress", address);

      setShowSuggestions(false); // Close suggestions after selection
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  const handleDoneClick = () => {
    if (onAddressSelect && selectedSuggestion) {
      console.log("Address confirmed:", selectedSuggestion.formatted_address); // Debugging
      onAddressSelect(selectedSuggestion.formatted_address); // Pass the selected address to the parent component
    }
  };

  return (
    <div className="pincode_sec">
      <img src={LocationBanner} alt="LocationBanner" />
      <form action="">
        <label htmlFor="">Enter your delivery pincode</label>
        <input type="text" onChange={handlePincodeChange} value={pincode} />
        {showSuggestions && ( // Render suggestions only if `showSuggestions` is true
          <div className="suggestion_div">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  onClick={() => handleSuggestionClick(suggestion.place_id)}
                  style={{ cursor: "pointer" }} // Ensure list items are clickable
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M16 2.01c-5.774 0-10.455 4.681-10.455 10.455 0 6.106 6.464 11.844 9.226 14.017a1.987 1.987 0 0 0 2.457 0c2.763-2.174 9.226-7.911 9.226-14.017C26.455 6.69 21.774 2.01 16 2.01zm0 14.32a4.043 4.043 0 1 1 0-8.086 4.043 4.043 0 0 1 0 8.086z"
                      fill="#000000"
                    />
                    <path
                      d="M20.552 26.017a40.162 40.162 0 0 1-2.21 1.88c-.666.522-1.497.811-2.342.811s-1.676-.288-2.341-.811a40.136 40.136 0 0 1-2.211-1.88c-2.446.38-4.078 1.053-4.078 1.824 0 1.187 3.864 2.15 8.63 2.15s8.63-.962 8.63-2.15c0-.771-1.633-1.445-4.078-1.824z"
                      fill="#000000"
                    />
                  </svg>
                  {suggestion.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button type="button" onClick={handleDoneClick}>
          Done
        </button>
      </form>
    </div>
  );
};

export default PinCode;
