import React, { useState } from "react";

function Dropdown() {
  const [dropdown, setDropDown] = useState(true);
  const hoverHnadlder = () => {
    setDropDown(true);
    console.log("object drop false");
  };

  const hoverHnadlders = () => {
    setDropDown(false);
    console.log("909090 patel is back");
  };
  return (
    <div
      className="Fasion"
      onMouseOver={() => hoverHnadlder()}
      onMouseOut={() => hoverHnadlders()}
    >
      {dropdown && (
        <>
          <p>hello</p> <p>jay</p>
          <p>ram</p>
          <p>hell 21212</p>
          <p>hell 21212</p>
          <p>hell 21212</p>
          <p>hell 21212</p>
        </>
      )}
    </div>
  );
}

export default Dropdown;
