import React from "react";
import "../../App.css";

function index() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide bg-danger "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/55b57eb5dc10377f.jpg?q=50"
            className="d-block w-100 position-relative"
            alt="1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/083f53a59985b125.jpg?q=50"
            className="d-block w-100"
            alt="2
      "
          />
        </div>
        <div className="carousel-item w-100">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/240/image/7ee90917a790cbe3.jpg?q=50"
            alt="3"
            className="d-block w-100"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev right-0 position-absolute"
        // style={{background:"hsla(0,0%,100%,.98)" , height: "170px" , width:"35px"}}
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default index;
