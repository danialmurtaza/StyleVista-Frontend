import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
// import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const initialDisplayCount = 6;

  const filteredProducts = all_product.filter(
    (item) => props.category === item.category
  );

  const totalProductsInCategory = filteredProducts.length;

  const toggleShowAll = () => {
    // event.preventDefault();
    // const scrollY = window.scrollY;
    setShowAll(!showAll);
    // window.scroll(0, scrollY);
  };

  // const handleSortChange = (event) => {
  //   setSortOption(event.target.value);
  // };

  const handleSortChange = (value) => {
    setSortOption(value);
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".shopcategory-sort")) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.new_price - b.new_price;
      case "price-high-low":
        return b.new_price - a.new_price;
      case "name-a-z":
        return a.name.localeCompare(b.name);
      // return (a.name || "").localecompare(b.name || "");
      case "name-z-a":
        return b.name.localeCompare(a.name);
      // return (b.name || "").localecompare(a.name || "");
      default:
        return 0;
    }
  });

  const formatSortOption = (option) => {
    switch (option) {
      case "price-low-high":
        return "Price: Low to High";
      case "price-high-low":
        return "Price: High to Low";
      case "name-a-z":
        return "Name: A to Z";
      case "name-z-a":
        return "Name: Z to A";
      default:
        return "Default";
    }
  };

  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        <div className="shopcategory-banner-left">
          <h2>FLAT 50% OFF</h2>
          <p>
            <span>12</span> Hours <span>20</span> Mins
          </p>
          <button>Explore now</button>
        </div>
        <div className="shopcategory-banner-right">
          <img
            className="shopcategory-banner-image"
            src={props.banner}
            alt=""
          />
        </div>
      </div>
      {/* <img className="shopcategory-banner" src={props.banner} alt="" /> */}
      <div className="shopcategory-indexsort">
        <p>
          <span>
            Showing 1-
            {showAll
              ? totalProductsInCategory
              : Math.min(initialDisplayCount, totalProductsInCategory)}
          </span>
          out of {totalProductsInCategory} products.
        </p>
        <div className="shopcategory-sort">
          Sort by :{/* <img src={dropdown_icon} alt="" /> */}
          <div
            className="select-selected"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            {sortOption === "default"
              ? "Default"
              : formatSortOption(sortOption)}
          </div>
          <div
            className={`select-items ${dropdownVisible ? "" : "select-hide"}`}
          >
            <div onClick={() => handleSortChange("default")}>Default</div>
            <div onClick={() => handleSortChange("price-low-high")}>
              Price: Low to High
            </div>
            <div onClick={() => handleSortChange("price-high-low")}>
              Price: High to Low
            </div>
            <div onClick={() => handleSortChange("name-a-z")}>Name: A to Z</div>
            <div onClick={() => handleSortChange("name-z-a")}>Name: Z to A</div>
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts
          // .filter((item) => props.category === item.category)
          .slice(0, showAll ? totalProductsInCategory : initialDisplayCount)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <button className="shopcategory-loadmore" onClick={toggleShowAll}>
        {/* Explore More */}
        {showAll ? "Show Less" : "Explore More"}
      </button>
    </div>
  );
};

export default ShopCategory;
