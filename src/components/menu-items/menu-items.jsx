import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-items.scss";
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
  // if there is any size in the props then the css will be applied
    className={`${size} menu-item`}

    /* navigates to match.url + the link url 
    basically menulist are at / on the homepage renders to the linkURL after / */
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
