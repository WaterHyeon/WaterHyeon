import { React, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./data";
import './slide.css';


const renderSlides = imageData.map(image => (
    <div key={image.alt} id="banner" className="imageSection">
      <div class="content">
        <img src={image.url} alt={image.alt} />
        <h1 className="slidetxt">{image.title}</h1>
        <p className="slidetxtsub">{image.content}</p>
      </div>
    </div>
));

const Slide = () => {

 const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="inner flex justify-center items-center py-5 px-3">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="w-[400px] lg:hidden">
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default Slide;