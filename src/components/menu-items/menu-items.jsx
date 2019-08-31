import React from "react";
import "./menu-items.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  <div
    
    className={`${size} menu-item`}
    // if there is any size in the props then the css will be applied
  >
      <div className = 'background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
        // STRING INTERPOLATION OF IMAGE url
      }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span title="subtitle"> SHOP NOW </span>
    </div>
  </div>
);
export default MenuItem;
