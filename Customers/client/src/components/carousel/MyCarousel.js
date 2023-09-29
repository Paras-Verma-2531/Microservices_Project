import React from "react";
import { Carousel } from "antd";
import image from "../../assets/image.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
function MyCarousel() {
  const contentStyle = {
    margin: 0,
    height: "92vh",
    borderRadius: "5px",
    color: "#fff",
    background: "#D2E0FB",
  };

  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            src={image}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            src={image2}
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}><img
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            src={image3}
          /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            src={image4}
          /></h3>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
