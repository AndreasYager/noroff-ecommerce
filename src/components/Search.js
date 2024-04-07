import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch all products initially
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const json = await response.json();
        setAllProducts(json.data || []);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };
    fetchAllProducts();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setDropdownOpen(filteredSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setDropdownOpen(false);
    }
  }, [searchTerm, allProducts]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/product/${suggestion.id}`);
  };

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
      className="w-100"
    >
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="w-100"
        />
      </DropdownToggle>
      <DropdownMenu className="w-100">
        {suggestions.map((suggestion) => (
          <DropdownItem
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
            className="d-flex align-items-center"
          >
            <img
              src={suggestion.image.url}
              alt={suggestion.image.alt}
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            {suggestion.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Search;
