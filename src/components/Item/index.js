import ThreeSixty from "react-360-view";
import "../../App.css";

function Item() {
  const basePath = "https://fastly-production.24c.in/webin/360";

  return (
    <>
      <div className="d-flex justify-content-around  m-5">
        <div class="card" style={{ width: "18rem" }}>
          <ThreeSixty
            amount={75}
            imagePath={basePath}
            fileName="output_{index}.jpeg"
            spinReverse
          />
          <div class="card-body ">
            <h5 class="" style={{ marginTop: "-40px" }}>
              Toy Vehicles
            </h5>
            <p class="card-text mt-3">From ₹99</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <div class="sketchfab-embed-wrapper ">
            <iframe
              style={{ width: "18rem" }}
              title="White_boot"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/8a27904500294577954a905d834abd1f/embed?ui_theme=dark"
            />
          </div>
          <div class="card-body ">
            <h5 class="" style={{ color: "#878787", fontWeight: 500 }}>
              Woakers
            </h5>
            <p class="card-text white">
              White Sneakers For Men Sneakers For Men (White)
            </p>
            <h5>
              ₹486{" "}
              <span className="ms-3 me-4">
                <s>₹3222</s>
              </span>{" "}
              <span style={{ color: "#26a541" }}>65% off</span>
            </h5>
            <p>
              <span className="f-6"> Size</span> 6, 7, 8, 9, 10
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://rukminim1.flixcart.com/image/200/200/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=70"
            style={{ width: "18rem" }}
            alt=""
          />

          <div class="card-body ">
            <h5 class="" style={{ color: "#878787", fontWeight: 500 }}>
              Woakers
            </h5>
            <p class="card-text white">
              White Sneakers For Men Sneakers For Men (White)
            </p>
            <h5>
              ₹486{" "}
              <span className="ms-3 me-4">
                <s>₹3222</s>
              </span>{" "}
              <span style={{ color: "#26a541" }}>65% off</span>
            </h5>
            <p>
              <span className="f-6"> Size</span> 6, 7, 8, 9, 10
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://rukminim1.flixcart.com/image/80/80/kylvr0w0/mouse/v/8/i/pop-wireless-multi-device-logitech-original-imagasukheypwhh4.jpeg?q=70"
            style={{ width: "18rem" }}
            alt=""
          />

          <div class="card-body ">
            <h5 class="" style={{ color: "#878787", fontWeight: 500 }}>
              Mouse
            </h5>
            <p class="card-text white">
              Logitech POP Wireless Multi-Device Wireless Optical Mouse with
              Bluetooth (Heartbreaker)
            </p>
            <h5>₹255</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
