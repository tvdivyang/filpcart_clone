import React, { useState } from "react";
import { Audio } from "./subMenu/utils";
import { Cameras } from "./subMenu/utils";
import { Computer } from "./subMenu/utils";
import { Gaming } from "./subMenu/utils";
import "../App.css"



function Dropdown({ dropdowns, func }) {
  const [show, setShow] = useState(dropdowns);
  // const [submenu, setSubMenu] = useState(true);
  const [audio, setAudio] = useState(false);
  const [camerass, setCamerass] = useState(false);
  const [comput, setComputer] = useState(false);
  const [game, setGame] = useState(false);

  const hoverHnadlders = () => {
    setShow(!show);
    func(!show);
  };

  const helloo = (exp) => {
    console.log("aubio", exp.target.id);
    const menuid = exp.target.id;

    if (menuid === "11") {
      setAudio(!audio);
    
    } 
     
     if (menuid === "13") {
       setAudio(false);
      setCamerass(true);
    } else if (menuid === "14"){
      setCamerass(false);
      setComputer(!comput);
    }else if(menuid === "15"){
      setComputer(false);
      setGame(true)
    }
    else{
      setCamerass(false);
      setComputer(false);
      setGame(false);
    }
  };
  return (
    <div
      className="Fasion  position-absolute "
      onMouseLeave={() => hoverHnadlders()}
      onMouseOver={() => setShow(show)}
    >
      {show && (
        <>
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-6 Electronic"
                onMouseOver={(e) => helloo(e)}
                style={{ background: "#f1f6f2" }}
              >
                <p id="11">Audio</p>
                <p id="13">Cameras & Accessories</p>
                <p id="14">Computer Peripherals</p>
                <p id="15">Gaming</p>
                <p id="16">Health & Personal Care</p>
                <p id="17">Laptop Accessories</p>
                <p id="18">Laptop and Desktop</p>
                <p id="19">Mobile Accessories</p>
                <p id="20">Powerbank</p>
              </div>

              <div className="col-6 position-relative" style={{background:"#e3e3e3"}}  >
                {audio && (
                  <>
                    {Audio.map((item, index) => {
                      return <p className="submenuitem" key={index}>{item.name}</p>;
                    })}
                  </>
                )}
                {/* {showelectrinics && <Electronics />} */}
                {camerass && (
                  <>
                    {Cameras.map((item, index) => {
                      return <p className="submenuitem" key={index}>{item.name}</p>;
                    })}
                  </>
                )}
                {comput && (
                  <>
                    {Computer.map((item, index) => {
                      return <p className="submenuitem" key={index}>{item.name}</p>;
                    })}
                  </>
                )}
                 {game && (
                  <>
                    {Gaming.map((item, index) => {
                      return <p className="submenuitem" key={index}>{item.name}</p>;
                    })}
                  </>
                )}
              </div>

           
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dropdown;
