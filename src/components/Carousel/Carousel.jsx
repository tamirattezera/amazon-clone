import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
import classes from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={classes.carousel__container}>
      <ReactCarousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {img.map((imageItemLink, index) => {
          return <img key={index} src={imageItemLink} alt="" />;
        })}
      </ReactCarousel>
      <div className={classes.hero__fade}></div>
    </div>
  );
}

export default Carousel;
