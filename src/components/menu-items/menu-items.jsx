import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-items.scss";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
  // if there is any size in the props then the css will be applied
    className={`${size} menu-item`}

    // navigates to match.url(current url) + the link url 
    onClick={() => history.push(`${match.url}${linkUrl}`)}


  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
        // STRING INTERPOLATION OF IMAGE url
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span title="subtitle"> SHOP NOW </span>
    </div>
  </div>
);
export default withRouter(MenuItem);
