import React from "react";
import { useState } from "react";
import { Kitchen ,Tableware,Kitche,Living} from "./subMenu/utils";
import "../App.css"

function ShowHome({showhomes,fun}) {
  const [show, setShow] = useState(showhomes);

  const hoverHnadlders = () => {
    setShow(!show);
    fun(!show);
  };

  return (

    <>
    <div
    className=""
     onMouseLeave={() => hoverHnadlders()}
     onMouseOver={() => setShow(show)}>
      {show && (
        <div className="container">
        <div className="row">
          <div className="col-3 homeitemHover" style={{background:"#f9f9f9"}}>
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
          <div className="col-3 homeitemHover" style={{background:"#bebebe"}}>
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
          <div className="col-3 homeitemHover" style={{background:"#f9f9f9"}}>
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
          <div className="col-3 homeitemHover" style={{background:"#bebebe"}}>
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
          
        </div>
      </div>
      )}
    
    </div>
      
    </>
  );
}

export default ShowHome;
