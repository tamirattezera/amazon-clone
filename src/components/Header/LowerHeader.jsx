import React from "react";
import classes from "./LowerHeader.module.css";
import { IoMdMenu } from "react-icons/io";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <IoMdMenu size={22} />
          <p>All</p>
        </li>
        <li>Prime Video</li>
        <li>Coupons</li>
        <li>Customer Service</li>
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
