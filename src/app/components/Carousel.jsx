'use client'

import { useState, useEffect, useRef } from 'react';

const Carousel = ({images}) => {
  const currentIndex = useRef(0);
  // eslint-disable-next-line 
  const [render, renderSet] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const carouselStyle = {
    width:"100vw",
    height:"100%",
    overflow: "hidden",
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % images.length;
      renderSet((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);


  const transformStyle = {
    display:"flex",
    width: `${screenWidth * images.length}px`,
    transform: `translate3d(-${screenWidth * currentIndex.current}px, 0, 0)`,
    transition: "transform 2s ease"
  };

  return (
    <div className='bg-yellow-'>
    <div className="carousel" style={carouselStyle}>
      <div className="slide-container" style={transformStyle}>
        {images.map((image, index) => (
          <img
            src={image}
            alt={`${index}th pic is missing`}
            key={index}
            style={{
              width: `${screenWidth}px`,
              height: `${screenWidth * 0.51}px`,
            }}
          />
        ))}
      </div>
    </div>
    <div 
        style={{
          top: `${screenWidth * 0.15}px`,
          position: 'absolute',
          zIndex: 2,
        }}
        className="absolute right-12 font-bold text-2xl">
          방문을 환영합니다
      </div>

    <div 
        style={{
          top: `${screenWidth * 0.35}px`,
          position: 'absolute',
          zIndex: 2,
        }}
        className="absolute right-12 font-bold text-2xl">
        Naeri <br/>
        <span className="text-3xl"><span className="text-green-600">사</span><span className="text-purple-600">육</span><span className="text-red-600">신</span></span> 건강지킴이 연구소<br />
      </div>
    </div>
    
  );
};

export default Carousel;