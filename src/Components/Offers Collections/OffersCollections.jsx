import React from "react";
import "./OffersCollections.css";
import relateddata_product from "../Assets/relateddata";
import Item from "../Item/Item";

const OffersCollections = () => {
  return (
    <div className="offerscollections">
      <h1>Exclusive Offers</h1>
      <hr />
      <div className="offerscollections-item">
        {relateddata_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OffersCollections;
