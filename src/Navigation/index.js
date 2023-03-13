import { navData } from "../constants/data";
import { useState } from "react";
import "../App.css";
import Dropdown from "../Navigation/Dropdown";
import ShowHome from "./ShowHome";
function Navigation() {
  const [dropdown, setDropDown] = useState(false);
  const [showhome, setShowHome] = useState(false);
  const hoverHnadlder = (id) => {
    console.log("object,", id);
    if (id === 4) {
      setDropDown(!dropdown);
      setShowHome(false);
      return <></>;
    } else if (id === 5) {
      setShowHome(!showhome);
      setDropDown(false);
    } else {
      setShowHome(false);
      setDropDown(false);
    }
  };

  const pull_data = (data) => {
    setDropDown(data);
  };
  const pull_datas = (data) => {
    setShowHome(data);
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
            />
            <p className="fs-6 text">{item.text}</p>
          </div>
        ))}
        <div></div>
      </div>

      {dropdown && (
        <Dropdown className="dropdown" dropdowns={dropdown} func={pull_data} />
      )}

      {showhome && (
        <>
          <ShowHome showhomes={showhome} fun={pull_datas} />
        </>
      )}
    </>
  );
}

export default Navigation;
