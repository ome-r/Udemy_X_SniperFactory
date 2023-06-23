import React, { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg",
  ];

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  S;
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={goToPrevSlide}>prev</button>
      <img src={images[currentIndex]} alt="Slide" />
      <button onClick={goToNextSlide}>next</button>
    </div>
  );
};

export default ImageSlider;
