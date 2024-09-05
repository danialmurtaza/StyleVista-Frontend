import React, { useRef } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/New Collections/NewCollections";
import OffersCollections from "../Components/Offers Collections/OffersCollections";
// import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  // Create a ref for NewCollections
  const newCollectionsRef = useRef(null);
  const ExclusiveOffersRef = useRef(null);

  // Scroll function to pass to the Hero component
  const scrollToNewCollections = () => {
    newCollectionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExclusiveOffers = () => {
    ExclusiveOffersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero scrollToNewCollections={scrollToNewCollections} />
      <Popular />
      <Offers scrollToExclusiveOffers={scrollToExclusiveOffers} />
      {/* Attach the ref to NewCollections */}
      <div ref={newCollectionsRef}>
        <NewCollections />
      </div>
      {/* <NewsLetter /> */}
      <div ref={ExclusiveOffersRef}>
        <OffersCollections />
      </div>
    </div>
  );
};

export default Shop;
