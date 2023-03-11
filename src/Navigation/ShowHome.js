import React from "react";
import { Kitchen ,Tableware,Kitche,Living} from "./subMenu/utils";

function ShowHome() {
  return (
    <>
      <div className="bg-danger container text-white">
        <div className="row">
          <div className="col-3 ">
            <h6>Kitchen, Cookware & Serveware</h6>
            {Kitchen.map((item, index) => {
              return <><p key={index}>{item.name}</p></>;
            })}

            <h6>Tableware & Dinnerware</h6>
            {Tableware.map((item, index) => {
              return <><p key={index}>{item.name}</p></>;
            })}

            <h6>Kitchen Storage</h6>
            {Kitche.map((item, index) => {
              return <><p key={index}>{item.name}</p></>;
            })}


          </div>
          <div className="col-3">
            <h6>Furniture Top Offers</h6>
            <h6>Bed Room Furniture</h6>
            <p>Beds</p>
            <p>Mattresses</p>
            <p>Wardrobes</p>

            <h6>Living Room Furniture</h6>
            {Living.map((item, index) => {
              return <><p key={index}>{item.name}</p></>;
            })}

          </div>
          <div className="col-3">dd</div>
          <div className="col-3">ddd</div>
        </div>
      </div>
    </>
  );
}

export default ShowHome;
