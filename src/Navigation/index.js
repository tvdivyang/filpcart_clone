import React from "react";
import { navData } from "../constants/data";
import { useState } from "react";
import "../App.css";
import Dropdown from "../Navigation/Dropdown";
function Navigation() {
  const [dropdown, setDropDown] = useState(false);
  const hoverHnadlder = (id) => {
    console.log("object,", id);
    if (id === 3) {
      setDropDown(true);
      return <></>;
    }
  };

  const hoverHnadlders = () => {
    // setDropDown(false);
  };
  return (
    <>
      <div
        style={{ margin: "55px 130px 0px 130px" }}
        className="d-flex justify-content-around"
      >
        {navData.map((item, index) => (
          <div
            style={{ padding: "12px 8px" }}
            className="text-center"
            key={index}
          >
            <img
              style={{ width: 64 }}
              src={item.url}
              alt="hello"
              onMouseOver={() => hoverHnadlder(item.id)}
              onMouseOut={() => hoverHnadlders(item.id)}
            />
            <p className="fs-6 text">{item.text}</p>
          </div>
        ))}
        <div></div>
      </div>

      {dropdown && <Dropdown className="dropdown"></Dropdown>}
    </>
  );
}

export default Navigation;
