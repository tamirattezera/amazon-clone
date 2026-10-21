import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { BiCart } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section className={classes.header__fixed}>
        <div className={classes.header__container}>
          {/* Top Row / Main Nav Bar */}
          <div className={classes.header__top}>
            {/* Logo & Delivery Section */}
            <div className={classes.left__container}>
              <div className={classes.logo__container}>
                <Link to="/">
                  <img
                    src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                    alt="amazon logo"
                  />
                </Link>
              </div>

              <div className={classes.delivery__container}>
                <span>
                  <GrLocation size={20} />
                </span>
                <div>
                  <p className={classes.deliver__text}>Delivered to</p>
                  <span className={classes.country__text}>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Desktop Search Bar Container */}
            <div
              className={`${classes.search__container} ${classes.desktop__search}`}
            >
              <select className={classes.search__select}>
                <option value="">All</option>
              </select>
              <input
                type="text"
                className={classes.search__input}
                placeholder="Search Amazon"
              />
              <div className={classes.search__iconContainer}>
                <IoSearch size={22} />
              </div>
            </div>

            {/* Right Side Navigation Links */}
            <div className={classes.right__container}>
              {/* Language Selector */}
              <div className={classes.language__container}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="US Flag"
                />
                <select className={classes.lang__select}>
                  <option value="">EN</option>
                </select>
              </div>

              {/* Sign In */}
              <Link to="/auth" className={classes.nav__item}>
                <p>Hello, Sign in</p>
                <span>Account & Lists</span>
              </Link>

              {/* Orders */}
              <Link to="/orders" className={classes.nav__item}>
                <p>Returns</p>
                <span>& Orders</span>
              </Link>

              {/* Cart */}
              <Link to="/cart" className={classes.cart__container}>
                <div className={classes.cart__count}>0</div>
                <BiCart size={35} />
                <span className={classes.cart__text}>Cart</span>
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar Row */}
          <div
            className={`${classes.search__container} ${classes.mobile__search}`}
          >
            <select className={classes.search__select}>
              <option value="">All</option>
            </select>
            <input
              type="text"
              className={classes.search__input}
              placeholder="Search Amazon"
            />
            <div className={classes.search__iconContainer}>
              <IoSearch size={22} />
            </div>
          </div>
        </div>
      </section>

      <LowerHeader />
    </>
  );
}

export default Header;
