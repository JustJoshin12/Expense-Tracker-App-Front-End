import React, { useState, useEffect } from 'react';
import image1 from "../../images/image1.webp";
import image2 from "../../images/image2.webp";
import image3 from "../../images/image3.webp";
import image4 from "../../images/image4.webp";
import image5 from "../../images/image5.webp";


// Example images array. Replace these URLs with your own images.
const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-[600px] h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 w-full h-full bg-right bg-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default ImageSlideshow;
