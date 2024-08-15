import React, { useEffect, useState } from 'react';
import { TestStyle } from "./styles";


export const TestCarousel: React.FC = () => {
  const messages = [
    "Empower Your Business with Innovative Electronic Design",
    "Unlock the Potential of Electronics to Transform Your Business"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to rotate carousel items in a single direction
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);
  
  return (
    <TestStyle>
    <div className="carousel">
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {messages.map((message, index) => (
          <div className="carousel-item" key={index}>
            {message}
          </div>
        ))}
      </div>
    </div>
    </TestStyle>
  );
};

