import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce, short for electronic commerce, refers to the buying and
          selling of goods and services over the internet. It has transformed
          the way businesses operate and how consumers make purchases.
          E-commerce encompasses a wide range of activities, from online retail
          stores and auction websites to digital marketplaces and mobile
          commerce platforms.
        </p>
        <p>
          One of its primary strengths lies in its global reach, allowing
          businesses to transcend geographical boundaries and tap into a vast,
          diverse customer base. Accessibility is a key hallmark, with
          e-commerce platforms available 24/7, offering unparalleled convenience
          as customers can browse, compare, and make purchases from the comfort
          of their homes. The expansive product range on these platforms caters
          to diverse preferences, while cost savings for businesses translate
          into competitive pricing.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
