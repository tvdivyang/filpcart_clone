import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "../../App.css";
import { logo, pluslogo } from "../../img/index";
import Search from "./Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <>
      <AppBar className="Appbar ">
        <Toolbar style={{ minHeight: 55 }} className="d-flex ">
          <div className="ms-5 ">
            <a href="/">
              <img
              className="ms-3"
                src={logo}
                alt="Flipkart"
                title="Flipkart"
                style={{ width: 75 }}
              />
            </a>
            <div className="fs-6 ms-3 me-5">
              Explore <span style={{ color: "#ffe500" }}>Plus</span>
              <a href="/">
                <img
               
                  src={pluslogo}
                  alt="Flipkart_plus_logo"
                  style={{ width: 10 }}
                />
              </a>
            </div>
          </div>
          <Search  />
          <div className="d-flex mt-3 align-item-center">
            <button
              type="button"
              className="btn bg-white btn-height btn-sm me-5 ms-5   "
            >
              Login
            </button>
            <p className="me-5">Become a seller</p>
            <p className="me-5">More</p>

            <div>
              <p> <ShoppingCartIcon></ShoppingCartIcon> Cart</p>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
